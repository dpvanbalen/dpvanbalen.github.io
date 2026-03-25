port module Main exposing (..)

import Audio
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http exposing (Error(..))
import Json.Decode
import Json.Encode as Json
import Time

import Types exposing (..)
import Database exposing (..)
import Video exposing (..)
import Secrets exposing (..)
import Dict

import Dialog
import Maybe.Extra
import Utils exposing (..)
import Karakters exposing (..)

-- PORTS

port audioPortToJS : Json.Value -> Cmd msg
port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg
port confetti : Json.Value -> Cmd msg



-- MAIN

main : Program String (Audio.Model Msg Model) (Audio.Msg Msg)
main =
  Audio.elementWithAudio
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    , audio = audio
    , audioPort = { toJS = audioPortToJS, fromJS = audioPortFromJS }
    }


-- MODEL



init : String -> (Model, Cmd Msg, Audio.AudioCmd Msg)
init oauthtoken =
  ( NotLoggedIn { password = "", fromrsvpsheet = Nothing, chars = Dict.empty, poirot = Nothing, hover = Nothing }
  , readRSVP oauthtoken
  , Audio.loadAudio PoirotReady "https:dpvanbalen.github.io/images/poirot.mp3"
  )



-- UPDATE


update : Audio.AudioData -> Msg -> Model -> (Model, Cmd Msg, Audio.AudioCmd Msg)
update _ msg model = let todo = (model, Cmd.none, Audio.cmdNone) in
  case model of
   NotLoggedIn m -> case msg of
    PassChange newpass -> (NotLoggedIn {m | password = newpass}, Cmd.none, Audio.cmdNone)
    RSVPReceived result -> case result of
      Ok data -> (NotLoggedIn {m | fromrsvpsheet = Just data}, Cmd.none, Audio.cmdNone)
      _ -> todo
    PoirotReady p -> case p of
      -- Ok p2 -> (NotLoggedIn {m | poirot = Just (p2, now)}, Cmd.none, Audio.cmdNone) TODO: need to add time to model
      _ -> todo
    Login -> case findAccount m.password of
      Nothing -> todo -- wrong password
      Just name -> ( LoggedIn { name = name
                              , rsvp = Maybe.map (\x -> Maybe.withDefault Maybe (Dict.get name x)) m.fromrsvpsheet
                              , charstory = Nothing
                              , charStatus = NotSelected
                              , poirot = m.poirot
                              , hover = m.hover}
                   , Cmd.none
                   , Audio.cmdNone)
    HoverStart n -> (NotLoggedIn {m | hover = Just n}, Cmd.none, Audio.cmdNone)
    HoverEnd n   -> (NotLoggedIn {m | hover = case m.hover of
                                                Nothing -> Nothing
                                                Just n2 -> if n==n2 then Nothing else Just n2}, Cmd.none, Audio.cmdNone)
    _ -> todo
   LoggedIn m -> case msg of
    HoverStart n -> (LoggedIn {m | hover = Just n}, Cmd.none, Audio.cmdNone)
    HoverEnd n   -> (LoggedIn {m | hover = case m.hover of
                                                Nothing -> Nothing
                                                Just n2 -> if n==n2 then Nothing else Just n2}, Cmd.none, Audio.cmdNone)
    ChooseChar i -> let newstatus = case m.charStatus of
                                        NotSelected ->  if i == "" then NotSelected else Confirming i
                                        Confirming _ -> if i == "" then NotSelected else m.charStatus
      in (LoggedIn {m | charStatus = newstatus}, Cmd.none, Audio.cmdNone)
    RSVPReceived result -> case result of
      Ok data -> (LoggedIn {m | rsvp = Just (Maybe.withDefault Maybe (Dict.get m.name data))}, Cmd.none, Audio.cmdNone)
      _ -> todo
    _ -> todo


-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ = Sub.none
  -- Time.every 50 (\_ -> TODO)



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model = div []
  [ section
      [ id "personal", class "bar-section"]
      [ div [class "bar-bg", attribute "data-speed" "0.45", style "background-image" "url(\'images/gang.jpeg\')"] []
      , div [class "bar-overlay"] []
      , div [class "section-content"] 
        [ h2 [class "section-title"] [text "Persoonlijke informatie"]
        , viewFirstPage model]
      ]
  , section
      [ id "karakter", class "bar-section"]
      [ div [class "bar-bg", attribute "data-speed" "0.45", style "background-image" "url(\'images/vijver.jpeg\')"] []
      , div [class "bar-overlay"] []
      , div [class "section-content-wide", relwidth 80] [viewSecondPage model]
      ]
  ]

viewFirstPage : Model -> Html Msg
viewFirstPage model = div [class "about-cols"]
  [ div [class "about-col", class "helveticalarge"]
        [p [] [text """
          Je hebt een persoonlijk wachtwoord gekregen: hiermee kun je je karakter ontsleutelen. Je krijgt alle informatie die je nodig hebt om jezelf vrij te pleiten (of verdacht te maken).
          Voel je vrij om je zo veel of weinig in te leven in je karaker als je wilt en leuk vindt. Ga all out met een kostuum of kom alleen met de intentie om te winnen — alles is goed!
        """]]
  , div [class "about-col", class "helveticalarge"]
      (case model of
        NotLoggedIn m ->
          [ text "Vul hieronder je wachtwoord in:"
          , br [] []
          , input [placeholder "password", value m.password, onInput PassChange] []
          , button [onClick Login] [text "Log in"]
          ]
        LoggedIn m ->
          [ text ("Ingelogd als " ++ m.name)
          , br [] []
          , br [] []
          , text ("RSVP-status: " ++ Maybe.Extra.unwrap "{backend is nog niet geladen}" showrsvp m.rsvp ++ " ")
          , button [] [text "Ik kom!"]
          , text " "
          , button [] [text "Ik kom niet"]
          , br [] []
          , br [] []
          , case m.charstory of
              Nothing -> text "Je hebt nog geen karakter gekozen. Kies er een op de volgende pagina!"
              Just (name, story) -> text (String.join "" ["Je bent ", name, "! Houd de volgende informatie strikt geheim: ", story])
          ]
      )
  ]


viewSecondPage : Model -> Html Msg
viewSecondPage model = div [width 2000] 
  ((List.map
    (\id -> input [type_ "image", src ("images/chars/"++id++" main.png"), cqhheight 250
                  , onMouseEnter (HoverStart id), onMouseLeave (HoverEnd id) -- fix hover na inloggen
                  , onClick (ChooseChar id)] [])
    ["alexander", "bernard", "brouwer", "dr lodewijk", "eduard", "elisabeth", "geerlings", "gerrit", "gijsbert", "hendriks", "janne", "julian", "marta", "michael", "rosalie", "susanna", "ten have", "theodoor"]
  )
  ++
  -- (case gethover model |> Maybe.andThen id2namedis of
  --   Nothing -> [p [style "font-size" "xx-large"] [text "Kies een karakter"]]
  --   Just (name, dis) -> [p [style "font-size" "xx-large", style "font-family" "hattinand"] [text (name ++ ", " ++ dis)]])
  (case gethover model |> Maybe.andThen id2namedis of
    Nothing -> [p [style "font-size" "xx-large"] [text "Kies een karakter"], br [] [], div [style "font-size" "xx-large", style "font-family" "hattinand", style "color" "rgba(0,0,0,0)"] [text "I'm invisible!"]]
    Just (name, dis) -> [ p [style "font-size" "xx-large"] [text name]
                        , br [] []
                        , p [style "font-size" "xx-large", style "font-family" "hattinand"] [text dis]])
  ++
  ( case model of
      NotLoggedIn _ -> []
      LoggedIn m -> let name = case id2namedis (showselectedchar m.charStatus) of
                          Nothing -> ""
                          Just (nm, _) -> nm
        in
        [ Dialog.render
            { styles = [ ( "width", "40%" ), ("color", "black"), ("class","helveticalarge") ]
            , title = "Bevestig je keuze"
            , content = [ text (String.join " " ["Weet je zeker dat je", name, "wil kiezen?"]) ]
            , actionBar = [ dialogButton "Nee denk het niet" (ChooseChar "")
                          , text "   "
                          , dialogButton (String.join " " ["Kies", name]) BevestigChar]
            }
            (case m.charStatus of
              NotSelected -> Dialog.hidden
              Confirming _ -> Dialog.visible
            )
        ]
  ))


dialogButton : String -> Msg -> Html Msg
dialogButton caption msg =
    button
        [ onClick msg
        , class "mdl-button mdl-button--raised mdl-button--accent"
        ]
        [ text caption ]

-- AUDIO
audio : Audio.AudioData -> Model -> Audio.Audio
audio _ model =
  let maybeplay x = case x of
        Nothing -> Audio.silence
        Just (muziek,tijd) -> Audio.audio muziek tijd
  in case model of
    _ -> Audio.silence




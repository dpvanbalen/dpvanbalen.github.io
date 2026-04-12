port module Main exposing (..)

import Audio
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http exposing (Error(..))
import Json.Decode
import Json.Encode as Json
import Task
import Time

import Types exposing (..)
import Database exposing (..)
import Video exposing (..)
import Secrets exposing (..)
import Dict

import Dialog
import Maybe.Extra
import Maybe
import Utils exposing (..)
import String
import List
import List.Extra

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
  ( NotLoggedIn { password = "", fromrsvpsheet = Nothing, chars = Dict.empty, poirot = (Nothing, Nothing), hover = Nothing, oauth = oauthtoken, fromcharsheet = Nothing}
  , Cmd.batch [readRSVP oauthtoken, readChar oauthtoken]
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
    CharReceived result -> case result of
      Ok data -> (NotLoggedIn {m | fromcharsheet = Just data}, Cmd.none, Audio.cmdNone)
      _ -> todo
    PoirotReady p -> case p of
      Ok p2 -> (NotLoggedIn {m | poirot = (Just p2, Nothing)}, Task.perform PoirotGoing Time.now, Audio.cmdNone)
      _ -> todo
    Login -> case findAccount m.password of
      Nothing -> todo -- wrong password
      Just name -> ( LoggedIn { name = name
                              , rsvp   = m.fromrsvpsheet |> Maybe.andThen (\x -> Dict.get name x) |> Maybe.map Tuple.first 
                              , rsvpix = m.fromrsvpsheet |> Maybe.andThen (\x -> Dict.get name x) |> Maybe.map Tuple.second
                              , fromcharsheet = m.fromcharsheet
                              , charstory = m.fromcharsheet |> Maybe.andThen (\x -> getcharstory name x)
                              , charStatus = NotSelected
                              , poirot = m.poirot
                              , hover = m.hover
                              , oauth = m.oauth
                              }
                   , Cmd.none
                   , Audio.cmdNone)
    HoverStart n -> (NotLoggedIn {m | hover = Just n}, Cmd.none, Audio.cmdNone)
    HoverEnd n   -> (NotLoggedIn {m | hover = case m.hover of
                                                Nothing -> Nothing
                                                Just n2 -> if n==n2 then Nothing else Just n2}, Cmd.none, Audio.cmdNone)
    RSVPWritten _ -> (model, readRSVP m.oauth, Audio.cmdNone)
    CharWritten _ -> (model, readChar m.oauth, Audio.cmdNone)
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
    BevestigChar -> case m.charStatus of
      NotSelected -> todo
      Confirming char -> case m.fromcharsheet |> Maybe.andThen (\d -> Dict.get char d) of
          Just (Nothing, _, ix) -> (LoggedIn {m | charStatus = NotSelected}, schrijfchar m.name ix m.oauth, Audio.cmdNone)
          _ -> todo
    RSVPReceived result -> case result of
      Ok data -> (LoggedIn {m | rsvp   = Dict.get m.name data |> Maybe.map Tuple.first
                              , rsvpix = Dict.get m.name data |> Maybe.map Tuple.second
                            }, Cmd.none, Audio.cmdNone)
      _ -> todo
    CharReceived result -> case result of
      Ok data -> (LoggedIn {m | fromcharsheet = Just data
                              , charstory = getcharstory m.name data
                            }, Cmd.none, Audio.cmdNone)
      _ -> todo
    RSVPButton rsvp -> case m.rsvpix of
      Nothing -> todo
      Just idx -> (LoggedIn m, schrijfrsvp rsvp idx m.oauth, Audio.cmdNone)
    RSVPWritten _ -> (model, readRSVP m.oauth, Audio.cmdNone)
    CharWritten _ -> (model, readChar m.oauth, Audio.cmdNone)
    _ -> todo


-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ = Sub.none
  -- Time.every 50 (\_ -> TODO)



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model = div []
  [ 
    section
      [ id "personage", class "bar-section"]
      [ div [class "bar-bg", attribute "data-speed" "0.45", style "background-image" "url(\'images/vijver.jpeg\')"] []
      , div [class "bar-overlay"] []
      , div [class "section-content-wide", relwidth 80] [viewSecondPage model]
      ]
  , 
    section
      [ id "personal", class "bar-section"]
      [ div [class "bar-bg", attribute "data-speed" "0.45", style "background-image" "url(\'images/gang.jpeg\')"] []
      , div [class "bar-overlay"] []
      , div [class "section-content"] 
        [ h2 [class "section-title"] [text "Persoonlijke informatie"]
        , viewFirstPage model]
      ]
  ]

viewFirstPage : Model -> Html Msg
viewFirstPage model = div [class "about-cols"]
  [ div [class "about-col", class "helveticalarge"]
        [p [] [text """
          Je hebt een persoonlijk wachtwoord gekregen: hiermee kun je je personage kiezen. Je krijgt alle informatie die je nodig hebt om jezelf vrij te pleiten (of verdacht te maken).
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
          , button [onClick (RSVPButton Yes)] [text "Ik kom!"]
          , text " "
          , button [onClick (RSVPButton No)] [text "Ik kom niet"]
          , br [] []
          , br [] []
          , case m.charstory of
              Nothing -> text "Je hebt nog geen personage gekozen. Kies er een op de vorige pagina!"
              Just (id, _) -> case id2namedis id of
                Just (name, _) -> text (String.join "" ["Je bent ", name, "! Klik op je polaroid voor jouw geheime informatie. Zorg dat je dit tijdens het feestje paraat hebt!"])
                Nothing -> text "er gaat iets fout"
          ]
      )
  ]


viewSecondPage : Model -> Html Msg
viewSecondPage model = let youarealreadychar = case model of
                                                  NotLoggedIn _ -> Nothing
                                                  LoggedIn m -> Maybe.map Tuple.first m.charstory
                           charsheet = case model of
                                                  NotLoggedIn m -> m.fromcharsheet
                                                  LoggedIn m -> m.fromcharsheet
                           checked id = Maybe.withDefault "main" (Maybe.map (\id2 -> if id==id2 then "checked" else "main") youarealreadychar)
  in div [width 2000]
    ((List.map
      (\id -> input ([ type_ "image", src ("images/chars/"++id++" " ++ checked id ++".png"), cqhheight 250
            ,  onMouseEnter (HoverStart id), onMouseLeave (HoverEnd id)
            ] ++ case charsheet |> Maybe.andThen (\x -> Dict.get id x) |> Maybe.andThen (\(x,_,_) -> x) of
                  Nothing -> case model of
                    LoggedIn _ -> if Maybe.Extra.isJust youarealreadychar
                                    then [style "cursor" "default"]
                                    else [style "cursor" "pointer", onClick (ChooseChar id)]
                    NotLoggedIn _ -> [style "cursor" "default"]
                  Just _ -> if youarealreadychar == Just id
                              then [style "cursor" "pointer", onClick (ChooseChar id)]
                              else [style "cursor" "not-allowed", style "opacity" "50%"]
        ) []
      )
      ["theodoor", "marta", "susanna", "gijsbert", "rosalie", "michael", "gerrit", "alexander", "brouwer", "janne", "dr lodewijk", "elisabeth", "bernard", "eduard", "geerlings", "hendriks", "julian", "ten have"]
    )
    ++
    (case Maybe.andThen id2namedis (Maybe.Extra.orList [gethover model, youarealreadychar]) of
      Nothing -> [p [style "font-size" "xx-large"] [text "Kies een personage"], br [] [], div [style "font-size" "xx-large", style "font-family" "hattinand", style "color" "rgba(0,0,0,0)"] [text "I'm invisible!"]]
      Just (name, dis)   -> [ p [style "font-size" "xx-large"] [text name]
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
              , title = case m.charstory of
                  Nothing -> "Bevestig je keuze"
                  Just (char,_) -> name
              , content = [div [style "font-family" "Arial"] (breaktext (case m.charstory of
                  Nothing -> (String.join " " ["Weet je zeker dat je", name, "wil kiezen?"])
                  Just (char, story) -> Maybe.withDefault "" (getSecret char story)))]
              , actionBar = case m.charstory of
                Nothing ->  [ dialogButton "Nee denk het niet" (ChooseChar "")
                            , text "   "
                            , dialogButton (String.join " " ["Kies", name]) BevestigChar
                            ]
                Just _ -> [dialogButton "Ik houd dit voor me" (ChooseChar "")]
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
        (Just muziek, Just tijd) -> Audio.audio muziek tijd
        _ -> Audio.silence
  in case model of
    NotLoggedIn m -> maybeplay m.poirot
    LoggedIn m -> maybeplay m.poirot




breaktext : String -> List (Html msg)
breaktext = String.lines >> List.map text >> List.intersperse (br [] [])

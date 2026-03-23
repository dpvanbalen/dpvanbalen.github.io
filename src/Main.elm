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
import Utils exposing (relwidth)
import Utils exposing (relheight)
import Utils exposing (cqhheight)

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
  ( NotLoggedIn { password = "", fromrsvpsheet = Nothing, chars = Dict.empty, poirot = Nothing, charStatus = NotSelected }
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
    ChooseChar i -> let newstatus = case m.charStatus of
                                        NotSelected -> Confirming i
                                        Confirming _ -> NotSelected
                                        ZoomingOn j -> ZoomingOn j
      in (NotLoggedIn {m | charStatus = newstatus}, Cmd.none, Audio.cmdNone)
    Login -> case findAccount m.password of
      Nothing -> todo -- wrong password
      Just name -> ( LoggedIn { name = name
                              , rsvp = Maybe.map (\x -> Maybe.withDefault Maybe (Dict.get name x)) m.fromrsvpsheet
                              , charstory = Nothing
                              , poirot = m.poirot}
                   , Cmd.none
                   , Audio.cmdNone)
    _ -> todo
   LoggedIn m -> case msg of
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
      , div [class "section-content"] [viewFirstPage model]
      ]
  , section
      [ id "todo", class "bar-section"]
      [ div [class "bar-bg", attribute "data-speed" "0.45", style "background-image" "url(\'images/vijver.jpeg\')"] []
      , div [class "bar-overlay"] []
      , div [class "section-content-wide", relwidth 80] [viewSecondPage model]
      ]
  ]

viewFirstPage model =
  case model of
    NotLoggedIn m -> div [class "about-cols"] 
      [ 
        div [class "about-col"] 
        [ input [placeholder "password", value m.password, onInput PassChange] []
        , button [onClick Login] [text "Log in"]
        -- , p [] [text (Maybe.withDefault "" (m.fromsheet |> Maybe.andThen (\r -> Dict.get "test" r |> Maybe.map showrsvp)))]
        ]
      , div [class "about-col"] 
        [ button [onClick (ChooseChar 1)] [text "karakter 1"], br [] []
        , button [onClick (ChooseChar 2)] [text "karakter 2"], br [] []
        , button [onClick (ChooseChar 3)] [text "karakter 3"], br [] []
        ]
      , Dialog.render 
          { styles = [ ( "width", "40%" ) ]
            , title = "My Dialog"
            , content = [ text "This is my dialog's body." ]
            , actionBar = [ dialogButton "Close" ]
          }
          (case m.charStatus of
            NotSelected -> Dialog.hidden
            ZoomingOn _ -> Dialog.visible
            Confirming _ -> Dialog.visible
          )  
      ]
    LoggedIn m -> div [] [ text ("logged in as " ++ m.name)
                         , br [] []
                         , text ("RSVP status: " ++ Maybe.Extra.unwrap "{backend is nog niet geladen}" showrsvp m.rsvp)
                         ]

viewSecondPage model = div [width 2000] (List.map
  (\name -> input [type_ "image", src ("images/chars/"++name++" main.png"), cqhheight 250] [])
  ["alexander", "bernard", "brouwer", "dr lodewijk", "eduard", "elisabeth", "geerlings", "gerrit", "gijsbert", "hendriks", "janne", "marta", "michael", "rosalie", "susanna", "ten have", "theodoor"])


dialogButton : String -> Html Msg
dialogButton caption =
    button
        [ onClick (ChooseChar 0)
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




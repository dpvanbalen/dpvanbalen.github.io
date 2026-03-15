port module Main exposing (..)

import Audio
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import Json.Decode
import Json.Encode
import Maybe.Extra
import Process
import Task
import Time

import Types exposing (..)
import Database exposing (..)

-- PORTS

port videoEventStream : Json.Encode.Value -> Cmd msg
port audioPortToJS : Json.Encode.Value -> Cmd msg
port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg
port confetti : Json.Encode.Value -> Cmd msg



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
  ( ToDo
  , Cmd.batch [ pushVideoEvent Setup
              ] 
  , Audio.cmdNone
  )



-- UPDATE


update : Audio.AudioData -> Msg -> Model -> (Model, Cmd Msg, Audio.AudioCmd Msg)
update _ msg model =
  case model of
   ToDo -> (ToDo, Cmd.none, Audio.cmdNone)

-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ =
  Time.every 50 (\_ -> TODO)



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model =
  case model of
    ToDo -> div [] []


-- AUDIO
audio _ model = 
  let maybeplay x = case x of
        Nothing -> Audio.silence
        Just (muziek,tijd) -> Audio.audio muziek tijd
  in case model of
    _ -> Audio.silence





{-| These are all the kinds of messages that can be sent to the video player.
Add more cases if we want to tell the video player new things.
-}
type VideoEvent
    = Setup
    | Play
    | Pause
    | Stop
    | Restart
    | Mute
    | Unmute
    | VolumeDown
    | VolumeUp
    | SeekTo Float


{-| This is the function we should use to send messages to the video player. It
takes care of encoding and pushing through the port.
-}
pushVideoEvent : VideoEvent -> Cmd msg
pushVideoEvent event =
    event
        |> encodeVideoEvent
        |> videoEventStream


{-| Encodes a VideoEvent as a simple JSON value. As new events are added, also
add a case for the encoder. Elm will throw a compile-time error if you forget,
so don't worry about forgetting.
-}
encodeVideoEvent : VideoEvent -> Json.Encode.Value
encodeVideoEvent event =
    case event of
        Setup ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "setup" ) ]

        Play ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "play" ) ]

        Pause ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "pause" ) ]

        Stop ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "stop" ) ]

        Restart ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "restart" ) ]

        Mute ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "mute" ) ]

        Unmute ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "unmute" ) ]

        VolumeDown ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "volumedown" ) ]

        VolumeUp ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "volumeup" ) ]

        SeekTo position ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "seekto" )
                , ( "position", Json.Encode.float position )
                ]
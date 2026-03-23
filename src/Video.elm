port module Video exposing (..)


import Html exposing (..)
import Html.Attributes exposing (..)
import Http exposing (Error(..))
import Json.Encode

port videoEventStream : Json.Encode.Value -> Cmd msg

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
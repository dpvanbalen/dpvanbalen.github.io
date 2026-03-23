module Types exposing (..)
import Http
import Dict exposing (Dict)
import Audio
import Time


type Model 
  = LoggedIn 
    { name : String
    , rsvp : Maybe RSVP
    , charstory : Maybe (String, String)
    , poirot : Maybe (Audio.Source, Time.Posix)
    }
  | NotLoggedIn 
    { password : String
    , fromrsvpsheet : Maybe (Dict String RSVP)
    , chars : Dict String CharStatus
    , charStatus : CharViewStatus
    , poirot : Maybe (Audio.Source, Time.Posix)
    }

type CharViewStatus = NotSelected | Confirming Int | ZoomingOn Int
type CharStatus = Available | Unavailable | Chosen
type RSVP = Yes | No | Maybe

type Msg 
  = PassChange String
  | Login
  | RSVPReceived (Result Http.Error (Dict String RSVP))
  | RSVPWritten  (Result Http.Error ())
  | PoirotReady  (Result Audio.LoadError Audio.Source)
  | ChooseChar Int

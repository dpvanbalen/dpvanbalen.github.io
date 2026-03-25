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
    , hover : Maybe String
    , charStatus : CharViewStatus
    }
  | NotLoggedIn 
    { password : String
    , fromrsvpsheet : Maybe (Dict String RSVP)
    , chars : Dict String CharStatus
    , poirot : Maybe (Audio.Source, Time.Posix)
    , hover : Maybe String
    }

gethover : Model -> Maybe String
gethover model = case model of
  LoggedIn m -> m.hover
  NotLoggedIn m -> m.hover

type CharViewStatus = NotSelected | Confirming String
type CharStatus = Available | Unavailable | Chosen
type RSVP = Yes | No | Maybe

showselectedchar : CharViewStatus -> String
showselectedchar cvs = case cvs of
  NotSelected -> ""
  Confirming c -> c

type Msg 
  = PassChange String
  | Login
  | RSVPReceived (Result Http.Error (Dict String RSVP))
  | RSVPWritten  (Result Http.Error ())
  | PoirotReady  (Result Audio.LoadError Audio.Source)
  | ChooseChar String
  | BevestigChar
  | HoverStart String
  | HoverEnd String

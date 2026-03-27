module Types exposing (..)
import Http
import Dict exposing (Dict)
import Audio
import Time


type Model 
  = LoggedIn 
    { name : String
    , rsvp : Maybe RSVP
    , rsvpix : Maybe Int
    , charstory : Maybe (String, String)
    , poirot : (Maybe Audio.Source, Maybe Time.Posix)
    , hover : Maybe String
    , charStatus : CharViewStatus
    , oauth : String    
    , fromcharsheet : Maybe (Dict String (Maybe String, String,Int))
    }
  | NotLoggedIn 
    { password : String
    , fromrsvpsheet : Maybe (Dict String (RSVP, Int))
    , fromcharsheet : Maybe (Dict String (Maybe String, String,Int))
    , chars : Dict String CharStatus
    , poirot : (Maybe Audio.Source, Maybe Time.Posix)
    , hover : Maybe String
    , oauth : String
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
  | RSVPReceived (Result Http.Error (Dict String (RSVP,Int)))
  | CharReceived (Result Http.Error (Dict String (Maybe String, String,Int)))
  | RSVPWritten  (Result Http.Error ())
  | CharWritten  (Result Http.Error ())
  | PoirotReady  (Result Audio.LoadError Audio.Source)
  | PoirotGoing  Time.Posix
  | ChooseChar String
  | BevestigChar
  | HoverStart String
  | HoverEnd String
  | RSVPButton RSVP

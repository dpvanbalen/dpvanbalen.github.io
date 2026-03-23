module Database exposing (..)
import Http
import Json.Encode as Json
import Json.Decode as Nosj

import Types exposing (..)
import Dict exposing (Dict)
import Maybe.Extra exposing (isJust)

url : String -> String
url sheet = "https://sheets.googleapis.com/v4/spreadsheets/1_R5_jdrepOfS9xX9Yqq5i2I8q_isOJAgI7kmY7qacK0/values/" ++ sheet -- ++ "key=" ++ servicekey

-- secret!
key : String
key = "AIzaSyAFc9lOsvAcgusK7fsgdq6o6ZlVZGGScZQ"

servicekey : String
servicekey = "49b4a8ff748394332b7c8c7907703252259072a3"

readRSVP : String -> Cmd Msg
readRSVP oauth =
  Http.request
    { method = "GET"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url "RSVP!A1:B50"
    , body = Http.emptyBody
    , expect = Http.expectJson RSVPReceived parseRSVP
    , timeout = Nothing
    , tracker = Nothing
    }

parseRSVP : Nosj.Decoder (Dict String RSVP)
parseRSVP = -- TODO: maybe the list needs transposing
  Nosj.field "values" 
    (Nosj.map 
      (List.map (\x -> case x of
        (name :: rsvp :: _) -> (name, pRSVP rsvp)
        _ -> ("",Nothing))
      >> List.filterMap (\(n,r) -> r |> Maybe.andThen (\r2 -> if n=="" then Nothing else Just (n,r2)))
      >> Dict.fromList)
      (Nosj.list 
        (Nosj.list 
          Nosj.string)))


pRSVP : String -> Maybe RSVP
pRSVP str = case str of
  "YES" -> Just Yes
  "NO" -> Just No
  "MAYBE" -> Just Maybe
  _ -> Nothing

showrsvp : RSVP -> String
showrsvp r = case r of
  Yes -> "YES"
  No -> "NO"
  Maybe -> "MAYBE"


schrijfrsvp : RSVP -> Maybe Int -> String -> Cmd Msg
schrijfrsvp rsvp idx oauth = case idx of
  Nothing -> Cmd.none
  Just ix -> Http.request
    { method = "PUT"
    , headers = [Http.header "Authorization" ("Bearer "++oauth)]
    , url = url ("RSVP!B"++String.fromInt ix++"?valueInputOption=USER_ENTERED")
    , body = Http.jsonBody (schrijfrsvpjson rsvp ix)
    , expect = Http.expectWhatever RSVPWritten
    , timeout = Nothing
    , tracker = Nothing
    }

schrijfrsvpjson : RSVP -> Int -> Json.Value
schrijfrsvpjson rsvp ix = Json.object
  [ ("range", Json.string ("log!C" ++ String.fromInt ix))
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (Json.list Json.string) [[showrsvp rsvp]])
  ]

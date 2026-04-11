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

parseRSVP : Nosj.Decoder (Dict String (RSVP, Int))
parseRSVP =
  Nosj.field "values" 
    (Nosj.map 
      (List.indexedMap 
        (\i x -> case x of
          (name :: rsvp :: _) -> (name, Maybe.map (\y -> (y,i+1)) (pRSVP rsvp))
          [name] -> (name, Just (Maybe, i+1))
          [] -> ("",Nothing)
        ) 
      >> List.filterMap (\(n,r) -> r |> Maybe.andThen (\r2 -> if n=="" then Nothing else Just (n,r2)))
      >> Dict.fromList
      )
      (Nosj.list 
        (Nosj.list 
          Nosj.string)
      )
    )

pRSVP : String -> Maybe RSVP
pRSVP str = case str of
  "Ja" -> Just Yes
  "Nee" -> Just No
  "Misschien" -> Just Maybe
  "" -> Just Maybe
  _ -> Nothing

showrsvp : RSVP -> String
showrsvp r = case r of
  Yes -> "Ja"
  No -> "Nee"
  Maybe -> "Misschien"


schrijfrsvp : RSVP -> Int -> String -> Cmd Msg
schrijfrsvp rsvp ix oauth = Http.request
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
  [ ("range", Json.string ("RSVP!B" ++ String.fromInt ix))
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (Json.list Json.string) [[showrsvp rsvp]])
  ]

readChar : String -> Cmd Msg
readChar oauth =
  Http.request
    { method = "GET"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url "chars!A2:C50"
    , body = Http.emptyBody
    , expect = Http.expectJson CharReceived parseChar
    , timeout = Nothing
    , tracker = Nothing
    }

--                             char    person        descr   ix
parseChar : Nosj.Decoder (Dict String (Maybe String, String, Int))
parseChar = 
  Nosj.field "values" 
    (Nosj.map 
      (List.indexedMap 
        (\i x -> case x of
          (name :: char :: secret :: _) -> Just (char, (if name=="" then Nothing else Just name, secret, i+2))
          _ -> Nothing
        ) 
      >> List.filterMap (\x -> x)
      >> Dict.fromList
      )
      (Nosj.list 
        (Nosj.list 
          Nosj.string)
      )
    )


schrijfchar : String -> Int -> String -> Cmd Msg
schrijfchar name ix oauth = Http.request
    { method = "PUT"
    , headers = [Http.header "Authorization" ("Bearer "++oauth)]
    , url = url ("chars!A"++String.fromInt ix++"?valueInputOption=USER_ENTERED")
    , body = Http.jsonBody (schrijfcharjson name ix)
    , expect = Http.expectWhatever CharWritten
    , timeout = Nothing
    , tracker = Nothing
    }

schrijfcharjson : String -> Int -> Json.Value
schrijfcharjson name ix = Json.object
  [ ("range", Json.string ("chars!A" ++ String.fromInt ix))
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (Json.list Json.string) [[name]])
  ]


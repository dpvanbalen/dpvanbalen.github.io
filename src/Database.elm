module Database exposing (..)
import Http
import Json.Encode as Json
import Json.Decode as Nosj
import Dict

import List.Extra
import Maybe.Extra
import Time
import Iso8601

import Types exposing (..)

url : String -> String
url sheet = "https://sheets.googleapis.com/v4/spreadsheets/1_R5_jdrepOfS9xX9Yqq5i2I8q_isOJAgI7kmY7qacK0/values/" ++ sheet -- ++ "key=" ++ servicekey

-- secret!
key : String
key = "AIzaSyAFc9lOsvAcgusK7fsgdq6o6ZlVZGGScZQ"

servicekey : String
servicekey = "49b4a8ff748394332b7c8c7907703252259072a3"


adduser : String -> String -> Cmd Msg
adduser name oauth =
  Http.request
    { method = "POST"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url ("usernames!A1:append?valueInputOption=RAW")
    , body = Http.jsonBody (adduserjson name)
    , expect = Http.expectWhatever DidDatabaseStuff
    , timeout = Nothing
    , tracker = Nothing
    }

adduserjson : String -> Json.Value
adduserjson name = Json.object
  [ ("range", Json.string "usernames!A1")
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (\x -> Json.list Json.string [x]) [name])
  ]



module Secrets exposing (..)

import Crypto.Strings exposing (decrypt, encrypt)
import Crypto.Strings.Types exposing (Passphrase, Plaintext, Ciphertext)
import Random exposing (Seed, initialSeed)

import Types exposing (..)
import Dict exposing (..)
import String exposing (startsWith)

accounts : List String
accounts = 
  [ "eCeM75xMenG/KHjgfv/MQJGRmqapJVvLfbmRLV8p3G8=" -- David

  ] -- TODO: encoded names starting with "name: "

findAccount : String -> Maybe String
findAccount password = case List.filter (doDecrypt password >> startsWith "name: ") accounts of
  [x] -> Just (String.dropLeft 6 (doDecrypt password x))
  [] -> Nothing
  _ -> Just "ERROR" -- once in a lifetime hash collision or a whoopsie


secrets : Dict String String
secrets = Dict.insert "elisabeth" "HQBosn/iSrB/uIdVIFjjZqF1IhWFCSiqeKIb40FBZGPlarGBKqJACxOCdCVu\nOg0f" Dict.empty

getSecret : String -> String -> Maybe String
getSecret key password = Maybe.map (doDecrypt password) (Dict.get key secrets)

doDecrypt : String -> String -> String
doDecrypt password cypher = case decrypt password cypher of
    Ok secret -> secret
    Err _ -> ""

doEncrypt : Int -> Passphrase -> Plaintext -> Result String ( Ciphertext, Seed )
doEncrypt time passphrase plaintext =
    encrypt (initialSeed time) passphrase plaintext

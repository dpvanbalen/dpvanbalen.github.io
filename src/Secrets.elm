module Secrets exposing (..)

import Crypto.Strings exposing (decrypt, encrypt)
import Crypto.Strings.Types exposing (Passphrase, Plaintext, Ciphertext)
import Random exposing (Seed, initialSeed)

import Types exposing (..)
import Dict exposing (..)
import String exposing (startsWith)

accounts : List String
accounts =  -- encoded "name: <name>" with private passwords
  [ "eCeM75xMenG/KHjgfv/MQJGRmqapJVvLfbmRLV8p3G8=" -- David
  , "LUYEOHmRZ4iocP3J67VJ5IpKBJgIFbDak/K/qewCZh8=" -- Maartje

  , "LUYEOHmRZ4iocP3J67VJ5Mp+ofOHWGzd7MeBZhKRBpI=" -- Madelon
  , "LUYEOHmRZ4iocP3J67VJ5JFHDeUMApZPkeE1XcO2aA0=" -- Tijmen
  , "LUYEOHmRZ4iocP3J67VJ5OMgmjfG5l65M4JYwseblN4=" -- Ivo Gabe
  , "LUYEOHmRZ4iocP3J67VJ5P9QUDv9l/F5Geic7d228rg=" -- Jacco
  , "LUYEOHmRZ4iocP3J67VJ5JGkYbLrIxUZCkHhMVbp7aM=" -- Lisanne
  , "LUYEOHmRZ4iocP3J67VJ5LU6CjcAgv84s4xhIUTjDfg=" -- Loes
  , "LUYEOHmRZ4iocP3J67VJ5B48bTy4OInPBPLfPDWDdMk=" -- Nynke
  , "LUYEOHmRZ4iocP3J67VJ5NHj4a5J1HMtRhTGlnASBVs=" -- Matthijs
  , "LUYEOHmRZ4iocP3J67VJ5M6xyJ/c2BrCHCcNB6ng7Us=" -- Daan
  , "LUYEOHmRZ4iocP3J67VJ5KN/a8w07fa37MwcXjRS9uM=" -- Isabel
  , "LUYEOHmRZ4iocP3J67VJ5OoDjKt0DIcRqJb0o16q12I=" -- Renske
  , "LUYEOHmRZ4iocP3J67VJ5KH0MDFP9mNiCqYFzH84+1M=" -- Maud
  , "LUYEOHmRZ4iocP3J67VJ5I4abDYRpl17Z91ios+hPck=" -- Emmie
  , "LUYEOHmRZ4iocP3J67VJ5Gxev5W/tPnVzUYsq+UF1Gk=" -- Rosa Lilly
  , "LUYEOHmRZ4iocP3J67VJ5Cm15kYPyCZypflC+5DoTQE=" -- Lieve
  , "LUYEOHmRZ4iocP3J67VJ5LBUwdXniqD96rnmy7BVb5A=" -- Keneshka
  , "LUYEOHmRZ4iocP3J67VJ5MjLVH9M0hqjjDm1UdxqlTw=" -- Thijs
  , "LUYEOHmRZ4iocP3J67VJ5IyPe69gU04IZleqah9R2Dc=" -- Juliette
  ]

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

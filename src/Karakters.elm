module Karakters exposing (..)

allekarakters : List (String, String, String)
allekarakters =
  [ ("mr. Justus ten Have"               , "ten have"     , "De discrete advocaat")
  , ("Theodoor (Theo) van Aerden"        , "theodoor"     , "De afgunstige broer")
  , ("Marta van Aerden"                  , "marta"        , "De toegewijde echtgenote")
  , ("Susanna van Beek"                  , "susanna"      , "De kordate onderneemster")
  , ("Gijsbert van Beek"                 , "gijsbert"     , "De wankele apotheker")
  , ("Gerrit van Kessel"                 , "gerrit"       , "De kwistige advocaat")
  , ("Rosalie Smeets"                    , "rosalie"      , "De ongrijpbare actrice")
  , ("Michiel Smeets"                    , "michael"      , "De rokkenjagende acteur")
  , ("Margareta (Margje) Geerlings"      , "geerlings"    , "De bescheiden gouvernante")
  , ("Willem Brouwer"                    , "brouwer"      , "De plichtsgetrouwe butler")
  , ("Janne de Vries"                    , "janne"        , "De oplettende keukenmeid")
  , ("Alexander Goedhart"                , "alexander"    , "De begerige verzamelaar")
  , ("dr. Lodewijk van Lier"             , "dr lodewijk"  , "De achteloze dokter")
  , ("Zuster Elisabeth Koster"           , "elisabeth"    , "De ijverige zuster")
  , ("Bernard van Houten"                , "bernard"      , "De malafide compagnon")
  , ("Eduard (Eddie) van Loon"           , "eduard"       , "De vasthoudende journalist")
  , ("Pastoor Johannes (Jan) Hendriks"   , "hendriks"     , "De beschonken priester")
  , ("Julian van Mersbergen"             , "julian"       , "De baatzuchtige protegé")
  ]

id2namedis : String -> Maybe (String, String)
id2namedis id = case List.filter (\(_,id2,_) -> id == id2) allekarakters of
  [(name, _, dis)] -> Just (name,dis)
  _ -> Nothing

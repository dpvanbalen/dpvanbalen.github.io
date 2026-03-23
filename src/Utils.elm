module Utils exposing (..)
import Html exposing (Attribute)
import Html.Attributes exposing (attribute)


relwidth : Int -> Attribute msg
relwidth i = attribute "width" (String.fromInt i ++ "%")

relheight : Int -> Attribute msg
relheight i = attribute "height" (String.fromInt i ++ "%")

cqhwidth : Int -> Attribute msg
cqhwidth i = attribute "width" (String.fromInt i ++ "cqh")

cqhheight : Int -> Attribute msg
cqhheight i = attribute "height" (String.fromInt i ++ "cqh")

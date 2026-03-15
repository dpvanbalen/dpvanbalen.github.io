module Types exposing (..)
import Http


type Model = ToDo

type Msg = TODO
         | DidDatabaseStuff (Result Http.Error ())

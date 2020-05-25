import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import Database from "./reducers/DatabaseReducer";
import AnimatedCharacter from "./reducers/AnimatedCharacterReducer";
import Hiragana from "./reducers/HiraganaReducer";
import Katakana from "./reducers/KatakanaReducer";
import Kanji from "./reducers/KanjiReducer";
import KanaInfo from "./reducers/KanaInfoReducer";
import KanjiInfo from "./reducers/KanjiInfoReducer";
import ReadingTest from "./reducers/ReadingTestReducer";
import Search from "./reducers/SearchReducer";
import CustomSets from "./reducers/CustomSetsReducer";
import Button from "./reducers/ButtonReducer";

export default createStore(
    combineReducers({
        Database,
        AnimatedCharacter,
        Hiragana,
        Katakana,
        Kanji,
        KanaInfo,
        KanjiInfo,
        ReadingTest,
        Search,
        CustomSets,
        Button
    }),
    {},
    applyMiddleware(thunk)
);
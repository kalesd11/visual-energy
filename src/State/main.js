import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    energyData : dataReducer
})

export default rootReducer
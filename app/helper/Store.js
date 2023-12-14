import { createStore, applyMiddleware,combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import Reducer from './Reducer'




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

const rootReducer = combineReducers({Reducer})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

export const addItem = (itemName, plannedCost, actualCost) =>{
    return async (dispatch) => {
      dispatch({ type: "ADD_ITEM", payload:{  itemName, plannedCost, actualCost } })
    }
}


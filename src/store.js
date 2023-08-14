import { configureStore } from '@reduxjs/toolkit'
import hpReducer from './reducers/hpSlice';
import mpReducer from './reducers/mpSlice';
import agilityReducer from './reducers/agilitySlice';
import strengthReducer from './reducers/strengthSlice';
import wisdomReducer from './reducers/wisdomSlice';
import atkReducer from './reducers/atkSlice';
import defReducer from './reducers/defSlice';
import powReducer from './reducers/powSlice';
import resReducer from './reducers/resSlice';
import spdReducer from './reducers/spdSlice';
import lukReducer from './reducers/lukSlice';
import skillReducer from './reducers/skillSlice';

export default configureStore({
    reducer: {
        hp: hpReducer,
        mp: mpReducer,
        agi: agilityReducer,
        str: strengthReducer,
        wis: wisdomReducer,
        atk: atkReducer,
        def: defReducer,
        pow: powReducer,
        res: resReducer,
        spd: spdReducer,
        luk: lukReducer,
        skill: skillReducer,
    },
}
);
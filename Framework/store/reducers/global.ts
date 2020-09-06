import { HYDRATE } from 'next-redux-wrapper';
import { IGlobalReducer } from '../../interfaces/IGlobalReducer';
import { globalType } from '../actionCreators';

export const INITIAL_STATE: IGlobalReducer = {
    sidebar: true,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state, // use previous state
                ...action.payload.global, // apply delta from hydration
            };
        }
        case globalType.GLOBAL_SIDEBAR_TOGGLE: {
            return {
                ...state,
                sidebar: !state.sidebar,
            };
        }
        default: {
            return state;
        }
    }
}

import { HYDRATE } from 'next-redux-wrapper';
import { IProjectReducer } from '../../interfaces/IProjectReducer';
import { projectType } from "../actionCreators";

export const INITIAL_STATE: IProjectReducer = {
    projects: [],
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state, // use previous state
                ...action.payload.project, // apply delta from hydration
            };
        }
        case projectType.ADD_PROJECT: {
            return {
                ...state,
                projects: action.data,
            }
        }
        default: {
            return state;
        }
    }
}

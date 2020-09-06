import { authFailure } from "../actions/auth";
import { getApi } from "@settings";
import { addProjects } from "../actions/project";
import { randomInteger } from "../../libs/random";

export const getProjects = () => async (dispatch) => {
    dispatch(addProjects([...new Array(randomInteger(1, 10))].map((_, index) => ({
        id: index,
        name: `Name ${index}`,
        tables: [...new Array(randomInteger(0, 200))].map((__, index2) => ({
            id: index2,
            name: `Table ${index2}`,
        })),
    }))));
    return;
    try {
        const res = await fetch(getApi('user/login'));
        await res.json();
    } catch (err) {
        dispatch(authFailure('Error to change language: ', err));
    }
};
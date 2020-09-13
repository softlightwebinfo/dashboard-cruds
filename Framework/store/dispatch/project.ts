import { authFailure } from "../actions/auth";
import { getApi } from "@settings";
import { TProjectPost } from "@props/TprojectPost";
import { addProjects } from "../actions/project";
import { randomInteger } from "../../libs/random";

export const getProjects = (cookie) => async (dispatch) => {
    try {
        const res = await fetch(getApi('projects'), {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                cookie: cookie,
            },
        });
        // @ts-ignore
        const response = await res.json();
        dispatch(addProjects([...new Array(randomInteger(0, 10))].map((_, index) => ({
            id: index,
            name: `Name ${index}`,
            tables: [...new Array(randomInteger(0, 200))].map((__, index2) => ({
                id: index2,
                name: `Table ${index2}`,
            })),
        }))));
    } catch (err) {
        dispatch(authFailure('Error to change language: ', err));
    }
};

export const submitProject = (data: TProjectPost, callback: any) => async dispatch => {
    try {
        const res = await fetch(getApi('project'), {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        await res.json();
        callback(true);
    } catch (err) {
        dispatch(authFailure('Error to change language: ', err));
        callback(false);
    }
}
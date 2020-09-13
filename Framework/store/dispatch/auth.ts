// @ts-ignore
import { takeLatest, put } from 'redux-saga/effects';

// @ts-ignore
import { authFailure, authInitialRq, authLogout as logout, authRequest, authSuccess } from '../actions/auth';
import { getApi } from 'settings';
import { setCookie } from '../../libs/cookie';
import { TOKEN_EXP } from "@config/constants";

// @ts-ignore
export const auth = (email: string, password: string) => async (dispatch) => {
  try {
    dispatch(authRequest());
    const res = await fetch(getApi("login"), {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const response = await res.json();
    if (!response.success) {
      dispatch(authFailure(response.error));
    } else {
      setCookie('token', response.token, TOKEN_EXP);
      dispatch(authSuccess(response.user));
    }
  } catch (err) {
    dispatch(authFailure('Error to change language: ', err));
  }
};

export const authRegister = (data) => async (dispatch) => {
  try {
    const res = await fetch(getApi('user/register'), {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const response = await res.json();
    if (response.token) {
      dispatch(authSuccess(response));
    }
    dispatch(authSuccess(response));
  } catch (err) {
    dispatch(authFailure(err));
  }
};

export const authInitial = (cookie) => async (dispatch) => {
  // dispatch(authSuccess({}));
  // return;
  try {
    dispatch(authInitialRq());
    const res = await fetch(getApi('initial'), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        cookie: cookie,
      },
      method: 'GET',
    });
    const response = await res.json();
    if (!response.success) {
      dispatch(authFailure(response.error));
    } else {
      dispatch(authSuccess(response));
    }
  } catch (err) {
    console.log(err);
    dispatch(authFailure(err));
  }
};

export const authLogout = () => (dispatch) => {
  //const cookies = parseCookies();
  setCookie('token', '', 0); // this will delete the cookie.
  setCookie('username', '', 0); // this will delete the cookie.
  setCookie('user', '', 0); // this will delete the cookie.
  // destroyCookie(null, 'user');
  // destroyCookie(null, 'token');
  dispatch(logout());
};

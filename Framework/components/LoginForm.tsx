import React from 'react';
import { images } from '@config/images';

export const LoginForm = () => (
  <div className="auth-box">
    <div>
      <img src={images.logo} height="40px" className="mb-3" alt="Lucid" />
    </div>
    <div className="card text-center">
      <div className="body">
        <form method="POST" className="form-auth-small" action="">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-user" />
              </span>
            </div>
            <input
              id="defaultLoginFormEmail"
              type="text"
              name="username"
              className="form-control"
              placeholder="Email"
              required={true}
              autoFocus={true}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              id="defaultLoginFormPassword"
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              required={true}
            />
          </div>
          <input type="hidden" name="_csrf_token" value="z8wFnnopkE156KRCtX-N4nJPi1UVEIfndXUiB9AVCig" />
          <button type="submit" className="btn login-button btn-lg btn-block">
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  </div>
);

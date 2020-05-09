import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { reader, login } from '../../api/auth';

import './styles.css';

function LoginCard({ history }) {
  const [cookies, setCookie] = useCookies(['token']);
  const { token } = cookies;

  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const authFn = isLogin ? login : reader;
      const res = await authFn(formState);
      setCookie('token', res.token);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    if (token) {
      history.pushState('/protected');
    }
  }, [token, history]);

  return (
    <div className="logForm">
      <div className="logForm__images">
        <img
          className="logForm__images__img"
          src="../assets/eguzki.jpeg"
          alt="eguzkilore"
        />
      </div>
      <h2 className="logForm__welcome">
        ¿Crees en los Usuarios?
      </h2>
      <form className="logForm__form" onSubmit={handleSubmit}>
        <label className="logForm__form__label">
          <input
            placeholder="celia.bhb@gmail.com"
            type="email"
            name="email"
            value={formState.email}
            onChange={e => {
              const { value } = e.target;
              setFormState({ ...formState, email: value });
            }}
          />
        </label>
        <label className="logForm__form__label">
          <input
            placeholder="*******"
            type="password"
            name="password"
            value={formState.password}
            onChange={e => {
              const { value } = e.target;
              setFormState({ ...formState, password: value });
            }}
          />
        </label>
        <div className="logForm__form__buttonContainer">
          <button
            className="logForm__form__button"
            disabled={!formState.email || !formState.password}
            type="submit"
          >
            {isLogin ? 'Soy un Lector' : 'Iniciar Sesión'}
          </button>

          <button
            className="logForm__form__button--switch"
            type="button"
            onClick={()=> history.push('/home')} 
          >
            {isLogin ? 'Iniciar Sesión' : 'Soy un Lector'}
          </button>
        </div>
        {error ? (
          <p style={{ color: 'green', fontWeight: 'bold' }}>{"No crees en los usuarios, sigue como Lector"}</p>
        ) : null}
      </form>
    </div>
  );
}

export default LoginCard;


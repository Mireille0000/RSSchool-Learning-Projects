import {
  UserAuthenticationRequest,
  ws,
  AuthenticatedUsers,
  UnauthorizedUsers,
} from '../../server-chat/requests-interfaces.ts';
import MainPage from '../main-page/main-page.ts';

export default function validateAuthorization() {
  const nameRegExp = /[a-z]{4,}/i; // 4 symboles and more
  const passwordRegEx = /[a-z0-9]{5,}/i; // 5 symboles, includes numbers and letters
  const hintMessages = [
    'enter at least 4 letters',
    'enter at least 5 characters with at least one number',
  ];

  const [hintOne, hintTwo] = hintMessages;
  const name: HTMLInputElement = document.querySelector('.name');
  const password: HTMLInputElement = document.querySelector('.password');
  const submit = document.querySelector('.submit-button');
  const body = document.querySelector('body');
  const nameHint = document.querySelector('.name-hint');
  const passwordHint = document.querySelector('.password-hint');

  submit.addEventListener('click', () => {
    if (nameRegExp.test(name.value) && passwordRegEx.test(password.value)) {
      const userData = {
        name: `${name.value}`,
        password: `${password.value}`,
      };
      localStorage.setItem('data', JSON.stringify(userData));
      const data: UserAuthenticationRequest = {
        id: '',
        type: 'USER_LOGIN',
        payload: {
          user: {
            login: name.value,
            password: password.value,
          },
        },
      };

      const dataUsers: AuthenticatedUsers = {
        id: '',
        type: 'USER_ACTIVE',
        payload: null,
      };

      const incativeUsers: UnauthorizedUsers = {
        id: '',
        type: 'USER_INACTIVE',
        payload: null,
      };

      ws.send(JSON.stringify(data));
      ws.send(JSON.stringify(dataUsers));
      ws.send(JSON.stringify(incativeUsers));

      document.body.innerHTML = '';
      nameHint.innerHTML = ''; //
      passwordHint.innerHTML = ''; //
      new MainPage('main-page').renderPage();
    }
    if (!passwordRegEx.test(password.value)) {
      passwordHint.innerHTML = hintTwo;
    }
    if (!nameRegExp.test(name.value)) {
      nameHint.innerHTML = hintOne;
    }
  });

  name.addEventListener('keypress', (e) => {
    if (e.key === 'Backspace' || !nameRegExp.test(name.value)) {
      nameHint.innerHTML = hintOne;
    }
    setTimeout(() => {
      nameHint.innerHTML = '';
    }, 2000);
  });

  password.addEventListener('keypress', (e) => {
    if (e.key === 'Backspace' || !passwordRegEx.test(password.value)) {
      passwordHint.innerHTML = hintTwo;
    }
    setTimeout(() => {
      passwordHint.innerHTML = '';
    }, 2000);
  });

  body.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter' && nameRegExp.test(name.value) && passwordRegEx.test(password.value)) {
      const userData = {
        name: `${name.value}`,
        password: `${password.value}`,
      };
      localStorage.setItem('data', JSON.stringify(userData));
      const data: UserAuthenticationRequest = {
        id: '',
        type: 'USER_LOGIN',
        payload: {
          user: {
            login: name.value,
            password: password.value,
          },
        },
      };
      const dataUsers: AuthenticatedUsers = {
        id: '',
        type: 'USER_ACTIVE',
        payload: null,
      };

      const incativeUsers: UnauthorizedUsers = {
        id: '',
        type: 'USER_INACTIVE',
        payload: null,
      };

      ws.send(JSON.stringify(dataUsers));
      ws.send(JSON.stringify(data));
      ws.send(JSON.stringify(incativeUsers));
      document.body.innerHTML = '';
      new MainPage('main-page').renderPage();
    }

    if (e.key === 'Enter' && !passwordRegEx.test(password.value)) {
      passwordHint.innerHTML = hintTwo;
    }

    if (e.key === 'Enter' && !nameRegExp.test(name.value)) {
      nameHint.innerHTML = hintOne;
    }
  });

  //   if user is already authorized and the password is not correct you cannot enter!!!
}

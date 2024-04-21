import { UserAuthenticationRequest } from '../../server-chat/requests-interfaces.ts';
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
  const ws = new WebSocket('ws://127.0.0.1:4000');

  submit.addEventListener('click', () => {
    if (nameRegExp.test(name.value) && passwordRegEx.test(password.value)) {
      localStorage.setItem('name', `${name.value}`);
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
      ws.send(JSON.stringify(data));
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
    if (
      e.key === 'Enter' &&
      nameRegExp.test(name.value) &&
      passwordRegEx.test(password.value)
    ) {
      localStorage.setItem('name', `${name.value}`);
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
      ws.send(JSON.stringify(data));
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
}

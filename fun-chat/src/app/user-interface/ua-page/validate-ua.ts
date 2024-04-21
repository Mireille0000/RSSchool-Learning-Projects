// import AuthenticationPage from './ua-page.ts';
import { UserAuthenticationRequest } from '../../server-chat/requests-interfaces.ts';
import MainPage from '../main-page/main-page.ts';

export default function validateAuthorization() {
  const nameRegExp = /[a-z]{4,}/i; // 4 symboles and more
  const passwordRegEx = /[a-z][a-z0-9]{5,}/i; // 5 symboles, include numbers and letters
  //   const hintMessages = [
  //     'enter at least 4 characters',
  //     'enter at least one number',
  //     'enter at least 5 characters',
  //   ];

  //   const authPage = new AuthenticationPage('ua-page');
  const name: HTMLInputElement = document.querySelector('.name');
  const password: HTMLInputElement = document.querySelector('.password');
  const submit = document.querySelector('.submit-button');
  const ws = new WebSocket('ws://127.0.0.1:4000');
  submit.addEventListener('click', () => {
    if (nameRegExp.test(name.value) && passwordRegEx.test(password.value)) {
      localStorage.setItem('name', `${name.value}`);
      console.log('fine');
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
      console.log(data);
      ws.send(JSON.stringify(data));
      console.log(JSON.stringify(data));
      document.body.innerHTML = '';
      new MainPage('main-page').renderPage();
    } else {
      console.log('nope');
    }
  });
  const body = document.querySelector('body');

  body.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('true');
    } else {
      console.log('false');
    }
  });
}

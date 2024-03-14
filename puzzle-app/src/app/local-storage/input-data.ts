export default function saveInputInLocalStorage(name: HTMLInputElement, surname: HTMLInputElement) {
  const inputInfo = {
    name: name.value,
    surname: surname.value,
  };
  const userInfo = JSON.stringify(inputInfo);
  localStorage.setItem('userInfo', userInfo);
}

export function checkLocalStorage() {
  const isEmpty = localStorage.getItem('userInfo') as string;
  if (isEmpty) {
    console.log('Connected');
  } else {
    console.log('Disconnected');
  }
}

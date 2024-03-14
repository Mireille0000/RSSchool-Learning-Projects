export default function saveInputInLocalStorage(name: HTMLInputElement, surname: HTMLInputElement) {
  const inputInfo = {
    name: name.value,
    surname: surname.value,
  };
  const userInfo = JSON.stringify(inputInfo);
  localStorage.setItem('userInfo', userInfo);
}

export default function saveInputInLocalStorage(name: HTMLInputElement, surname: HTMLInputElement) {
  const inputInfo = {
    name: name.value,
    surname: surname.value,
  };
  const userInfo = JSON.stringify(inputInfo);
  localStorage.setItem('userInfo', userInfo);
}

export function fetchFromLocalStorage(data: string) {
  // 'userInfo'
  const greetingUser = JSON.parse(localStorage.getItem(data) as string);
  const greetingMessage: string = `Greetings, ${greetingUser.name} ${greetingUser.surname}!
Welcome to Puzzle App that will help you learn English! Click 'start' to continue`;
  return greetingMessage;
}

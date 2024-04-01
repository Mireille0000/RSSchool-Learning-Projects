export function convertToHex(component: number) {
  const hex = component.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export function convertRgbToHex(color: string) {
  const componentsArr = color.split("(")[1].split(")")[0].split(",");
  const parsecomponentsArr = componentsArr.map((item) => JSON.parse(item));
  return `#${convertToHex(parsecomponentsArr[0])}${convertToHex(parsecomponentsArr[1])}${convertToHex(parsecomponentsArr[2])}`;
}

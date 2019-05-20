import { Responsible, iTarget } from "../types/Types";

export function findUser(data: Responsible[], id: number) {
  return data.find((r: Responsible) => r.id === id)
}

export function onlyNumber(name: string, newValue: iTarget, callback: (name: string, value: iTarget) => void) {
  var string = newValue.target.value;
  string = string.replace(/-/g, "");
  const lastChar = string.charCodeAt(string.length - 1);

  if (lastChar < 48 || lastChar > 57) {
    string = string.substring(0, string.length - 1)
  }

  callback(name, { target: { value: string } })
}
export function getLocalStorage(key: string) {
  const storedState = localStorage.getItem(key);
  if (storedState === null) {
    return undefined;
  } else if (typeof storedState === "string") {
    return storedState;
  }
  return JSON.parse(storedState);
}

// STORAGE
// --

export const storage = {
  save: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  load: (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.error(`[ERROR] ${e}`);
      return null;
    }
  },
};

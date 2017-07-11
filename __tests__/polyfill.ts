const createStorageMock = () => {
  let store: {
    [key: string]: string | undefined;
  } = {};
  return {
    clear: () => {
      store = {};
    },
    getItem: (key: string) => {
      return store[key] || null;
    },
    removeItem: (key: string) => {
      store[key] = undefined;
    },
    setItem: (key: string, value: any) => {
      store[key] = value.toString();
    },
  };
};

Object.defineProperty(window, "localStorage", {
  value: createStorageMock(),
});

Object.defineProperty(window, "sessionStorage", {
  value: createStorageMock(),
});

import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type ReturnTypes<T = string> = [T, (evt: React.UIEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = string>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;

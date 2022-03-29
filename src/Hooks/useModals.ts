import { useState } from 'react';

export const useModals = <T>(modalNames: string[]) => {
  const getInitialOption = (keys: typeof modalNames) => {
    let modalOptions = {} as T;
    keys.forEach(modal => {
      modalOptions = { ...modalOptions, [modal]: false };
    });
    return modalOptions;
  };

  const [modal, setModal] = useState<T>(getInitialOption(modalNames));

  const toggleModal = (key: keyof T, active?: boolean) => () => {
    setModal(prev => ({ ...prev, [key]: active ?? !prev[key] }));
  };

  return { modal, toggleModal };
};

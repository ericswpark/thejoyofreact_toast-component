import React from "react";

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  const addToast = React.useCallback(({ message, variant }) => {
    const newToasts = [...toasts, {
      "id": crypto.randomUUID(),
      "message": message,
      "variant": variant,
    }];

    setToasts(newToasts);;
  }, [toasts]);

  const removeToast = React.useCallback(({ id }) => {
    const newToasts = toasts.filter((item) => {
      return item.id !== id
    })

    setToasts(newToasts);
  }, [toasts]);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}



export default ToastProvider;

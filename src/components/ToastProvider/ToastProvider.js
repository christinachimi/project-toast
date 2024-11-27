import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleClose = (id) => {
    setToasts(function (prevState) {
      return prevState.filter((toast) => toast.id !== id);
    });
  };

  const addToast = (message, variant) => {
    const id = crypto.randomUUID();
    const allToasts = [
      ...toasts,
      {
        id,
        variant,
        message,
        onClose: () => handleClose(id),
      },
    ];
    setToasts(allToasts);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

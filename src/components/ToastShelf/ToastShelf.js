import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [] }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          {toast}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

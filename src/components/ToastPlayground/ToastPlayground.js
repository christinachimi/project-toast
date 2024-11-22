import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];
const DEFAULT_MESSAGE = "";

function ToastPlayground() {
  const [message, setMessage] = React.useState(DEFAULT_MESSAGE);
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
    setVariant(DEFAULT_VARIANT);
    setMessage(DEFAULT_MESSAGE);
    setToasts(allToasts);
  };

  const handleClose = (id) => {
    setToasts(function (prevState) {
      return prevState.filter((toast) => toast.id !== id);
    });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={() => setVariant(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, dismissHandler }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        function toastDismiss() {
          dismissHandler(toast.id);
        }

        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast style={toast.variant} dismissHandler={toastDismiss}>{toast.message}</Toast>
          </li>
        )
      })}
    </ol >
  );
}

export default ToastShelf;

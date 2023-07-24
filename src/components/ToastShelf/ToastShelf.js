import React from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        function toastDismiss() {
          removeToast({ id: toast.id });
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

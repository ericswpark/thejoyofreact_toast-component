import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ style, dismissHandler, children }) {
  const Icon = ICONS_BY_VARIANT[style];

  return (
    <div className={`${styles.toast} ${styles[style]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{style} - </VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton} aria-label="Dismiss message" aria-live="off" onClick={dismissHandler}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

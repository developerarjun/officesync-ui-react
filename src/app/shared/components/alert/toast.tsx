import { memo, useEffect } from 'react';
import Icon from './icon';
import type { ToastProps } from '.';

export const Toast = memo(({ remove, id, message, title, type, options }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => remove(id), options?.floatingTime || 3000);
  }, []);

  return (
    <div className={`ngx-toastr ${Icon(type)}`} style={{ opacity: 1 }}>
      <button
        type="button"
        aria-label="Close"
        className="toast-close-button"
        onClick={() => remove(id)}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div className=" toast-title" aria-label={title}>
        {title}
      </div>
      <div role="alert" className=" toast-message" aria-label={message}>
        {message}
      </div>
    </div>
  );
});

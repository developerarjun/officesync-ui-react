import type { ToastDetail, ToastMethods, ToastType } from '.';

let id = 0;

function dispatch(type: ToastType): ToastMethods[ToastType] {
  return (message: any, title: any, options: any) => {
    window.dispatchEvent(
      new CustomEvent<ToastDetail>('toastAlert', {
        detail: { id: ++id, message, options, type, title }
      })
    );
  };
}

export const toast: ToastMethods = {
  info: dispatch('info'),
  success: dispatch('success'),
  warning: dispatch('warning'),
  error: dispatch('error')
};

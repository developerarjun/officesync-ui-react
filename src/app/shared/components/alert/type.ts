import type { CSSProperties } from 'react';

export type ToastType = 'info' | 'warning' | 'error' | 'success';
export type ToastDetail = {
  id: number;
  message: string;
  type: ToastType;
  options?: ToastOptions;
  title: string;
};
export interface ToastOptions {
  floatingTime?: number;
  toastStyle?: CSSProperties;
}
export type ToastMethods = {
  [method in ToastType]: (message: string, title: string, options?: ToastOptions) => void;
};
export interface ToastContainerProps extends Pick<ToastOptions, 'floatingTime' | 'toastStyle'> {
  containerStyle?: CSSProperties;
}
export interface ToastProps extends ToastDetail {
  remove: (id: number) => void;
}

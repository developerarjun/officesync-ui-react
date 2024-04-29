import { memo, useCallback, useEffect, useState } from "react";
import { Toast } from "./toast";
import type { ToastContainerProps, ToastDetail } from ".";
import "./index.scss";

export const ToastContainer = memo(({ containerStyle, ...defaultOptions }: ToastContainerProps) => {
  const [toasts, setToasts] = useState<ToastDetail[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const handler = useCallback(({ detail }: CustomEvent<ToastDetail>) => {
    if (detail.options) {
      setToasts((prevToasts) => [...prevToasts, { ...detail, options: { ...defaultOptions, ...detail.options } }]);
      return;
    }

    setToasts((prevToasts) => [...prevToasts, { ...detail, options: defaultOptions }]);
  }, []);

  useEffect(() => {
    window.addEventListener("toastAlert", handler as any);

    return () => {
      window.removeEventListener("toastAlert", handler as any);
    };
  }, []);

  return (
    <>
    {
      toasts.length ?
      <div className="overlay-container" aria-live="polite">    
    <div id="toast-container" className="toast-top-right toast-container">
        <div id="toast-container" className="toast-top-right toast-container">
              {toasts.map((toast) => (
                <Toast key={toast.id} remove={removeToast} {...toast} />
              ))}
           
        </div>

    
    </div>
    </div> : <></>
    }
    
    </>
  );
});
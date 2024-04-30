import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import { Routes } from './app/routes';
import { ToastContainer } from './app/shared/components/alert';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes />
    <ToastContainer floatingTime={2500} />
  </BrowserRouter>
);

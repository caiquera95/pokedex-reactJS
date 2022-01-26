import Routes from './routes';
import './style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='app'>
      <ToastContainer autoclose={3000}/>
      <Routes />
    </div>
  );
}


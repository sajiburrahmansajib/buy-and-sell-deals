import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

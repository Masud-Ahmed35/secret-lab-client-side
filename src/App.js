import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext);
  console.log('Inside app: ', theme);

  return (
    <div className={`theme`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

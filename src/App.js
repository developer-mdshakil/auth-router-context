import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AwsomeAuth from './components/AwsomeAuth/AwsomeAuth';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/awsome', element: <AwsomeAuth></AwsomeAuth>
        },
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/login', element: <LoginPage></LoginPage>
        },
        {
          path: '/register', element: <RegisterPage></RegisterPage>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

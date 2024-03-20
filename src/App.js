
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom';
import AppGate from './components/AppGate/AppGate';

import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import LoginPage from './pages/Login/LoginPage';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import MainPage from './pages/Main/MainPage';
import RegisterPage from './pages/Register/RegisterPage';
import StartQuizPage, { updateQuizItemHandler } from './pages/StartPage/StartQuizPage';
import ScorePage from './pages/Score/ScorePage';
import QuizDetails from './pages/QuizDetails/QuizDetails';
import Logout from './components/Logout/Logout';
import Records from './pages/Records/Records';
import { loginHandler } from './pages/Login/LoginPage';
import { registerHandler } from './pages/Register/RegisterPage';
import { fetchAuthProfile} from './store/auth-action';
import { saveItemsForTheGameHandler } from './pages/Main/MainPage';
import {useDispatch } from 'react-redux';
import { fetchCurrentGameResults } from './pages/Score/ScorePage';


import './App.css';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppGate/>,
    errorElement: <Error/>,
    children:[
      {index:true,
      element:<Home/>},
      {
        path:'login',
        element: <LoginPage/>,
        action: loginHandler
      },
      {
        path:'users',
        element: <Users/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'register',
        element: <RegisterPage/>,
        action: registerHandler
      },
      {
        path:'main',
        element: <MainPage/>,
        action:saveItemsForTheGameHandler
      },
      {
        path: 'start-page',
        element: <StartQuizPage/>,
        action:updateQuizItemHandler
      },
      {path: 'score',
        element: <ScorePage/>,
        loader:fetchCurrentGameResults},
    {path: 'detailed-item/:quizIdTag/:itemId',
    id: 'quiz-item',
    children:[
      {index: true,
      element:<QuizDetails/>}
    ]},
    {path: 'records',
  element: <Records/>},
    {path:'logout',
    element:<Logout/>}
    ]
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAuthProfile());
  },[dispatch])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

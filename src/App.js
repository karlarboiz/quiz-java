
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppGate from './components/AppGate/AppGate';   
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import LoginPage from './pages/Login/LoginPage';
import About from './pages/About/About';
import UsersPage from './pages/Users/UsersPage';
import MainPage from './pages/Main/MainPage';
import RegisterPage from './pages/Register/RegisterPage';
import StartQuizPage, { updateQuizItemHandler } from './pages/StartPage/StartQuizPage';
import ScorePage from './pages/Score/ScorePage';
import QuizDetails from './pages/QuizDetails/QuizDetails';
import Logout from './components/Logout/Logout';
import RecordsPage from './pages/Records/RecordsPage';
import ResumeQuizPage from './pages/ResumeQuiz/ResumeQuizPage';
import ProfilePage, { getProfileDetails } from './pages/Profile/ProfilePage';
import TriviaModificationPage from './pages/TriviaModificationPage/TriviaModificationPage';
import { loginHandler } from './pages/Login/LoginPage';
import { registerHandler } from './pages/Register/RegisterPage';
import { fetchAuthProfile } from './store/auth-action';
import { saveItemsForTheGameHandler } from './pages/TriviaModificationPage/TriviaModificationPage';
import { fetchCurrentGameResults } from './pages/Score/ScorePage';
import { getQuizHistoryHandler } from './pages/Records/RecordsPage';
import { getUsersGameRecords } from './pages/Users/UsersPage';
import { fetchIncompleteQuizzes } from './pages/Main/MainPage';
import { getResumeItems } from './pages/ResumeQuiz/ResumeQuizPage';
import { updateProfileDetails } from './pages/Profile/ProfilePage';

import './App.css';
import QuizPreference from './pages/QuizPreference/QuizPreference';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppGate />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginHandler
      },
      {
        path: 'users',
        element: <UsersPage />,
        loader: getUsersGameRecords
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: registerHandler
      },
      {
        path: 'main',
        element: <MainPage />,
        loader: fetchIncompleteQuizzes
      },{path:'quiz-preference/',
        children:[
          {
            index: true,
            element: <QuizPreference/>,
          
          },{
            path: "trivia",
            element: <TriviaModificationPage/>,
            action: saveItemsForTheGameHandler
          }
        ]
        
      },
      // {
      //   path: 'quiz-main',
      //   element: <QuizModificationPage />,
      //   action: saveItemsForTheGameHandler
      // },
      {
        path: 'resume-quiz/',
        children: [{
          path: ':id/',
          element: <ResumeQuizPage />,
          loader: getResumeItems,
          action: updateQuizItemHandler,

        }, {
          path: ':id/score',
          element: <ScorePage />,
          loader: fetchCurrentGameResults
        }]
      },
      {
        path: 'start-page',
        element: <StartQuizPage />,
        action: updateQuizItemHandler
      },
      {
        path: 'score',
        element: <ScorePage />,
        loader: fetchCurrentGameResults
      },
      {
        path: 'detailed-item/:quizIdTag/:itemId',
        id: 'quiz-item',
        children: [
          {
            index: true,
            element: <QuizDetails />
          }
        ]
      },
      {
        path: 'records',
        element: <RecordsPage />,
        loader: getQuizHistoryHandler
      }, {
        path: 'profile',
        element: <ProfilePage />,
        loader: getProfileDetails,
        action: updateProfileDetails
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ]
  },
]);

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token || token !== undefined) {
      dispatch(fetchAuthProfile());
    } else {
      return;
    }
  }, [dispatch,token])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

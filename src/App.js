import './App.css';
import './styles/grid-list.css'
import './styles/quiz.css'
import './styles/result.css'
import './styles/style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './pages/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { ThemeContextProvider } from './Hook/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>

          <Nav />
          <main className="main">
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/quiz' element={<ProtectedRoute><Quiz /></ProtectedRoute>}></Route>
                <Route path='/result' element={<ProtectedRoute><Result /></ProtectedRoute>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
              </Routes>
            </div>
          </main>

        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}


export default App;

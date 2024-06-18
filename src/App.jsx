import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (<>
        <Routes>
          <Route path='/' Component={MainPage}/>

        </Routes>
        
  </>);
}
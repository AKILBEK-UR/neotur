import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage';
import Detail from './pages/Detail/Detail';
export default function App() {
  return (<>
        <Routes>
          <Route path='/' Component={MainPage}/>
          <Route path="detail" element={<Detail />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
        
  </>);
}
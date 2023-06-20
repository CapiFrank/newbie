import { Routes, Route } from 'react-router-dom';
import { Home } from 'Application/Pages/Home'
import { NotFound } from './Pages/NotFound';
import { Sidebar } from 'Application/Components/Sidebar';
import { Header } from './Components/Header';
import { HeaderSm } from './Components/HeaderSm';
import { LocalContext } from './Context/LocalContext';

export default function App() {
  return (
    <LocalContext>
      <div className='h-full'>
        <Header />
        <HeaderSm />
        <Sidebar />
        <div className='md:ml-52 lg:ml-60 pt-14 h-full'>
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </LocalContext>
  );
}

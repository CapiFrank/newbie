import { Routes, Route } from 'react-router-dom';
import { Home } from 'Application/Pages/Home'
import { NotFound } from './Pages/NotFound';
import { Sidebar } from 'Application/Components/Sidebar';
import { Header } from './Components/Header';
import { HeaderSm } from './Components/HeaderSm';
import { LocalContext } from './Context/LocalContext';
import { ArtistDetail } from 'Application/Pages/ArtistDetail';
import { FoundArtists } from 'Application/Pages/FoundArtists'
import { AlbumDetail } from './Pages/AlbumDetail';



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
            <Route path='artist/:artistId' element={<ArtistDetail />}> </Route>
            <Route path='searched/:searchKey' element={<FoundArtists />}> </Route>
            <Route path='album/:albumId' element={<AlbumDetail />}> </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </LocalContext>
  );
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getAlbum, auxiliarImage } from 'Application/Context/ApiContext';

export const AlbumDetail = () => {
  const [album, setAlbum] = useState([]);
  const [albumIsLoaded, setAlbumLoaded] = useState(false);
  const params = useParams();
  useEffect(() => {
    getAlbum(params.albumId).then((album) => {
      setAlbum(album); setAlbumLoaded(true); });
  }, [params.albumId]);

  return (
    <div class="h-screen w-full -mt-14">
      <div className='text-white w-full h-full flex items-center justify-center'>
        {albumIsLoaded && <div class="bg-slate-800 flex max-sm:flex-col justify-center items-center p-8 rounded-lg shadow-xl shadow-black">
          <div className='h-56 w-56 mr-10'>
            <img className='object-cover h-full w-full rounded-md shadow-[2px_2px_25px_-5px_rgba(0,0,0,1)] shadow-cyan-500/50' src={`${album.images.length ? album.images[0].url : auxiliarImage}`} alt="" />
          </div>
          <div className='h-auto w-60 flex justify-end flex-col mr-10'>
            <span className='text-3xl font-bold'>{album.name}</span>
            <span className='text-lg font-medium'>Popularity: <span className='font-normal'>{album.popularity}</span></span>
            <span className='text-lg font-medium'>Total Tracks: <span className='font-normal'>{album.total_tracks}</span></span>
            <span className='text-lg font-medium'>Release Date: <span className='font-normal'>{album.release_date}</span></span>
            <span className='text-3xl font-semibold'>Genres:</span>
            <div class="flex flex-wrap">
              {album.genres.map((genre, index) => (
                <span className='uppercase' key={index}>{genre};</span>
              ))}
            </div>
          </div>
          <div className='h-56 w-60 flex justify-end flex-col mr-10'>
            <span className='text-3xl font-bold'>Copyrights</span>
            {album.copyrights.map((item, index) => (
              <span className='uppercase' key={index}>{item.text};</span>
            ))}
          </div>
        </div>}
      </div>
    </div>
  )
}

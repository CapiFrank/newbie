import { React, useState, useEffect } from 'react';
import { getArtist, getAlbums, auxiliarImage } from 'Application/Context/ApiContext';
import Cards from 'Application/Components/Card';
import { useParams } from 'react-router';

export const ArtistDetail = () => {
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artistIsLoaded, setArtistLoaded] = useState(false);
  const [albumIsLoaded, setAlbumLoaded] = useState(false);
  const params = useParams();
  useEffect(() => {
    getArtist(params.artistId).then((artist) => { setArtist(artist); setArtistLoaded(true); });
    getAlbums(params.artistId).then((albums) => { setAlbums(albums); setAlbumLoaded(true); });
  }, [params.artistId]);
  return (
    <div class="w-full">
      {(albumIsLoaded && artistIsLoaded) &&
        <div className=''>
          <div className="bg-transparent flex max-sm:flex-col p-8 h-full">
            <div className='h-56 w-56 mr-10'>
              <img className='object-cover h-full w-full rounded-md shadow-[2px_2px_25px_-5px_rgba(0,0,0,1)] shadow-cyan-500/50' src={`${artist.images.length ? artist.images[0].url : auxiliarImage}`} alt="" />
            </div>
            <div className='h-56 w-56 flex justify-end flex-col mr-10 text-white-variation'>
              <span className='text-3xl font-bold'>{artist.name}</span>
              <span className='text-lg font-medium'>Popularity: <span className='font-normal'>{artist.popularity}</span></span>
              <span className='text-lg font-medium'>Followers: <span className='font-normal'>{artist.followers.total}</span></span>
              <span className='text-3xl font-semibold'>Genres:</span>
              <div class="flex flex-wrap">
                {artist.genres.map((genre, index) => (
                  <span className='uppercase' key={index}>{genre};</span>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full h-full bg-[rgba(0,0,0,0.2)]'>
            <div className='w-full h-full flex flex-wrap content-start justify-evenly pt-8'>
              {albums.map(album => (
              <Cards key={album.id} props={{ id: album.id, url: album.images.length ? album.images[0].url : auxiliarImage, title: album.name, path: 'album', }} />
            ))}
            </div>
          </div>

        </div>}
    </div>
  )
}

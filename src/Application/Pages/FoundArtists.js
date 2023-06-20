import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Cards from 'Application/Components/Card';
import { searchArtists, auxiliarImage } from 'Application/Context/ApiContext';


export const FoundArtists = () => {
  const params = useParams();
  const [singers, setSingers] = useState([]);
  useEffect(() => {
    searchArtists(params.searchKey).then((response) => {setSingers(response);});
  }, [params.searchKey]);
  return (
    <div className="w-full h-full mr-4">
      <div className={`w-full h-full duration-1000 bg-transparent flex flex-wrap content-start justify-evenly`}>
        {singers.length === 0 ?
          (
            <p>Loading...</p> 
          ) :
        (singers.map(items => (
          <Cards props={{ id: items.id, url: items.images.length ? items.images[0].url : auxiliarImage, title: items.name, path: 'artist' }} key={items.id}/>
        )))}
      </div>
    </div>
  )
}

import React from 'react'
import { LocalSingers } from 'Application/Context/LocalSingers'
import Cards from 'Application/Components/Card'

export const Home = () => {
  return (
    <div className="w-full h-full mr-4">
      <div
        className={`w-full h-full duration-1000 bg-transparent flex flex-wrap content-start justify-evenly`}>
          {LocalSingers.map((singer, index) => (
            <Cards
              props={{ id: singer.id, url: singer.image, title: singer.title, path: 'artist' }}
              key={index}
            />
          ))}
      </div>
    </div>
  )
}

import React from 'react'
import { VideoCard } from '../VideoCard/VideoCard'
import { CategoryBtn } from '../CategoryBtn/CategoryBtn'
import "./VideoSection.css"
import { categories } from '../../data/categories'
import { videos } from '../../data/videos'

/**
 * *YouTube content section (videos and categories)
*/

export default function VideoSection({widht}){

/**
    *The map is used to represent the categories and videos based on data
*/

    return(
      <>
      <section style={{width: widht}} className="content-section">
        <section className="categories-desktop">
        {categories.map((card, id)=>(
          <CategoryBtn name={card.tittle} key={id}></CategoryBtn>
        ))}
        </section>
        <section className="videos">
        {videos.map((card, id)=>(
          <VideoCard link={card.video} img={card.img} title={card.tittle} channel={card.channel} views={card.views} date={card.date} key={id}></VideoCard>
        ))}
        </section>
      </section>
      </>
    )
}
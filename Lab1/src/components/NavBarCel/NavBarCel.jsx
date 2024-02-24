import React from 'react'
import { IconBtn } from '../IconBtn/IconBtn'
import { CategoryBtn } from '../CategoryBtn/CategoryBtn'
import "./NavBarCel.css"
import { categories } from '../../data/categories'

export default function NavBarCel(){
    return(
      <>
      <section className="navbar-phone">
        <section className="main-phone">
          <section className="left-phone">
              <IconBtn clas="yt-phone" image="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"></IconBtn>
          </section>
          <section className="right-phone">
              <IconBtn clas="share-phone" image="https://static.thenounproject.com/png/3388431-200.png"></IconBtn>
              <IconBtn clas="notifications-phone" image="https://www.shareicon.net/data/512x512/2017/02/15/878700_alert_512x512.png"></IconBtn>
              <IconBtn clas="search-phone" image="https://cdn.iconscout.com/icon/free/png-256/free-search-1990-1174913.png"></IconBtn>
          </section>
        </section>
        <section className="categories">
        {categories.map((card, id)=>(
          <CategoryBtn name={card.tittle} key={id}></CategoryBtn>
        ))}
          </section>
        </section>
      </>
    )
}
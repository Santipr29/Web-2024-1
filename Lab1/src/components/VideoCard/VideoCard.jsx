import React from "react"
import "./VideoCard.css"

/**
 * *Card from youtube videos
*/

export function VideoCard(props){
    const {link, img, title, channel, views, date} = props
    return(
        <article className="video-card">
            <iframe src={link}></iframe>
            <section className="description">
                <section className="left">
                    <img src={img}></img>
                </section>
                <section className="right">
                    <h3>{title}</h3>
                    <section className="rightbot">
                        <p>{channel}</p>
                        <p>{views} - {date}</p>
                    </section>
                </section>
            </section>
        </article>
    )
}
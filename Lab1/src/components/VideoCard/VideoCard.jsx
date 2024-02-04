import React from "react"
export function VideoCard(props){
    const {link, img, title, channel, views, date} = props
    return(
        <article>
            <iframe src={link}></iframe>
            <section class="description">
                <section class="left">
                    <img src={img}></img>
                </section>
                <section class="right">
                    <h3>{title}</h3>
                    <p>{channel}</p>
                    <p>{views}-{date}</p>
                </section>
            </section>
        </article>
    )
}
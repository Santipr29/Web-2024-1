import React from "react"

export function VideoCard(props){
    const {link, img, title, channel, views, date} = props
    return(
        <article>
            <iframe src={link}></iframe>
            <section className="description">
                <section className="left">
                    <img src={img}></img>
                </section>
                <section className="right">
                    <h3>{title}</h3>
                    <p>{channel}</p>
                    <p>{views}-{date}</p>
                </section>
            </section>
        </article>
    )
}
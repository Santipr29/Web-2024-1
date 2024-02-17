import React, {useState, useEffect} from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"
import { IconBtn } from "../IconBtn/IconBtn"
import "./MainSections.css"

export default function MainSections(){
  const [isCellphoneScreen, setIsDesktopScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    function handleResize() {
      setIsDesktopScreen(window.innerWidth < 1024);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return(
      <>
      <section className="sections-phone">
      <SectionBtn image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/800px-Home-icon.svg.png" title="Home"></SectionBtn>
      <SectionBtn image="https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png" title="Shorts"></SectionBtn>
      <IconBtn clas="add" image="https://cdn-icons-png.flaticon.com/512/16/16057.png"></IconBtn>
      <SectionBtn image="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" title="Subscriptions"></SectionBtn>
      {isCellphoneScreen ? (
          <SectionBtn clas="profile-phone" image="https://yt3.ggpht.com/I0yZzIyRQZ9PHPBA5yGbUnOHu6wt0vr1ONYvcwYwW2PKiVdCqOsibQ1579J5CAoS7BY_Mf7FHqo=s68-c-k-c0x00ffffff-no-rj" title="You"></SectionBtn>
        ) : (
          <SectionBtn clas="profile-phone" image="https://cdn.icon-icons.com/icons2/2249/PNG/512/play_box_multiple_outline_icon_139261.png" title="You"></SectionBtn>
      )}
      </section>
      </>
    )
}
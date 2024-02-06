import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"

export default function MainSections(){
    return(
      <>
      <SectionBtn image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/800px-Home-icon.svg.png" title="Home"></SectionBtn>
      <SectionBtn image="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2" title="Shorts"></SectionBtn>
      <SectionBtn image="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" title="Subscriptions"></SectionBtn>
      <SectionBtn image="" title="You"></SectionBtn>
      </>
    )
}
import React from "react"
import { SectionBtn } from "../SectionBtn/SectionBtn"

export default function ConfigSection(){
    return(
      <>
      <section>
      <SectionBtn image="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png" title="Settings"></SectionBtn>
      <SectionBtn image="https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/flag.png" title="Report history"></SectionBtn>
      <SectionBtn image="https://static.thenounproject.com/png/1829242-200.png" title="Help"></SectionBtn>
      <SectionBtn image="https://static.thenounproject.com/png/4808951-200.png" title="Send feedback"></SectionBtn>
      </section>
      </>
    )
}
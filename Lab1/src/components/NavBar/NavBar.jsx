import React from 'react'
import { IconBtn } from '../IconBtn/IconBtn'

export default function NavBar(){
    return(
      <>
      <section class="main">
        <section class="left">
            <IconBtn></IconBtn>
        </section>
        <section class="center">
            <input>
                
            </input>
            <IconBtn></IconBtn>
        </section>
        <section class="right">
            <IconBtn></IconBtn>
            <IconBtn></IconBtn>
            <IconBtn></IconBtn>
        </section>
      </section>
      </>
    )
}
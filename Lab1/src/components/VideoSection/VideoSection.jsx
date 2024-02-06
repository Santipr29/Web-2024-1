import React from 'react'
import { VideoCard } from '../VideoCard/VideoCard'
import { CategoryBtn } from '../CategoryBtn/CategoryBtn'

export default function VideoSection(){
    return(
      <>
      <section>
        <section class="categories">
          <CategoryBtn name="All"></CategoryBtn>
          <CategoryBtn name="Music"></CategoryBtn>
          <CategoryBtn name="Gaming"></CategoryBtn>
          <CategoryBtn name="Mixes"></CategoryBtn>
          <CategoryBtn name="LaLiga"></CategoryBtn>
          <CategoryBtn name="EA Sports FC 24"></CategoryBtn>
          <CategoryBtn name="FC Barcelona"></CategoryBtn>
          <CategoryBtn name="Three-point field goal"></CategoryBtn>
          <CategoryBtn name="Live"></CategoryBtn>
          <CategoryBtn name="Recently uploaded"></CategoryBtn>
          <CategoryBtn name="Watched"></CategoryBtn>
          <CategoryBtn name="New to you"></CategoryBtn>
        </section>
        <section class="videos">
          <VideoCard link="https://www.youtube.com/embed/ya1_Y_OLD0g?si=T3KufXVIdqZxHzF-" img="https://yt3.ggpht.com/f75G_XKaKml0FciSTheG7q2OdBNXvCpUe6-5KiT-hGFQ8Oign80L6yuZl49sv8rVWM16MEZ89g=s48-c-k-c0x00ffffff-no-nd-rj" title="PASIEMPRE - Tainy, Arcangel, Myke Towers, Jhayco, Omar Courtz, Arca (Official Visualizer)" channel="Tainy" views="24M views" date="7 months ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/wOLMC6XtZVo?si=MGI6p-9AguLOHXQD" img="https://yt3.ggpht.com/3ondwJtqgg_1YlfjFd_KJMQ-Q4bz764TiYlsZc0kKwsU5FQghNUwalM0jnnPo7WysTCOWkQQIg=s48-c-k-c0x00ffffff-no-rj" title="¡LOS GUNNERS SE QUEDARON CON EL CLÁSICO Y SE ACERCAN A LA CIMA! | Arsenal 3-1 Liverpool RESUMEN" channel="ESPN Fans" views="27K views" date="27 minutes ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/krsBRQbOPQ4?si=idJkE4tj3Fd1GokV" img="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s48-c-k-c0x00ffffff-no-rj" title="$1 vs $250,000,000 Private Island!" channel="MrBeast" views="105M views" date="8 days ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/nPojSkZd16U?si=X9NBBGEyTsJ6GZW6" img="https://yt3.ggpht.com/OWWjrnlzerspGgXo_RNKVl2QcEXzpfbaTIv7OXOxeMeia-1gFX-zi9XlNtBIrXOtrkPk4oWoDXI=s48-c-k-c0x00ffffff-no-rj" title="LA FÓRMULA 1 ESTALLA: HAMILTON FICHA POR FERRARI EN 2025" channel="Sevi87" views="11K views" date="2 days ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/SkfJyv4EnGE?si=gvBFZcLmUVC7M-Qe" img="https://yt3.ggpht.com/4pF4JWQTx7_qyRb1iEzVwYYmda8eFKd2ZVlthAjZaelmdIhHUVFpUfun3b2qcHp8heiFeaC6mLQ=s48-c-k-c0x00ffffff-no-rj" title="GRABO con el FC BARCELONA: Ferran, Gündogan, Raphinha… *os enseño todo*" channel="Adri Contreras" views="84K views" date="13 days ago"></VideoCard>

          <VideoCard link="https://www.youtube.com/embed/rYLDw7YXyw4?si=50voqR_j8vy250fg" img="https://yt3.ggpht.com/4XDYWC0nsWGrDn__8NnDypC-5eS2gfhfst273Y_Huf1gnmOJ05zKH8uJlYAp7ejBpjX08lFoHOI=s48-c-k-c0x00ffffff-no-rj" title="ALAVES 1 vs 3 FC BARCELONA | LALIGA 2023/24 MD23" channel="FC Barcelona" views="747K views" date="21 hours ago"></VideoCard>
          
          <VideoCard link="https://www.youtube.com/embed/AwSFuXm5wxg?si=X0D7YchxuzVgAWLm" img="https://yt3.ggpht.com/x81sm-yXq5WUgWMyaiU5hOwBuies-YNhy75iELwscd2g6_IsYuA4_2TSxn0eDNWfyVuhypi6wSs=s48-c-k-c0x00ffffff-no-nd-rj" title="LA ÚLTIMA - Quevedo (Video Oficial)" channel="Quevedo" views="2.5M views" date="3 days ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/YFdvmTonLGA?si=bGHToccZHWuVRVy9" img="https://yt3.ggpht.com/4XDYWC0nsWGrDn__8NnDypC-5eS2gfhfst273Y_Huf1gnmOJ05zKH8uJlYAp7ejBpjX08lFoHOI=s48-c-k-c0x00ffffff-no-rj" title="PAU CUBARSÍ CELEBRATES his 17th BIRTHDAY & LA LIGA DEBUT 🔵🔴 | FC Barcelona" channel="FC Barcelona" views="115K views" date="13 days ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/k1tNcWnEwR8?si=8qflP73H8x_ZP9-D" img="https://yt3.ggpht.com/ytc/AIf8zZSVNnn5yQ4C-1P6K5cBLgpAqbbGciqOnhAxp9f_sw=s48-c-k-c0x00ffffff-no-rj" title="100 Amazing Goals Of The Year 2023" channel="Notelicioux" views="641K views" date="1 month ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/BVIdzytAtkg?si=DSCYnY0k07h82Zi7" img="https://yt3.ggpht.com/MbFTBD1NcQXoOB1OOs_pYPU2Kfhkhgg31zMcmAHH5nPhSa3gUjjtv0qW7XnUOoYcbe9bxD88j5Y=s48-c-k-c0x00ffffff-no-rj" title="Guía sobre Position en CSS" channel="jonyl" views="267K views" date="3 years ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/CEDzshBIQOk?si=LvaLBKOcZU7rmVBm" img="https://yt3.ggpht.com/_cJUz0aSSV6TtTrw4_XaqsMVjbMkddQxxLxnN2G_PJ9NZv-9sjVXC88ILPd7kQRkO8OO7YG7=s48-c-k-c0x00ffffff-no-rj" title="Steph Curry Drops Season-High 60 Points! | February 3, 2024" channel="NBA" views="223K views" date="15 hours ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/gWYwmCXzBac?si=UYewoDZY03t8Xm1y" img="https://yt3.ggpht.com/ytc/AIf8zZRTahgXVCPuawjCAEVc12AJq8q7ozUn5yDN4nr8Rg=s48-c-k-c0x00ffffff-no-rj" title="The GREATEST NBA Game-Winners In Recent Years 😱" channel="GD's Highlights" views="516K views" date="2 weeks ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/6qko7Nbe8YA?si=24isfq_c0xBOA_hd" img="https://yt3.ggpht.com/ytc/AIf8zZSGcFx4CKRQD4TUAzoN0OW51WAnMllNxfFgPqsL=s48-c-k-c0x00ffffff-no-rj" title="CSS Grid vs Flexbox - Cuando usar uno u otro." channel="FalconMasters" views="312K views" date="2 years ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/hUOfC2ilXak?si=ZGuQVZq2fGR9mg68" img="https://yt3.ggpht.com/ytc/AIf8zZRX_YpYUwxpBiB45JDkgVKaHEcHAxn1Oml0iedPKQ=s48-c-k-c0x00ffffff-no-rj" title="10 Minutes Of Stephen Curry Being A Literal God" channel="MaxaMillion711" views="402K views" date="4 months ago"></VideoCard>
          <VideoCard link="https://www.youtube.com/embed/K3l7_v4mcWk?si=PpB2QwEZrW4FDDEL" img="https://yt3.ggpht.com/vsO4bjhupUDjyfL5Tq2ztztdNyoPCj6Rb9g81SNj9DdbhALq0tdaHLz71TwfMt6ZXytjlns4=s48-c-k-c0x00ffffff-no-rj" title="¿Que tan bueno era Johan Cruyff?" channel="La Biblia del Futbol" views="147K views" date="2 months ago"></VideoCard>
        </section>
      </section>
      </>
    )
}
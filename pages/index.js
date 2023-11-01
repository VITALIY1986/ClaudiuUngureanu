import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Bg from "../public/11.gif"
import Logo from "../public/Logo.png"
import Favicon from "../public/favicon.png"
import About from "../public/about-as.jpg"
import Background_full from "../public/bak.jpg"
import YouTube from "react-youtube";
import Layout from '../components/Layout.js'
export default function Home() {
 
    const opts = {
      height: "140",
      width: "230",
      playerVars: {
        autoplay:1,
      },
    };
    
  return (
    
<Layout>
   
    <div className={styles.container}>
  
      {/*<video autoPlay muted loop className='video_content_mobile'
          src="/qq.mp4"
         controls={false}
          width='100%'
      
  />*/}
     
  

<div className='burger'>
     <input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  	<div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
		</label>
		<section className="drawer-list bg-very_peri  ">
      
		<div className="abot-us ">
   
   <div className='grid-about-us'>
      <h1><strong>CREAREA UNUI COSTUM BESPOKE</strong></h1>
      <p>  Costumul creat pe comandă este un obiect vestimentar de lux, în care finețea cusăturilor și unicitatea țesăturilor vă stau la dispoziție în <strong>Atelierul de creatie Claudiu Ungureanu, </strong>în număr de peste câteva mii de culori și desene, care oferă posibilitatea unei experiențe unice.</p>
      <p>Purtătorul unui costum personalizat iese în evidență indiferent de circumstațe datorită opulenței subtile redate prin atenția la cele mai mici detalii.</p>
      
   </div>
		</div>
			</section>

      </div>
  
      <main className={styles.main } >
     
      <Image
    className='bg_pc'
    src={Bg}
    alt="Picture of the author"
       
      />
       <div className={styles.main_container}>
       <div className={styles.header_container}>
       {/*<Image
        src={Logo}
        alt="Picture of the author"
        width={250}
/>*/}
    </div> 
    
        <div className={styles.own_container}> 
   
     
    <div className={styles.block_button }>
      <div className={styles.vk_block }>
        <p className={styles.vk_title }>@byclaudiungureanu</p>
     
        
      </div>
      <div className={styles.socials }></div>
      <button className={styles.c_button }> <Image
	className={styles.favicon}
		src={Favicon}
		alt="Picture of the author"
		width={42}
	  /> <Link href="https://byclaudiungureanu.ro/" className={styles.c_button_site_link }><p>byclaudiungureanu.ro</p></Link></button>
      <button className={styles.c_button }><Link href="https://byclaudiungureanu.ro/pasii-unui-costum-bespoke/"> <div className={styles.marquees } ><span className={styles.marquee }> CROITORIA BESPOKE O ARTĂ A FRUMUSEȚII VĂZUTĂ ÎN MICILE DETALII </span></div></Link></button>
      <button className={styles.c_button } ><Link href="https://www.google.com/maps/place/Claudiu+Ungureanu+Ceremony+Collection/@47.1338095,27.6107867,15z/data=!4m14!1m7!3m6!1s0x40cafbd016be1e19:0xd2826827429ced75!2sClaudiu+Ungureanu+Ceremony+Collection!8m2!3d47.1338095!4d27.6107867!16s%2Fg%2F1q66zskqd!3m5!1s0x40cafbd016be1e19:0xd2826827429ced75!8m2!3d47.1338095!4d27.6107867!16s%2Fg%2F1q66zskqd?entry=ttu"><p>Google Maps</p></Link></button>
      <button className={styles.c_button }><Link href="https://www.youtube.com/@atelierclaudiuungureanu7975"><p>Yutube</p></Link></button>
     
    </div>
    
    
    </div>
    
       </div>
     
      
 
      
     
      </main>

     
          
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      
         
    
    </div>
    </Layout>
  )
  
}

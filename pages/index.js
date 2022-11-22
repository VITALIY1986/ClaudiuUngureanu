import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Bg from "../public/11.jpg"
import Logo from "../public/Logo.png"
import Favicon from "../public/favicon.png"
import About from "../public/about-as.jpg"
import Background_full from "../public/bak.jpg"
import YouTube from "react-youtube";
import Layout from '../components/Layout.js'
export default function Home() {
 
    const opts = {
    
      playerVars: {
        autoplay: 0,
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
      <h1><strong>Despre noi</strong></h1>
      <p><strong>C.O.S. Laboratories</strong> este o companie specializată în producerea și comercializarea de tratamente integrate dedicate îmbunătățirii sănătății și stării de bine. Liniile noastre de produse includ suplimente alimentare, vitamine și minerale esențiale pentru funcționarea optimă a organismului, realizate cu respectarea celor mai înalte standarde de eficiență și puritate.</p>
      <p>Sănătatea și starea ta de bine este Misiunea noastră. Și pentru a ne îndeplini Misiunea, punem experiența, profesionalismul și dedicarea noastră în tot ceea ce facem, pentru a produce suplimente alimentare, vitamine și minerale esențiale de calitate menite să îți dea energie, să îți aducă echilibru și să te susțină ca un partener în tot ceea ce îți propui să faci în fiecare zi.</p>
      <p>Gama noastră de produse acoperă toate nevoile tale, de la suplimente alimentare și vitamine pentru echilibrul și starea ta de bine de zi cu zi până la pentru perioadele de efort prelungit și susținerea performanței.</p>
      <p>Credem în ceea ce facem și te punem pe tine și nevoile tale în centrul preocupărilor noastre, de aceea investim în cercetare & dezvoltare pentru a crea mereu produse noi și îmbunătățite menite să îți ofere tot ceea ce ai nevoie pentru a te simți mereu plin de energie și pregătit să faci totul pentru a-ți îndeplini visele.</p>
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
        <p className={styles.vk_title }>@cos_laboratories</p>
     
        
      </div>
      <div className={styles.socials }></div>
      <button className={styles.c_button }>  <Link href="https://www.cos-laboratories.com/"><Image
	className={styles.favicon}
		src={Favicon}
		alt="Picture of the author"
		width={42}
	  /><p>cos-laboratories.com</p></Link></button>
      <button className={styles.c_button }><Link href="https://pentru-par.cos-laboratories.com/"> <div className={styles.marquees } ><span className={styles.marquee }> &#9989; Vitamine pentru par complex de recuperare &#9989; </span></div></Link></button>
      <button className={styles.c_button } ><Link href="https://www.google.com/maps/place/C.O.S+Laboratories/@47.1487675,27.6434634,15z/data=!4m6!3m5!1s0x40caf9a6ab1f9bc1:0x34e6725adc68da!8m2!3d47.1487675!4d27.6434634!16s%2Fg%2F11jsghm_kt"><p>Google Maps</p></Link></button>
      <button className={styles.c_button }><Link href="https://www.youtube.com/channel/UCnIqJK0voUF-UkVbOf1TCUg"><p>Yutube</p></Link></button>
     
    </div>
    <YouTube videoId="gvc4cQzYJu0" 
            opts={opts}  />
  
    
    </div>
    
       </div>
     
      
 
      
     
      </main>

     
          
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      
         
    
    </div>
    </Layout>
  )
  
}

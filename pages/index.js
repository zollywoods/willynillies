import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useCallback, useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import Mint from './mint';
import { useRouter } from 'next/router'
import { Link } from 'next/link'


//&#39
export default function Home() {
  // const navigate = useNavigate();
  const router = useRouter()
  const [toMint, setToMint] = useState(false);
  const [sentence, setSentence] = useState("I used to be a man... Then came the NFTs.");
  const [index, setIndex] = useState(0);
  const sentences = [
    "They say web 3 is the wild west, but I think it's more like the circus.",
    "I minted everything I saw, but always made the wrong play... ",
    "You could say I minted willy-nilly. ",
     "Soon enough, I became an actual clown. Now Willy Nilly is my name.",
     "I don't have to tell you what it's like. After all, you're just like me.",
     "We all say, 'wen lambo?'  when we should say,  'wen clown car?' ",
     "The clown car is on its way, and there's room for all of us.",
     "Introducing: Willy Nillies. No roadmap, no Discord, no nothing—if you mint this, you're a clown",
  ]


  // const nextWord = useCallback(() => {
  //   if(index===(words.length)){
  //     setOpenText("NOW");
  //     return;
  //   }
  //   setOpenText(words[index]);
  //   index++;
  // }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(nextWord, 300);
  //   return () => clearInterval(intervalID);
  // }, [nextWord])


  function nextSentence() {
    if(index===sentences.length){
      setToMint(true);
    }
    console.log("this is the index: ", index);
    setSentence(sentences[index]);
    setIndex(index + 1);
  }

  //   useEffect(() => {
  //   nextSentence;
  // }, [nextSentence])


  if(toMint){
    // return <Route  <Navigate to="/mint"  />
    // return <Route path = "/register"  element ={<Navigate to="/" /> } />}
    setTimeout(() => {
      router.push("/mint")
      console.log("you made it to mint")  
    }, 5000);
    
  }

  return (
    <div >
      <Head>
        <title>Clowns</title>
        <meta name="description" content="Clown App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&family=Rubik+Moonrocks&family=Rye&family=Sigmar+One&family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* <div className={styles.menu}>
        <div className={styles.rightMenu}>
            <Link href="/mint"> Mint </Link> 
            <Link href="/schedule"> Schedule </Link> 

            <img src="logos/etherscan.png" width="25vw" className={styles.menuImage}/>
            <img src="logos/opensea.svg" width="25vw" className={styles.menuImage}/>
            <img src="logos/twitter.svg" width="25vw" className={styles.menuImage}/>
        </div>
      </div> */}


      <div className={styles.main}>
        <div className={styles.clownHeader} onClick={nextSentence} >
         {sentence}
        </div>
      </div>

    </div>
  ) 
}

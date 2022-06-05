import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"


const  Mint = () => {
  const [count, setCount] = useState(1);
  const [ethPrice, setEthPrice] = useState(.05);
  const [mintOver, setMintOver] = useState(styles.mintOver);
  const [mintButtonText, setMintButtonText] = useState("Mint Now")


  function add() {
    var newCount = count + 1;
    setCount( newCount );
    var newEthPrice = (ethPrice * 1000 + .05 * 1000)/1000 ;

    setEthPrice((Math.round(newEthPrice * 100) / 100).toFixed(2) );
  }

  function minus() {
    if(count !== 1){
      var newCount = count - 1;
      var newEthPrice = (ethPrice * 1000 - .05 * 1000)/1000 ;
      setCount( newCount );  
      setEthPrice( (Math.round(newEthPrice * 100) / 100).toFixed(2) );
    }
    else{
      return;
    }
  }

  function mint() {
    if(mintButtonText === "Mint Now"){
      setMintButtonText("Click To View Opensea")
    }
  }

  

  return (
    <div >
      <Head>
        <title>Clowns</title>
        <meta name="description" content="Clown App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Rubik+Microbe&family=Rubik+Moonrocks&family=Rye&family=Sigmar+One&family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className={styles.menu}>
        <div className={styles.leftMenu}>
          {/* <img src="clowns/clown.svg" className={styles.leftImage}/> */}
          <span className={styles.walletButton}> Connect Wallet </span>
        </div>
        <div className={styles.rightMenu}>
            {/* <a href="/mint"> Mint </a> 
            <a href="/schedule"> Schedule </a>  */}
            <img src="logos/etherscan.png" width="25vw" className={styles.menuImage}/>
            <img src="logos/opensea.svg" width="25vw" className={styles.menuImage}/>
            <img src="logos/twitter.svg" width="25vw" className={styles.menuImage}/>
        </div>
      </div>


   

      <div className={styles.mintMain}>

      <dic className={styles.mintHeader}>
      <img src="clowns/willynillies.png" className={styles.topImage} width="17.5%"/> <br/>

       {/* <div> CLOWNS </div>  */}
      </dic>

      <div className={styles.mintModuleTop}>
            Connect Wallet To Mint
        </div>
        <div className={styles.mintModule}>
            <div className = {styles.mintInput}>
                Clown 
                <div className={styles.input}>
                  <img src="symbols/minus.svg" width="19%" className={styles.symbols} onClick={minus}/>
                  <span className={styles.number}> {count} </span>
                  <img src="symbols/plus.svg" width="19%" className={styles.symbols} onClick={add}/>
                </div>
                <span className={styles.ethAmount}> {ethPrice} ETH </span>
            </div>
            <div className={styles.mintButton} onClick={mint}>
              {mintButtonText}
            </div>
        </div>
        <div className={styles.mintModuleBottom}>
         Clowns implements ERC721A for the lowest possible mint cost
          in addition to allowing one to mint multiple NFT's at nearly the cost of one
        </div>

        <div className={styles.mintHeader}>
          <img src="clowns/clowncar.png" className={styles.topImage} width="30%"/> <br/>
        </div>

        <div className={styles.bottomCopy}>
            A tale is told that in the 2022 bear market, a man goes to visit a doctor, acclaimed for his ability to treat being down bad. “I can’t eat, I can’t sleep,” says the man. “I feel constant FOMO, but all my bags are worthless. I paperhand blue chips and diamond hand garbage. Please help me, doctor.”
            <br/> <br/>
            “Cheap degen mints are the best medicine, my friend,” says the doctor. “Just close your eyes and mint Willy Nilly.”
            <br/> <br/>

            The man looks at the doctor for a moment. “Ah,” he says. “That won’t help.”
            <br/> <br/>

            “Why not, sir?”
            <br/> <br/>

            The man shrugs. “I am Willy Nilly.” 
            <br/> <br/>

        </div>


        </div>



    </div>
  )
}


export default Mint;

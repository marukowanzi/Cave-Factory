import React, { useState } from "react";

export const Home = () => {
    const [walletAddress, setWalletAddress] = useState("");
    
    async function requestAccount( ) {
        console.log('Requesting account......')
        //查metamask账号
        if (window.ethereum) {
            console.log('detected'); 
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts", 
                })
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }
        } else {
            console.log('Meta mask not detected');
        }
    }
    /*async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
            await requestAccount()
        }
    }*/
    return (
        <div 
          className="homepage"
          style={{backgroundImage: "url(https://s3.bmp.ovh/imgs/2023/06/10/4dc62e54b20d5de5.png)",
          }}
        >
            <div className="frame">
                <div className="navbar">
                    <div className="text-wrapper">Home</div>
                    <div className="div">Dreamland</div>
                    <div className="text-wrapper2">UnderTree</div>
                    <div className="text-wrapper3">Alchemy</div>
                    <div className="text-wrapper4">About Us</div>
                </div>
                <div className="wallet">
                    <div className="connectwallet1"> WalletAddress:  </div>
                    <div className="connectwallet1"> {walletAddress} </div>
                </div>
                <div className="div-wrapper">
                    <botton className="text-wrapper5" onClick = {requestAccount }>Connect Wallet</botton>.
                    
                </div>
            </div>
            <div className="frame-2">
                <div className="cave-wrapper">
                    <img className="cave" alt="Cave" src="https://s3.bmp.ovh/imgs/2023/06/10/2c7932373600d88b.png" />
                </div>
                <div className="img-wrapper">
                    <img className="img" alt="Img" src="https://s3.bmp.ovh/imgs/2023/06/10/662dad8fe56642e0.png" />
                </div>
                <div className="factory-wrapper">
                    <img className="factory" alt="Factory" src="https://s3.bmp.ovh/imgs/2023/06/10/c49197f5fb9d8408.png" />
                </div>
            </div>
            <div className="frame-3">
                <h1 className="innovating-the">
                    <span className="span">Innovating the future through</span>
                    <span className="text-wrapper6"> art, technology, and experience</span>
                </h1>
                <div className="frame-4">
                    <div className="text-wrapper7" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd71AozenHgujia3uuPVAWGHptjtzkWw4L4ydseDNzyPaf4ew/viewform?usp=sf_link', '_blank')}>MINT YOUT SBT</div>
                    <img className="vector" alt="Vector" src="https://s3.bmp.ovh/imgs/2023/06/10/bfd286d7b0e58256.png"/>
                </div>

            </div>
        </div>
    );
};

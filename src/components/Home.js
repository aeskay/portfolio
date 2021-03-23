import React from 'react'
// import bg from '../../public/images/bg.png'

function Home() {
    return (
        <>
           <div className="homeDiv" id="home">
            <div className="grid1">
              <img alt="background" src="/images/bg.png" className="homeFirstBg"/>
              <img alt="Sammy" src="/images/sam.png" className="homeFirstImg"/>
            </div>
            <div className="grid2">
                <div>
                    <h1 className="headText">ABOUT ME</h1>
                    <p className="subtitle">My name is Samuel Alalade, and I am a front-end developer</p>
                    <p className="body">I am a skilled developer who can be relied upon to build responsive and modern websites, deliver them on schedule and to a very high standard. I am enthusiastic and passionate Web Developer who can bring new thinking from one sector to the next. With over 3 years of experience, I can build new websites or update existing ones. I have worked on over 50 websites</p>
                    <span>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://wa.me/+2348133355944"><i className="fab fa-whatsapp"></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://facebook.com/alalade.samuelsambluez"><i className="fab fa-facebook "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://twitter.com/iamaeskay"><i className="fab fa-twitter "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://instagram.com/aeskay"><i className="fab fa-instagram "></i></a>
                    </span>
                </div>
            </div>
          </div> 
        </>
    )
}

export default Home

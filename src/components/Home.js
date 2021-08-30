import React from 'react'
// import bg from '../../public/images/bg.png'

function Home() {
    return (
        <>
           <div className="homeDiv" id="home">
            <div className="grid1 fader">
              {/* <img alt="background" src="/images/bg.png" className="homeFirstBg"/>
              <img alt="Sammy" src="/images/sam.png" className="homeFirstImg"/> */}
              <div>              
                  <img alt="Sammy" src="/images/sam-2.png" className="homeNewImg"/>
            </div>
            </div>
            <div className="grid2">
                <div>
                    <h1 className="headText topFader">ABOUT ME</h1>
                    <p className="subtitle fader">My name is Samuel Alalade, and I am a front-end developer</p>
                    <p className="body bottomFader">I am a skilled developer who can be relied upon to build responsive and modern websites, deliver them on schedule and to a very high standard. I am enthusiastic and passionate Web Developer who can bring new thinking from one sector to the next. With over 3 years of experience, I can build new websites or update existing ones. I have worked on over 50 websites</p>
                    <span className="bottomFader">
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://github.com/aeskay" title="Github"><i className="fab fa-github "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://facebook.com/alalade.samuelsambluez" title="Facebook"><i className="fab fa-codepen "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://linkedin.com/alalade-samuel" title="LinkedIn"><i className="fab fa-linkedin "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://twitter.com/iamaeskay" title="Twitter"><i className="fab fa-twitter "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://wa.me/+2348133355944" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>

                    </span>
                </div>
            </div>
          </div> 
        </>
    )
}

export default Home

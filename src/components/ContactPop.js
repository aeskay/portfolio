import React from 'react'

function ContactPop() {
    const handlePopClose = () => {
        document.querySelector('.popBack').classList.add('hidden');
        document.querySelector('.popBack').classList.remove('showing')
    }
    return (
        
            <div className="popFront">
                <div>
                    <h1 style={{textAlign: "center", fontFamily: "Rajdhani"}}>CONTACT ME</h1>
                    <p style={{textAlign: "center"}} className="body">Select your best platform, and I'm right there!</p>
                    <div style={{textAlign: "center"}} >
                    <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://wa.me/+2348133355944"><i className="fab fa-whatsapp"></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://facebook.com/alalade.samuelsambluez"><i className="fab fa-facebook "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://twitter.com/iamaeskay"><i className="fab fa-twitter "></i></a>
                        <a target="_blank" rel="noreferrer" className="homeSocIcon" href="https://instagram.com/aeskay"><i className="fab fa-instagram "></i></a>
                    </div>
                    <div style={{textAlign: "center", outline: "none", marginTop: "20px"}} ><button onClick={handlePopClose} className="popCloseIcon">CLOSE</button></div>
                </div>
            </div>
        
    )
}

export default ContactPop

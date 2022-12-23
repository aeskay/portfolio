import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import ContactPop from './ContactPop'
import Navigation from './layouts/Navigation'

function ErrorPage() {

    const handlePopOpen = () => {
        document.querySelector('.popBack').classList.remove('hidden')
        document.querySelector('.popBack').classList.add('showing')
    }

    return (
        <div className="App">
            <div className="popBack hidden">
                <ContactPop/>
            </div>
            <div className="navSection">
                <Navigation/>
            </div>
            <div className="otherSection">
                <div className="firstSection">
                    <div className="centralize logo-text">
                        <span className="span1">John</span> <span className="span2">ALALADE</span>
                        <button onClick={handlePopOpen} className="contactBtn">Contact Me</button>
                    </div>
                    <div className="" style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}>
                            <h1 className="head">
                                I think you just got lost :-(
                            </h1>
                            <p className="body">Let's help you find your way</p>
                            <Link to="/">
                                <Button variant="contained" size="large" style={{background: 'black', color: 'white'}}>GO BACK HOME</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="footerBtn">
                        Copyright &copy;2021 SKA Technologies
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default ErrorPage

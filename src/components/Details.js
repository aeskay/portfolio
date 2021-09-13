import { Button } from '@material-ui/core'
import React from 'react'
import {portfolio } from '../datalist';
import { Link } from 'react-router-dom'
import ContactPop from './ContactPop'
import Navigation from './layouts/Navigation'

function Details(props) {

    const handlePopOpen = () => {
        document.querySelector('.popBack').classList.remove('hidden')
        document.querySelector('.popBack').classList.add('showing')
    }
    
    let postId = props.match.params.item_id;

    const filteredArray = [...portfolio].filter(item => item.id == postId)

    const { name, cover, link, details} = filteredArray[0]
    
    let nextId, prevId;

    if(postId==='20'){
        nextId = 1
        prevId = Number(postId)-1
    } else if(postId==='1') {
        nextId = Number(postId)+1
        prevId = 20
    } else {
        nextId = Number(postId)+1
        prevId = Number(postId)-1
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
                        <span className="span1">JOHN</span> <span className="span2">ALALADE</span>
                        <button onClick={handlePopOpen} className="contactBtn">Contact Me</button>
                    </div>
                    <div className="" style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}>
                            <h1 className="head"  style={{marginTop: 55}}>
                                {name}
                            </h1>
                            <img alt="porfolio cover" src={`/${cover}`} style={{maxWidth: '600px', width:'80%'}}/>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <p className="body" style={{width: '80%'}}>
                                    {details}
                                </p>
                            </div>
                            
                            
                            <Link to="/" style={{margin: 5}}>
                                <Button variant="contained" size="large" style={{background: 'black', color: 'white', textDecoration: 'none'}}>GO HOME</Button>
                            </Link>

                            <Button style={{margin: 5}} variant="contained" size="large" color="secondary">
                            <a rel="noreferrer" href={link} style={{textDecoration: 'none', color: 'white'}} target="_blank">VISIT WEBSITE</a>
                            </Button>
                            <hr style={{borderColor: '#ccc', margin:'20px 0px'}}/>
                            <div style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
                                <div>
                                    <Link to={`/portfolio/${prevId}`}>
                                        <button>Previous</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/portfolio/${nextId}`}>
                                        <button>Next</button>
                                    </Link>
                                </div>
                            </div>
                            
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

export default Details

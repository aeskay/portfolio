import React from 'react'


function Skills() {
    return (
        <React.Fragment>
           <div className="skillsDiv" id="skills">  
            <div className="grid3" style={{backgroundImage: "url('/images/sam-bg-2.png')", backgroundSize: "cover"}}>
                <div>
                    <h1 className="skillHead rightFader">MY <br/>SKILLS</h1>
                </div>
            </div>     
            <div className="grid4">
                <div>
                    <div className="skillsGrid">
                        <div className="topFader"><img alt="html" src="/images/html.png" className="skillImg"/></div >
                        <div className="topFader"><img alt="css"  src="/images/css.png" className="skillImg"/></div >
                        <div className="topFader"><img alt="javascript" src="/images/javascript.png" className="skillImg"/></div >
                        <div className="topFader"><img alt="react"  src="/images/react.png" className="skillImg"/></div >
                        <div className="bottomFader"><img alt="bootstrap" src="/images/bootstrap.png" className="skillImg"/></div >
                        <div className="bottomFader"><img alt="jquery" src="/images/jquery.png" className="skillImg"/></div >
                        <div className="bottomFader"><img alt="vue" src="/images/vue.png" className="skillImg"/></div >
                        <div className="bottomFader"><img alt="vue" src="/images/sass.png" className="skillImg"/></div >
                    </div >
                    
                </div>
            </div>
          </div> 
        </React.Fragment>
    )
}

export default Skills

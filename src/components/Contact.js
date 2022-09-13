import React, { Component } from 'react'

export class Contact extends Component {
    state = {
        name: '',
        email:'',
        message:''
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {name, email, message} = this.state;
        
        this.setState({
            email:'',
            message:'',
            name:''
        });
        e.preventDefault();
        // window.open(`https://wa.me/+2348133355944?text=Hello John, my name is ${this.state.name}. ${message}. My email is ${email}. Thanks`, '_blank')
        window.open(`mailto:marketgeek01@gmail.com?Subject=New Contact from Portfolio&body=Hello John, my name is ${this.state.name}. ${message}. My email is ${email}. Thanks`, '_blank')
    }

    render() {
        return (
            <div className="contact" id="contact">
                <div>
                <h1 className="headText topFader" style={{textAlign: "center", padding:"30px 10px", color: "white"}}>CONTACT ME</h1>
                <div className="formDiv leftFader">
                    <form onSubmit={this.handleSubmit} className="contactForm">
                        <div className="input-icons">
                            
                            <i className="fa fa-user icon"></i>
                            <input placeholder="Your Name" onChange={this.handleName} type="text" name="name"/>
                        </div>
                        <div className="input-icons">
                            <i className="fa fa-envelope icon"></i>
                            <input placeholder="Your Email" onChange={this.handleEmail}  type="email" name="email"/>
                        </div>
                        <div className="input-icons">
                            <i className="fa fa-edit icon"></i>
                            <textarea placeholder="Your Message" onChange={this.handleMessage} ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="formBtn">Send Message</button>
                        </div>
                    </form>
                    <div className="otherContact rightFader">
                    <p style={{textAlign: "center", color:"#eee"}} className="body">You can also reach me on several social media platforms. Select your best platform, and I'm right there!</p>
                        <div style={{textAlign: "center"}} >
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="mailto:samuelalalade@hotmail.com" title="Email"><i className="fa fa-envelope"></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://github.com/johna" title="Github"><i className="fab fa-github "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://facebook.com/alalade.johnadebayo" title="CodePen"><i className="fab fa-codepen "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://linkedin.com/alalade-john" title="LinkedIn"><i className="fab fa-linkedin "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://twitter.com/johna" title="Twitter"><i className="fab fa-twitter "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://wa.me/+2348133355944" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}

export default Contact

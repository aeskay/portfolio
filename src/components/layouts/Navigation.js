import React from 'react'
import { navMiniItems, navMajorItems } from "../../datalist"
import Icon from '@material-ui/core/Icon';
import $ from 'jquery';


function Navigation() {
   
    const showSideBar = () => {
        
        document.querySelector('.fixedMiniSide').classList.add('hidden');
        document.querySelector('.fixedMajorSide').classList.remove('hidden');
        document.querySelector('.fixedMajorSide').classList.add('showing');
        document.querySelector('.closeIcon').classList.add('activeClose');
        
    }

    const hideSideBar = () => {
        
        document.querySelector('.fixedMiniSide').classList.remove('hidden');
        document.querySelector('.fixedMajorSide').classList.add('hidden')
        document.querySelector('.fixedMajorSide').classList.remove('showing');
        document.querySelector('.closeIcon').classList.remove('activeClose');
    }

    $(".navMajorlink").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration:  $($(this).attr("href")).offset().top / 2,
            easing: "swing"
        });
        return false;
    });

    return (
        <div>
            <div className="fixedMiniSide" onMouseEnter={showSideBar}>
                <div>
                    <Icon className="fa fa-bars" fontSize="small" />
                </div>
                <div className="fixedMiniNav">
                    {navMiniItems.map(item => {
                        return <li key={item.title} className="navMiniItem">{item.title}</li>
                    })} 
                </div>
                <div></div>
            </div>
            <div className="fixedMajorSide hidden" onMouseLeave={hideSideBar}>
                <div className="logoDiv">    
                    <span className="logo-text-mini"><span className="logo-text-mini-span1">SAMUEL</span> <span className="logo-text-mini-span2">A.</span></span>
                    <span onClick={hideSideBar} className="closeIcon">X</span>
                </div>
                <div className="fixedMiniNav">
                    {navMajorItems.map(item => {
                        return <li key={item.title} className="navMajorItem"><a className="navMajorlink" href={`#${item.link}`}>{item.title}</a></li>
                    })} 
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Navigation

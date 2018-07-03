import React, { Component } from 'react'

const ClickBaitBuilder = (props) => {
    // constructor(props){
    //     super(props);
    // }
    
        return(
            <div className="small-6 medium-3 columns other-article">
            <a href="#">
              {props.advert.link}
              <p>{props.advert.title}</p>
            </a>
            </div>
        )
    
}

export default ClickBaitBuilder
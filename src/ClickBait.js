import React from 'react'
//import ClickBaitBuilder from './ClickBaitBuilder'
import ReactDOM from 'react-dom'


const ClickBaitBuilder = (props) => {
    // constructor(props){
    //     super(props);
    // }
    
        return(
            <div className="small-6 medium-3 columns other-article">
            <a href="#">
              {props.ad.link}
              <p>{props.ad.title}</p>
            </a>
            </div>
        )
}


class ClickBait extends React.Component {

    constructor(){
        super()
        this.state = {
            list: [
            {title: "Single Orcs in Indianapolis", link: <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt= "orc"/>},
            {title: "You won't believe what's under this mountain", link: <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain"/>},
            {title: "Mine 20% more gold with One Weird Trick", link: <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold"/>},
            {title: "Surprise for Indiana Hobbits born before 1999", link: <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit"/>}
            ]
        }
    }
    render(){
        return(
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
            
                {this.state.list.map(advert => <ClickBaitBuilder ad={advert}/>)}
                
            </div>
        )
    }
}
ReactDOM.render(
    <ClickBait />,
    document.querySelector('#root')
)

export default ClickBait
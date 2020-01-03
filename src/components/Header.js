import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/wallpaper.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi I am Gunki Pari</strong><br />and this is our portfolio<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

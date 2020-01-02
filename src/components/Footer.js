import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/RavalPrajval" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/PrajvalRaval" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:dsckitrc@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Prajval Raval</li><li>Design: <a href="https://dsckitrc.tech">DSC KITRC</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

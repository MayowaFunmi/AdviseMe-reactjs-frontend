import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="bars" onClick={this.props.onBarClick}></a>
                        <a className="navbar-brand" href="#">
                            Welcome To AdviseMe Counselling Forum
                        </a>
                    </div>
                </div>        
            </nav>
        )
    }
}

export default Navbar

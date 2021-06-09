import React, { Component } from 'react'
import GoogleFontLoader from "react-google-font-loader";
import HomeComponent from './HomeComponent'
import Navbar from './Navbar'
import Overlay from './Overlay'
import Sidebar from './Sidebar'
import 'adminbsb-materialdesign/css/themes/all-themes.css'
import sideBarItem from './sideBarItem';

class Home extends Component {

    state = {
        bodyClass: 'theme-red ls-closed',
        displayOverlay: "none",
        width: window.screen.width,
    };
    onBarClick = () => {
        if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
            this.setState({ bodyClass: "theme-red ls-closed" });
            this.setState({ displayOverlay: "none" });
        } else if (this.state.bodyClass == "theme-red ls-closed") {
            this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
            this.setState({ displayOverlay: "block" });
        }
    }

    onscreensize = () => {
        this.setState({
            width: window.screen.width
        })
        console.log(window.screen.width);
    }

    componentWillMount() {
        window.addEventListener('resize', this.onscreensize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onscreensize);
    }

    render() {
        console.log(this.props)

        if (this.state.width > 1150) {
            document.getElementById('root').className = 'theme-red';
        } else {
            document.getElementById('root').className = this.state.bodyClass;
        }

        var Page = this.props.page;
        return (
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, 700],
                        }
                    ]}
                    subsets={["latin", "cyrillic-ext"]}
                />
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Material+Icons'
                        }
                    ]}
                />
                <Overlay display={this.state.displayOverlay} />
                <Navbar onBarClick={this.onBarClick} />
                <Sidebar activepage={this.props.activepage} />
                <Page {...this.props}/> {/* show whichever component is passed in the index.js router */}
            </React.Fragment>
        )
    }
}

export default Home

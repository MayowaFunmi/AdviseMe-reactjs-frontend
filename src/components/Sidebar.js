import React, { Component } from 'react'
import usericon from 'adminbsb-materialdesign/images/user.png'
import Config from '../utils/Config';
import { Link } from "react-router-dom";
import ApiHandler from '../utils/apiHandler';
import AuthHandler from '../utils/AuthHandler';

class Sidebar extends Component {

    state = {
        defaultClass: "btn-group user-helper-dropdown",
        all_users: [],
        login_status: '',
        staff_status: false,
        username: '',
        email:'',
    }

    constructor(props) {
        super(props);
        this.divref = React.createRef();
        this.divref2 = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.allUsers())
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleMouseClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseClick, false)
    }

    handleMouseClick = (event) => {
        console.log('ok')
        if (event.target == this.divref.current || event.target === this.divref2.current) {
            console.log("Click Element");
            return;
        } else {
            this.setState({
                defaultClass: "btn-group user-helper-dropdown"
            })
        }
    }

    showLogoutMenu = () => {
        if (this.state.defaultClass == "btn-group user-helper-dropdown") {
            this.setState({
                defaultClass: "btn-group user-helper-dropdown open"
            })
        } else {
            this.setState({
                defaultClass: "btn-group user-helper-dropdown"
            })
        }
    }

    async allUsers() {
        var users = new ApiHandler();
        var response = await users.fetchAllUsers();
        this.setState({ all_users: response.data });
        console.log(this.state.all_users)
        var username = AuthHandler.getUsername();

        {this.state.all_users.map((user) => {
            //console.log(user.username)
            if (user.username == username) {
                //console.log(user.status)
                var user_status = user.status;
                //console.log(user_status)
                ///console.log(user.is_superuser)
                this.setState({ login_status: user_status })
                this.setState({ staff_status: user.is_superuser })
                this.setState({ username: user.username })
                this.setState({ email: user.email })

                console.log(this.state.staff_status)
                //console.log(this.state.login_status)
                return user_status;
            }
        })}
        return response
    }

    render() {
        var my_status = this.state.login_status;
        var superuser = this.state.staff_status;
        console.log(superuser)
        if (my_status == "Student") {
            return (
                <section>
                    <aside id="leftsidebar" className="sidebar">
                        <div className="user-info">
                            <div className="image">
                                <img src={usericon} width="48" height="48" alt="User" />
                            </div>
                            <div className="info-container">
                                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.username}</div>
                                <div className="email">{this.state.email}</div>
                                <div className={this.state.defaultClass}>
                                    <i 
                                        className="material-icons" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="true"
                                        onClick={this.showLogoutMenu}
                                        ref={this.divref}
                                    >
                                        keyboard_arrow_down
                                    </i>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <Link to={Config.logoutPageUrl}
                                                className=" waves-effect waves-block"
                                                ref={this.divref2}
                                            >
                                                <i className="material-icons">input</i>Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div className="menu">
                            <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden"}}>
                                <ul className="list" style={{overflow: "hidden", width: "auto"}}>
                                    {Config.sidebarItemStudent.map(
                                        (item) => <li key={item.index} className={item.index == this.props.activepage ? 'active' : ""}>
                                            <Link to={item.url} className="toggled waves-effect waves-block">
                                                <i className="material-icons">{item.icons}</i>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                <div className="slimScrollBar" style={{background: "rgba(0, 0, 0, 0.5)", width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "block", borderRadius: "0px", zIndex: "99", right: "1px", height: "30px"}}></div>
                                <div className="slimScrollRail" style={{width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px"}}></div>
                            </div>
                        </div>
                
                        <div className="legal">
                            <div className="copyright">
                                © 2016 - 2017 <a href="#">AdviseMe Project</a>.
                            </div>
                            <div className="version">
                                <b>Version: </b> 1.0
                            </div>
                        </div>
                    </aside>
            
                </section> 
            )
        } else if (my_status == "Course Adviser") {
            return (
                <section>
                    <aside id="leftsidebar" className="sidebar">
                        <div className="user-info">
                            <div className="image">
                                <img src={usericon} width="48" height="48" alt="User" />
                            </div>
                            <div className="info-container">
                                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.username}</div>
                                <div className="email">{this.state.email}</div>
                                <div className={this.state.defaultClass}>
                                    <i 
                                        className="material-icons" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="true"
                                        onClick={this.showLogoutMenu}
                                        ref={this.divref}
                                    >
                                        keyboard_arrow_down
                                    </i>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <Link to={Config.logoutPageUrl}
                                                className=" waves-effect waves-block"
                                                ref={this.divref2}
                                            >
                                                <i className="material-icons">input</i>Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div className="menu">
                            <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden"}}>
                                <ul className="list" style={{overflow: "hidden", width: "auto"}}>
                                    {Config.sidebarItemCouncillor.map(
                                        (item) => <li key={item.index} className={item.index == this.props.activepage ? 'active' : ""}>
                                            <Link to={item.url} className="toggled waves-effect waves-block">
                                                <i className="material-icons">{item.icons}</i>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                <div className="slimScrollBar" style={{background: "rgba(0, 0, 0, 0.5)", width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "block", borderRadius: "0px", zIndex: "99", right: "1px", height: "30px"}}></div>
                                <div className="slimScrollRail" style={{width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px"}}></div>
                            </div>
                        </div>
                
                        <div className="legal">
                            <div className="copyright">
                                © 2016 - 2017 <a href="#">AdminBSB - Material Design</a>.
                            </div>
                            <div className="version">
                                <b>Version: </b> 1.0.5
                            </div>
                        </div>
                    </aside>
            
                </section> 
            )
        } else if (superuser || my_status == "('student', 'student')") {
            return (
                <section>
                    <aside id="leftsidebar" className="sidebar">
                        <div className="user-info">
                            <div className="image">
                                <img src={usericon} width="48" height="48" alt="User" />
                            </div>
                            <div className="info-container">
                                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.username}</div>
                                <div className="email">{this.state.email}</div>
                                <div className={this.state.defaultClass}>
                                    <i 
                                        className="material-icons" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="true"
                                        onClick={this.showLogoutMenu}
                                        ref={this.divref}
                                    >
                                        keyboard_arrow_down
                                    </i>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <Link to={Config.logoutPageUrl}
                                                className=" waves-effect waves-block"
                                                ref={this.divref2}
                                            >
                                                <i className="material-icons">input</i>Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div className="menu">
                            <div className="slimScrollDiv" style={{position: "relative", overflow: "hidden"}}>
                                <ul className="list" style={{overflow: "hidden", width: "auto"}}>
                                    {Config.sidebarItemAdmin.map(
                                        (item) => <li key={item.index} className={item.index == this.props.activepage ? 'active' : ""}>
                                            <Link to={item.url} className="toggled waves-effect waves-block">
                                                <i className="material-icons">{item.icons}</i>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                <div className="slimScrollBar" style={{background: "rgba(0, 0, 0, 0.5)", width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "block", borderRadius: "0px", zIndex: "99", right: "1px", height: "30px"}}></div>
                                <div className="slimScrollRail" style={{width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px"}}></div>
                            </div>
                        </div>
                
                        <div className="legal">
                            <div className="copyright">
                                © 2016 - 2017 <a href="#">AdminBSB - Material Design</a>.
                            </div>
                            <div className="version">
                                <b>Version: </b> 1.0.5
                            </div>
                        </div>
                    </aside>
            
                </section> 
            )
        } else {
            return ("")
        }
        
    }
}

export default Sidebar

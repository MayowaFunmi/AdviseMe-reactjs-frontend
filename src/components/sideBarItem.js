import React from 'react'
import { Link } from 'react-router-dom'
import Config from '../utils/Config'

const sideBarItem = (props) => {
    return (
        <div>
            {Config.sidebarItem.map(
                (item) => <li key={item.index} className={item.index == this.props.activepage ? 'active' : ""}>
                    <Link to={item.url} className="toggled waves-effect waves-block">
                        <i className="material-icons">{item.icons}</i>
                            <span>{item.title}</span>
                            </Link>
                        </li>
            )}
        </div>
    )
}

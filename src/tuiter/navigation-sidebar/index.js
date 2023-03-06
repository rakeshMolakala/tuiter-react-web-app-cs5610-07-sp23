import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item" href={"#com"}>Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href={"#com"}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href={"#com"}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href={"#com"}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href={"#com"}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href={"#com"}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href={"#com"}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
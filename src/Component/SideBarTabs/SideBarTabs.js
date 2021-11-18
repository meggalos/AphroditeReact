import React from 'react';
import "./SideBarTabs.css"

const SideBarTabs = ({ nameOfTab }) => {
    return (
        <p className="sidebar-tabs">
            {nameOfTab}
        </p>
    )
}

export default SideBarTabs;
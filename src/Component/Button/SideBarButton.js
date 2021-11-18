import React from 'react';
import './SideBarButton.css';

const SideBarButton = ({ nameOfButton }) => {
    return (
        <p className="sidebar-button">
            {nameOfButton}
        </p>
    )
}

export default SideBarButton
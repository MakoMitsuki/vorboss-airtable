import React from 'react';
import "./Header.scss";
import PetsIcon from '@mui/icons-material/Pets';

const Header = ({ title }) => {
    return (
        <div class="header">
            <h1><PetsIcon/> {title}</h1>
        </div>
    )
}

export default Header;
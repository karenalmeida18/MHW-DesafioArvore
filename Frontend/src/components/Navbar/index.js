import React from 'react';
import { Link } from 'react-router-dom';

import { FiHome } from "react-icons/fi";

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to='/home'>
                    <FiHome />
                </Link>
            </li>
        </ul>
    );
}


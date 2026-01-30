import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'

const Navbar = () => {
        return (
            <div className="navbar">
                <img src={logo_light} alt="" className={"logo"}/>
                <ul>
                    <li>Học viên</li>
                    <li>Lịch dạy</li>
                    <li>Đăng nhập/ tài khoản</li>
                </ul>

                <div className={"search-box"}>
                    <input type="text" placeholder="Tìm kiếm..."/>
                    <img src={search_icon_light} alt=""/>
                </div>

                <img src={toogle_light} alt="" className={"toogle-icon"}/>


            </div>
        );
};

export default Navbar;
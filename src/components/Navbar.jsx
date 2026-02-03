import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'
import { Avatar } from 'antd';
import { useState } from 'react';



import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme, Row, Col} from 'antd';

const Navbar = ({theme, setTheme}) => {

        const [collapsed, setCollapsed] = useState(false);

        const toggle_mode = () =>{
            theme == 'light' ? setTheme('dark') : setTheme('light');
        }


        return (
            <div className="navbar">
                <img src={theme == 'light' ? logo_light : logo_dark} alt="" className={"logo"}/>
                <ul>
                    <li>Học viên</li>
                    <li>Lịch dạy</li>
                    <li>Đăng nhập/ tài khoản</li>
                </ul>

                {/*<div className={"search-box"}>*/}
                {/*    <input type="text" placeholder="Tìm kiếm..."/>*/}
                {/*    <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>*/}
                {/*</div>*/}

                <img onClick={() =>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className={"toogle-icon"}/>

                <div>
                    <Row>


                        <Col md={6}>
                            <div className={"user-info"}>
                                <Avatar size="default" icon={<UserOutlined/>}></Avatar><h3>Vũ Văn Quyến</h3>
                            </div>
                        </Col>
                    </Row>
                </div>



            </div>
        );
};

export default Navbar;
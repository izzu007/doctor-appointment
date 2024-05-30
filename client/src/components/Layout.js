import React from 'react'
import '../styles/LayoutStyle.css';
import { userMenu } from '../data/MenuData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        message.success = ('Logout Successfully')
        navigate('/login');
    }

    return(
        <>
            <div className='main'>
                <div className='layout'>
                    <div className='sidebar'>
                        <div className='logo'> <h6>Doctor Appointment APP</h6>
                        <hr/>
                        </div>
                        <div className='menu'> 
                            { userMenu.map(menu => {
                                const isActive = location.pathname === menu.path;
                                return(
                                    <>
                                        <div className={`menu-item ${isActive && 'active'}`}>
                                            <i className={menu.icon}></i>
                                            <Link to={menu.path}>{menu.name}</Link>
                                        </div>
                                    </>
                                )
                            }) }
                            <div className="menu-item">
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <Link to="/login" onClick={handleLogout}>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='header'>Header</div>
                        <div className='body'>{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
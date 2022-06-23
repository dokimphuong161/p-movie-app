import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiRegistered } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';

import { MdClear, MdLanguage, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { VodiIcon } from '~/components/Icons';
import Menu from '~/components/Menu';

import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const HEADER_NAVBAR = [
    { display: 'Home', path: '/' },
    { display: 'Movie', path: '/movie' },
    { display: 'TV Shows', path: '/tv' },
    { display: 'Wishlists', path: '/wishlist' },
];

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <MdOutlineLogin />,
        title: 'Sign In',
        to: '/',
    },
    {
        icon: <BiRegistered />,
        title: 'Register',
    },
];

const userMenu = [
    {
        icon: <CgProfile />,
        title: 'View Profile',
    },

    ...MENU_ITEMS,
    {
        icon: <MdOutlineLogout />,
        title: 'Log out',
        separate: true,
    },
];

console.log(userMenu);

const Header = () => {
    //State for click on menu icon
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    //Get pathname to set Active for Navbar
    const { pathname } = useLocation();
    const active = HEADER_NAVBAR.findIndex((e) => e.path.split('/')[1] === pathname.split('/')[1]);

    //Handle on menu item
    const handleMenuSelect = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('row', 'inner')}>
                    <div className={cx('nav')}>
                        <div onClick={handleClick} className={cx('nav-icon', 'hide-on-pc')}>
                            {clicked ? <MdClear /> : <AiOutlineMenu />}
                        </div>
                        <div className={cx('logo')}>
                            <VodiIcon />
                        </div>
                        <div className={cx('navbar', 'hide-on-mobile-tablet')}>
                            <ul className={cx('navbar-list')}>
                                {HEADER_NAVBAR.map((item, i) => (
                                    <li key={i} className={i === active ? cx('active') : ''}>
                                        <Link to={item.path} className={cx('navbar-link')}>
                                            {item.display}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <Search />

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuSelect}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="dsadasaf"
                                    // fallBack="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            ) : (
                                <div className={cx('login')}>
                                    <button className={cx('login-btn')}>
                                        <FaUserCircle />
                                    </button>
                                </div>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

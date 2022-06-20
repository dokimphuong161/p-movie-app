import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearchAlt, BiRegistered } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { ImSpinner } from 'react-icons/im';
import { MdClear, MdLanguage, MdOutlineLogin } from 'react-icons/md';

import { Link, useLocation } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResult from '~/components/SearchResult';
import Menu from '~/components/Menu';

const cx = classNames.bind(styles);

const HEADER_NAVBAR = [
    { display: 'Home', path: '/' },
    { display: 'Movie', path: '/movie' },
    { display: 'TV Shows', path: '/tv' },
    { display: 'Wishlists', path: '/wishlist' },
];

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
    },
    {
        icon: <MdOutlineLogin />,
        title: 'Sign In',
    },
    {
        icon: <BiRegistered />,
        title: 'Register',
    },
];

const Header = () => {
    //State for click on menu icon
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    console.log(clicked);
    //State for Search
    const [searchResult, setSearchResult] = useState([]);

    //Get pathname to set Active for Navbar
    const { pathname } = useLocation();
    const active = HEADER_NAVBAR.findIndex((e) => e.path.split('/')[1] === pathname.split('/')[1]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Set seach on mobile
    const searchRef = useRef(null);
    const handleShowSearchMobile = () => {
        searchRef.current.classList.toggle(cx('show-search'));
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="40">
                                <linearGradient id="vodiLogo" x1="0%" x2="100%" y1="0%" y2="0%">
                                    <stop offset="0" stopColor="#2A4999"></stop>
                                    <stop offset="1" stopColor="#2C9CD4"></stop>
                                </linearGradient>
                                <g className="vodi-gr">
                                    <path
                                        d="M72.8 12.7V8.3 5.5C73 3 74.7 1.4 77 1.4c2.3 0 4.1 1.8 4.2 4.2v19c0 4.7-1.7 8.8-5.6 11.5-4.5 3.1-9.3 3.5-14.1.9-4.7-2.5-7.1-6.7-7-12.1.1-7.8 6.3-13.6 14.1-13.2.7 0 1.4.2 2.1.3.6.2 1.3.4 2.1.7zm-5 7.1c-2.9 0-5.2 2.2-5.2 5 0 2.9 2.3 5.3 5.2 5.3 2.8 0 5.2-2.4 5.2-5.2 0-2.7-2.4-5.1-5.2-5.1zM39.9 38.6c-7.3 0-13.3-6.1-13.3-13.5 0-7.5 5.9-13.4 13.4-13.4s13.4 6 13.4 13.5c0 7.4-6 13.4-13.5 13.4zm0-8c3.2 0 5.6-2.3 5.6-5.6 0-3.2-2.3-5.5-5.5-5.5s-5.6 2.2-5.6 5.4c0 3.3 2.3 5.7 5.5 5.7zM14.6 27c.6-1.4 1.1-2.6 1.6-3.8 1.2-2.9 2.5-5.8 3.7-8.8.7-1.7 2-2.8 4-2.7 3 0 4.9 2.6 3.8 5.4-.5 1.3-1.2 2.6-1.8 3.9-2.4 5-4.9 10-7.3 15-.8 1.6-2 2.6-3.9 2.6-2 0-3.3-.8-4.2-2.6-2.7-5.6-5.3-11.1-8-16.7-.3-.7-.6-1.3-.9-2-.8-1.8-.3-3.7 1.1-4.8 1.5-1.2 4-1.3 5.3 0 .7.6 1.2 1.5 1.6 2.3 1.7 4 3.3 7.9 5 12.2zm76.3-1.9v9.4c0 1.9-1.2 3.4-2.9 4-1.7.5-3.5 0-4.5-1.6-.5-.8-.8-1.8-.8-2.6-.1-6.1-.1-11.3 0-17.5 0-2.2 1.5-3.9 3.5-4.2 2.1-.3 4.1.9 4.7 2.9.1.5.2 1.1.2 1.6-.2 2.9-.2 5-.2 8zm-.7-20.4L86 2.3c-1.3-.8-3 .2-3 1.7v4.8c0 1.5 1.7 2.5 3 1.7l4.2-2.4c1.3-.7 1.3-2.6 0-3.4z"
                                        className="vodi-svg0"
                                    ></path>
                                </g>
                            </svg>
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
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <SearchResult />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div ref={searchRef} className={cx('search-wrapper')}>
                                <div className={cx('search')}>
                                    <input placeholder="Search..." spellCheck />
                                    <button className={cx('clear')}>
                                        <MdClear />
                                    </button>
                                    <ImSpinner className={cx('loading')} />
                                    <button className={cx('search-btn')}>
                                        <BiSearchAlt />
                                    </button>
                                </div>
                            </div>
                        </Tippy>
                        <div className={cx('search-mobile', 'hide-on-pc')}>
                            <button className={cx('search-mobile-btn')} onClick={handleShowSearchMobile}>
                                <BiSearchAlt />
                            </button>
                        </div>

                        <Menu items={MENU_ITEMS}>
                            <div className={cx('login')}>
                                <button className={cx('login-btn')}>
                                    <FaUserCircle />
                                </button>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

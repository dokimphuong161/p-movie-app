import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const headerNavbar = [
    { display: 'Home', path: '/' },
    { display: 'Movie', path: '/movie' },
    { display: 'TV Shows', path: '/tv' },
];

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('menu')}>
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
                    <div className={cx('navbar')}>
                        <ul className={cx('navbar-list')}>
                            {headerNavbar.map((item, i) => (
                                <Link to={item.path} className={cx('navbar-link')}>
                                    {item.display}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('search')}>
                        <input placeholder="Enter your keyword..." />
                        <button className={cx('clear')}></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

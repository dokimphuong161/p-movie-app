import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { VodiIcon } from '~/components/Icons';
import bg from '~/assets/images/footer-bg.jpg';

import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { GrGooglePlus, GrVimeo } from 'react-icons/gr';

const cx = classNames.bind(styles);

const SOCIAL_ICON = [
    {
        social_title: 'Facebook',
        icon: <RiFacebookFill />,
    },
    {
        social_title: 'Twitter',
        icon: <RiTwitterFill />,
    },
    {
        social_title: 'Google+',
        icon: <GrGooglePlus />,
    },
    {
        social_title: 'Vimeo',
        icon: <GrVimeo />,
    },
];

const MOVIE_GENRE = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Drama',
    'Fantacy',
    'Horror',
    'Mystrey',
    'Romance',
];

const TV_GENRE = [
    'Valentine Day',
    'Underrated Comedies',
    'Underrated Comedies',
    'Scary TV Series',
    'Best 2018 Documentaries',
    'Classic Shows',
    'Big TV Premieres',
    'Reality TV Shows',
    'Original Shows',
    'Suprise of the Year Shows',
];

const SUPPORT = ['My Account', 'FAQ', 'Watch on TV', 'Help Center', 'Contact'];

const Footer = () => {
    return (
        <div className={cx('wrapper')} style={{ background: `url(${bg})` }}>
            <div className={cx('content')}>
                <div className={cx('grid wide', 'footer-top')}>
                    <div className={cx('row', 'footer-top-bar')}>
                        <div className={cx('col l-2')}>
                            <div className={cx('logo')}>
                                <VodiIcon className={cx('logo-icon')} />
                            </div>
                        </div>
                        <div className={cx('col l-10')}>
                            <ul className={cx('social')}>
                                {SOCIAL_ICON.map((s, i) => (
                                    <li className={cx('social-link')} key={i}>
                                        <span>{s.icon}</span>
                                        {s.social_title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('row', 'footer-widget')}>
                        <div className={cx('col l-5')}>
                            <p className={cx('widget-title')}>Movie Categories</p>
                            <ul className={cx('row')}>
                                <div className={cx('col l-6')}>
                                    {MOVIE_GENRE.map((e, i) => (
                                        <li key={i} className={cx('widget-link')}>
                                            <a href="#">{e}</a>
                                        </li>
                                    )).slice(0, 5)}
                                </div>
                                <div className={cx('col l-6')}>
                                    {MOVIE_GENRE.map((e, i) => (
                                        <li key={i} className={cx('widget-link')}>
                                            <a href="#">{e}</a>
                                        </li>
                                    )).slice(5, 10)}
                                </div>
                            </ul>
                        </div>
                        <div className={cx('col l-5')}>
                            <p className={cx('widget-title')}>TV Series</p>
                            <ul className={cx('row')}>
                                <div className={cx('col l-6')}>
                                    {TV_GENRE.map((e, i) => (
                                        <li key={i} className={cx('widget-link')}>
                                            <a href="#">{e}</a>
                                        </li>
                                    )).slice(0, 5)}
                                </div>
                                <div className={cx('col l-6')}>
                                    {TV_GENRE.map((e, i) => (
                                        <li key={i} className={cx('widget-link')}>
                                            <a href="#">{e}</a>
                                        </li>
                                    )).slice(5, 9)}
                                </div>
                            </ul>
                        </div>
                        <div className={cx('col l-2', 'last-col')}>
                            <div className={cx('col l-12')}>
                                <p className={cx('widget-title')}>Support</p>
                                <ul className={cx('row')}>
                                    <div className={cx('col c-12')}>
                                        {SUPPORT.map((e, i) => (
                                            <li key={i} className={cx('widget-link')}>
                                                <a href="#">{e}</a>
                                            </li>
                                        )).slice(0, 5)}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <p className={cx('copy-right')}>Copyright © 2022, pMovie. All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

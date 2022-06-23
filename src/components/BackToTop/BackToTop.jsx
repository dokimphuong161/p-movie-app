import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';
import { TiArrowUpThick } from 'react-icons/ti';

const cx = classNames.bind(styles);
const BackToTop = () => {
    const [isVisible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const srollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        console.log('Scroll');

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={cx('back-to-top')}>
            <Button top className={cx(`${isVisible ? 'visible' : 'invisible'}`)} onClick={srollToTop}>
                <TiArrowUpThick />
            </Button>
        </div>
    );
};

export default BackToTop;

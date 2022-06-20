import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Wrapper = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

Wrapper.propTypes = {};

export default Wrapper;

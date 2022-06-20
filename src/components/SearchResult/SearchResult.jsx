import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

import { BiSearchAlt } from 'react-icons/bi';

const cx = classNames.bind(styles);

const SearchResult = (props) => {
    return (
        <>
            <h4 className={cx('search-title')}>Results</h4>
            <div className={cx('search-suggest')}>
                <ul className={cx('suggest-list')}>
                    <li className={cx('suggest-item')}>
                        <BiSearchAlt className={cx('suggest-icon')} />
                        <p className={cx('suggest-tag')}>Áo khoác chống nắng</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

SearchResult.propTypes = {};

export default SearchResult;

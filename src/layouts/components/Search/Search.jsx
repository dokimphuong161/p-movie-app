import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useState, useRef } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
import { ImSpinner } from 'react-icons/im';
import { MdClear } from 'react-icons/md';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResult from '~/components/SearchResult';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    //Handle for click on button clear on Input
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    //Handle for click outside to hide Search Result

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <>
            <Tippy
                interactive
                // visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <SearchResult />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search-wrapper')}>
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search..."
                            spellCheck
                            onFocus={() => setShowResult(true)}
                        />
                        {searchValue && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <MdClear />
                            </button>
                        )}

                        {/* <ImSpinner className={cx('loading')} /> */}
                        <button className={cx('search-btn')}>
                            <BiSearchAlt />
                        </button>
                    </div>
                </div>
            </Tippy>
            <div className={cx('search-mobile', 'hide-on-pc')}>
                <button className={cx('search-mobile-btn')}>
                    <BiSearchAlt />
                </button>
            </div>
        </>
    );
};

export default Search;

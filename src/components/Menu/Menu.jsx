import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items }) => {
    const renderItem = () => {
        return items.map((item, i) => <MenuItem key={i} data={item} />);
    };

    console.log(renderItem());

    return (
        <div>
            <Tippy
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>{renderItem()}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;

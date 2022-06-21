import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Button = ({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    disable = false,
    blur = false,
    circle = false,
    text = false,
    leftIcon,
    rightIcon,
    className,
    ...diffProps
}) => {
    const props = {
        onClick,
        ...diffProps,
    };
    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //Remove event listener when button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        disable,
        blur,
        circle,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {};

export default Button;

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { CgCloseR } from 'react-icons/cg';
import styles from './Modal.module.scss';

import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

//Modal
const Modal = (props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    return (
        <div id={props.id} className={cx('modal', `${active ? 'modal-active' : ''}`)}>
            {props.children}
        </div>
    );
};

//Modal Content
export const ModalContent = (props) => {
    const contentRef = useRef();
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('modal-active');
        if (props.onClose) props.onClose();
    };
    return (
        <div ref={contentRef} className="modal-content">
            {props.children}
            <div className={cx('modal-content-close')} onClick={closeModal}>
                <CgCloseR />
            </div>
        </div>
    );
};
Modal.propTypes = {};
ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default Modal;

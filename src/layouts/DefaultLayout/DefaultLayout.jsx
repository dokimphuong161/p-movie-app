import Footer from '../components/Footer';
import Header from '../components/Header';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import BackToTop from '~/components/BackToTop';

const DefaultLayout = (props) => {
    const cx = className.bind(styles);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('content')}>{props.children}</div>
                <Footer />
                <BackToTop />
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;

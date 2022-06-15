import Footer from '../components/Footer';
import Header from '../components/Header';

const DefaultLayout = (props) => {
    return (
        <div>
            <Header />
            <div className="content">{props.children}</div>
            <Footer />
        </div>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;

import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import tmdbApi, { movieType } from '~/api/tmdbApi';
import Modal from '~/components/Modal/Modal';
import styles from './HeroSlide.module.scss';
import HeroSlideItem from './HeroSlideItem';

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ModalContent } from '~/components/Modal/Modal';
const cx = classNames.bind(styles);

const HeroSlide = () => {
    SwiperCore.use([Autoplay, Navigation]);

    //State Component: Fetch movie list from API
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const params = { page: 1 };
        const getMovies = async () => {
            const response = await tmdbApi.getMoviesList(movieType.popular, { params });
            setMovies(response.results);
        };
        getMovies();
    }, []);

    //Render UI
    const renderHeroSlide = movies
        .map((movie, index) => {
            return (
                <SwiperSlide key={index}>
                    {({ isActive }) => <HeroSlideItem item={movie} className={`${isActive ? 'active' : ''}`} />}
                </SwiperSlide>
            );
        })
        .slice(0, 6);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={true}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {renderHeroSlide}
            </Swiper>
            {movies.map((item, i) => <TrailerModal key={i} item={item} />).slice(0, 6)}
        </div>
    );
};

const TrailerModal = (props) => {
    const item = props.item;
    const iframeRef = useRef();
    const onClose = () => iframeRef.current.setAttribute('src', '');
    return (
        <Modal active={false} id={`modal-${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    );
};
HeroSlide.propTypes = {};

export default HeroSlide;

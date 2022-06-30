import classNames from 'classnames/bind';
import styles from './HeroSlide.module.scss';

import moment from 'moment';
import apiConfig from '~/api/apiConfig';
import Button from '~/components/Button';
import { ImdbIcon } from '~/components/Icons';

import tmdbApi, { category } from '~/api/tmdbApi';

const cx = classNames.bind(styles);

const HeroSlideItem = (props) => {
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    //Format date for release_date
    const formatDate = (release_date) => {
        const date = new Date(release_date);
        return moment(date).format('MM-DD-YYYY');
    };

    const setActionModal = async () => {
        const modal = document.querySelector(`#modal-${item.id}`);
        const videos = await tmdbApi.getVideo(category.movie, item.id);
        const modalContent = modal.querySelector('.modal-content > iframe');
        const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
        console.log(modalContent);
        if (videos.results.length > 0) {
            modal.querySelector('.modal-content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal-content').innerHTML = 'No trailer';
        }
        modal.classList.toggle('modal-active');
    };

    return (
        <div className={cx('hero-slide-item')} style={{ backgroundImage: `url(${background})` }}>
            <div className={cx('grid wide')}>
                <div className={cx('hero-content')}>
                    <div className={cx('hero-info')}>
                        <h1 className={cx('title')}>{item.title}</h1>
                        <div className={cx('credits')}>
                            <p className={cx('release-date')}>{formatDate(item.release_date)}</p>
                            <div className={cx('rating')}>
                                <div className={cx('rating-icon')}>
                                    <ImdbIcon width={'40px'} height={'40px'} />
                                </div>
                                <span className={cx('rating-point')}>{item.vote_average}</span>
                            </div>
                        </div>
                        <p className={cx('overview')}>{item.overview}</p>

                        <div className={cx('hero-btns')}>
                            <Button primary>Watch Movie</Button>
                            <Button outline onClick={setActionModal}>
                                + Watch Trailer
                            </Button>
                        </div>
                    </div>
                    <div className={cx('hero-poster')}>
                        <img src={apiConfig.w500Image(item.poster_path)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSlideItem.propTypes = {};

export default HeroSlideItem;

import Button from '~/components/Button';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [liked, setliked] = useState(false);
    const [likeCount, setLikeCount] = useState(12);
    const [followed, setFollowed] = useState('Follow');
    const [buttonStyle, setButtonStyle] = useState(false);

    const handleButtonFollow = () => {
        setButtonStyle(!buttonStyle);
        setFollowed(followed === 'Follow' ? 'Following' : 'Follow');
    };
    const handleLike = () => {
        setliked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className={cx('home-container')}>
            <div className={cx('video-info')}>
                <div className={cx('author-info')}>
                    <img src={images.echxanh} alt="Author Avatar" className={cx('author-avatar')} />
                    <div className={cx('author-meta')}>
                        <div className={cx('author-details')}>
                            <h2 className={cx('author-name')}>Author Name</h2>
                            <span className={cx('author-username')}>@username</span>
                        </div>
                        <div className={cx('video-description')}>
                            <p>This is a sample video description.</p>
                        </div>
                        <div className={cx('video-music')}>
                            <span>🎵 Original Sound - Author Name</span>
                        </div>
                    </div>
                </div>
                <Button
                    primary={!buttonStyle} // khi true => primary
                    outline={buttonStyle}
                    className={cx('follow-button')}
                    onClick={handleButtonFollow}
                >
                    {followed}
                </Button>
            </div>
            <div className={cx('video-content')}>
                <div className={cx('video-wrapper')}>
                    <video src="demo.mp4" className={cx('video-element')} autoPlay loop />
                </div>
                <div className={cx('video-action')}>
                    <div className={cx('like-button', { liked })} onClick={handleLike}>
                        <FontAwesomeIcon icon={faHeart} className={cx('icon-action')} />
                    </div>
                    <span className={cx('data')}>{likeCount.toLocaleString()}</span>
                    <div className={cx('comment-button')}>
                        <FontAwesomeIcon icon={faComment} className={cx('icon-action')} />
                    </div>
                    <span className={cx('data')}>100K</span>
                    <div className={cx('share-button')}>
                        <FontAwesomeIcon icon={faShare} className={cx('icon-action')} />
                    </div>
                    <span className={cx('data')}>100K</span>
                </div>
            </div>
        </div>
    );
}

export default Home;

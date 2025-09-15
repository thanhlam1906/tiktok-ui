import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        // Giả lập gọi API
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear-icon')} />
                        </button>
                        <span className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />
                        </span>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>Actions</div>
            </div>
        </header>
    );
}
export default Header;

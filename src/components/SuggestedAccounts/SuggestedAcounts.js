import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useState } from 'react';
const cx = classNames.bind(style);
function SuggestedAccounts({ label, accounts = [] }) {
    const [showAll, setShowAll] = useState(false);
    const visibleAccounts = showAll ? accounts : accounts.slice(0, 6);
    const hasMore = accounts.length > 6;
    const handleToggle = () => {
        if (!hasMore) return;
        setShowAll((prev) => !prev);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {visibleAccounts.map((acc, index) => (
                <AccountItem key={acc.id ?? index} data={acc} />
            ))}

            {hasMore && (
                <p className={cx('more-btn')} onClick={handleToggle} role="button" tabIndex={0}>
                    {showAll ? 'See less' : 'See all'}
                </p>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;

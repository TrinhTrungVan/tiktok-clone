import React from 'react';
import { Link } from 'react-router-dom';

import './AccountItem.scss';

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className="account-item-wrapper">
            <img className="avatar" src={data.avatar} alt={data.full_name} />
            <div className="info">
                <p className="name">
                    <span>{data.full_name}</span>
                    {data.tick && <i className="blue-tick bx bxs-check-circle"></i>}
                </p>
                <span className="username">{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;

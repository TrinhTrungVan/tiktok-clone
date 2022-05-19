import React from 'react';
import { Link } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = (props) => {
    let Comp = 'div';

    if (props.to) {
        Comp = Link;
    }
    return (
        <Comp className="menu-item__wrapper" to={props.to}>
            <span className="icon">{props.icon}</span>
            {props.title}
        </Comp>
    );
};

export default MenuItem;

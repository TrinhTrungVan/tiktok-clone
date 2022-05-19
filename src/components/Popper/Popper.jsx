import React from 'react';

import './Popper.scss';

const Popper = (props) => {
    return <div className="popper__wrapper">{props.children}</div>;
};

export default Popper;

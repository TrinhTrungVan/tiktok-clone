import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = (props) => {
    let Btn = 'button';

    let classes = ['button-container', props.type, props.size].join(' ');

    if (props.disabled) {
        classes += 'disabled ';
    }

    if (props.rounded) {
        classes += 'rounded ';
    }

    if (props.to) {
        Btn = Link;
    } else if (props.href) {
        Btn = 'a';
    }

    return (
        <Btn className={classes} {...props}>
            {props.lefticon && <span className="icon">{props.lefticon}</span>}
            <span className="title">{props.children}</span>
            {props.righticon && <span className="icon">{props.righticon}</span>}
        </Btn>
    );
};

export default Button;

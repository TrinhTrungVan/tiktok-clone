import React from 'react';

import arrow from '~/assets/images/arrow.svg';

import './Note.scss';

const Note = (props) => {
    return (
        <div className="note__wrapper">
            {props.children}
            <div className="content">
                <img className="arrow" src={arrow} alt="" />
                {props.content}
            </div>
        </div>
    );
};

export default Note;

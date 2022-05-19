import React, { useRef } from 'react';

import MenuItem from '~/components/MenuItem/MenuItem';

import './LanguageChange.scss';

const LANGUAGES = [
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
    {
        code: 'en',
        title: 'English',
    },
    {
        code: 'vi',
        title: 'Tiếng Việt',
    },
];

const LanguageChange = () => {
    const hideLanguageChange = () => {
        document.querySelector('.language-change__wrapper').classList.remove('active');
        console.log(document.querySelector('.language-change__wrapper').classList);
    };

    return (
        <div className="language-change__wrapper">
            <div className="header">
                <span className="icon" onClick={hideLanguageChange}>
                    <i className="fa-solid fa-chevron-left"></i>
                </span>
                Language
            </div>
            {LANGUAGES.map((language, index) => (
                <MenuItem key={index} title={language.title} />
            ))}
        </div>
    );
};

export default LanguageChange;

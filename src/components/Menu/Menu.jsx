import React from 'react';
import Tippy from '@tippyjs/react/headless';

import Popper from '~/components/Popper/Popper';
import LanguageChange from '~/components/LanguageChange/LanguageChange';

import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';

const Menu = (props) => {
    const showLanguageChange = () => {
        document.querySelector('.language-change__wrapper').classList.add('active');
    };

    const hideLanguageChange = () => {
        document.querySelector('.language-change__wrapper').classList.remove('active');
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]} // [show-time, hide-time]
            placement="bottom-end"
            onHide={hideLanguageChange}
            render={(attrs) => (
                <div className="menu__content" tabIndex="-1">
                    <Popper>
                        {props.currentUser && (
                            <>
                                <MenuItem
                                    icon={<i className="fa-solid fa-user"></i>}
                                    title="View profile"
                                    to="/profile"
                                />
                                <MenuItem icon={<i className="fa-solid fa-coins"></i>} title="Get coins" to="/coin" />
                                <MenuItem icon={<i className="fa-solid fa-gear"></i>} title="Settings" to="/settings" />
                            </>
                        )}
                        <div className="language-change" onClick={showLanguageChange}>
                            <MenuItem icon={<i className="fa-solid fa-earth-americas"></i>} title="Language" />
                        </div>
                        <MenuItem
                            icon={<i className="fa-solid fa-circle-question"></i>}
                            title="Feedback and help"
                            to="/feedback"
                        />
                        <div className="shortcut__popup">
                            <MenuItem icon={<i className="fa-solid fa-keyboard"></i>} title="Keyboard and shortcuts" />
                        </div>
                        {/* <ShortCuts/> */}
                        <LanguageChange />

                        {props.currentUser && (
                            <div className="logout">
                                <MenuItem
                                    icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>}
                                    title="Log out"
                                />
                            </div>
                        )}
                    </Popper>
                </div>
            )}
        >
            {props.children}
        </Tippy>
    );
};

export default Menu;

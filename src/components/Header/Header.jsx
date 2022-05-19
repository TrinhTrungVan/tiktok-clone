import React from 'react';

import Button from '~/components/Button/Button';
import Search from '~/components/Search/Search';
import Menu from '~/components/Menu/Menu';
import Note from '~/components/Note/Note';
import Image from '~/components/Image/Image';

import logo from '~/assets/images/logo.svg';

import './Header.scss';

const Header = () => {
    const currentUser = true;

    return (
        <header className="header__wrapper">
            <div className="inner">
                <div className="logo">
                    <img src={logo} alt="Tiktok" />
                </div>

                <Search />

                <div className="actions">
                    {currentUser ? (
                        <>
                            <div className="btn">
                                <Note content="Upload video">
                                    <i className="bx bx-cloud-upload"></i>
                                </Note>
                            </div>
                            <div className="btn">
                                <Note content="Message">
                                    <i className="bx bx-send"></i>
                                </Note>
                            </div>
                            <div className="btn notification">
                                <Note content="Inbox">
                                    <i className="bx bx-message-alt-minus"></i>
                                </Note>
                                <div className="notification__count">19</div>
                            </div>
                            <Menu currentUser={currentUser}>
                                <div className="avatar">
                                    <Image
                                        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/277559755_1318004612027796_5217079919547255130_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=106&ccb=1-6&_nc_sid=7206a8&_nc_ohc=arvHhWx8KfcAX9edhC7&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8NMoZBF9Eb3HuBhH_stnxFwxElZA75TrUFEBUrOVhcdw&oe=627E6BC8"
                                        alt=""
                                    />
                                </div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button type="text">Upload</Button>
                            <Button type="primary">Log in</Button>
                            <Menu currentUser={currentUser}>
                                <button className="more-btn">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

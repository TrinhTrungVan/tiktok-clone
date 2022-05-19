import React, { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';

import Popper from '~/components/Popper/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';

// import custom hook
import useDebounce from '~/hooks/useDebounce';

import './Search.scss';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.data);
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                console.log('Error!');
                setLoading(false);
            });
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className="search-result" tabIndex="-1">
                    <Popper>
                        <h4 className="search-title">Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </Popper>
                </div>
            )}
        >
            <div className="search">
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button
                        className="clear"
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                            setSearchResult([]);
                        }}
                    >
                        <i className="bx bxs-x-circle"></i>
                    </button>
                )}

                {loading && <i className="loading bx bx-loader-alt"></i>}
                <button className="search-btn">
                    <i className="bx bx-search"></i>
                </button>
            </div>
        </Tippy>
    );
};

export default Search;

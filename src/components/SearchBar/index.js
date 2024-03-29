import React, { useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';

// Image
import searchIcon from '../../images/search-icon.svg';
//Styles 
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const Initial = useRef(true);

    useEffect(() => {
        if (Initial.current) {
            Initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search movie' 
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                    />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;
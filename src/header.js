import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Header({ children }) {
    const application = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    return (
        <main className="container">
            <header className="App-header">
                <img
                    src={'./Back.png'}
                    alt="back"
                />
                <span className="App-title">{application.title}</span>
                <img
                    src={'./search.png'}
                    alt="search"
                    onClick={() => dispatch({
                        type: 'SEARCH_CLICKED'
                    })}
                />
            </header>
            {children}
        </main>
    )
}
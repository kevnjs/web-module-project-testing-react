import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Show from './../Show';

const showsTest = [{
        name: "Strange Show",
        summary: "An overrated show",
        seasons: [{
            id: 0,
            name: 'season 1',
            episodes: []
        }, 
        {
            id: 1,
            name: 'season 2',
            episodes: []
        }]
}]


test('renders without errors', ()=> {
    render(<Show show={showsTest}/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>)
    const loading = screen.getByText("Fetching data...")
    expect(loading).toBeInTheDocument()
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show />)
});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});

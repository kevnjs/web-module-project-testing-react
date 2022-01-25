import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Show from './../Show';

export const showsTest = {
        name: "Strange Show",
        summary: "An overrated show",
        seasons: [
        {
            id: 0,
            name: 'season 1',
            episodes: []
        }, 
        {
            id: 1,
            name: 'season 2',
            episodes: []
        },
    ]
}


test('renders without errors', ()=> {
    render(<Show/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>)
    const loading = screen.getByText("Fetching data...")
    expect(loading).toBeInTheDocument()
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={showsTest} selectedSeason={"none"}/>)
    const seasonsNum = screen.getAllByTestId("season-option")
    expect(seasonsNum).toHaveLength(2)


});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()

    render(<Show show={showsTest} selectedSeason={"none"} handleSelect={handleSelect}/>)
    const dropdown = screen.getByLabelText('Select A Season')
    userEvent.selectOptions(dropdown, ['0'])
    expect(handleSelect).toBeCalled()
    
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={showsTest} selectedSeason={"none"}/>)
    const episode = screen.queryByTestId('episodes-container')
    expect(episode).not.toBeInTheDocument()

    rerender(<Show show={showsTest} selectedSeason={0}/>)
    const episode2 = screen.queryByTestId('episodes-container')
    expect(episode2).toBeInTheDocument()
});

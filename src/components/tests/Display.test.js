import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow')
import Display from './../Display';
import { showsTest } from '../tests/Episode.test'


test('renders without errors with no props', ()=>{
    render(<Display/>)
});

test('renders Show component when the button is clicked ',  async ()=> {
    fetchShow.mockResolvedValueOnce(showsTest)

    render(<Display/>)
    const button = screen.getByRole('button')
    const show = screen.findByTestId('show-container')
    userEvent.click(button)
    await waitFor(() => {
        expect(show).toBeInTheDocument})
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    fetchShow.mockResolvedValueOnce(showsTest)

    render(<Display/>)
    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor(() => {
        const seasons = screen.queryAllByTestId('season-option')
        expect(seasons).toHaveLength(2)
    })
});

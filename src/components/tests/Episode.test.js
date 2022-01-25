import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episode = {
    id: 1,
    image: null,
    name: 'Strangers',
    season: 2,
    number: 1,
    summary: "An overrated show",
    runtime: '1 hour'
}

test("renders without error", () => {
    render(<Episode episode={episode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={episode} />)

    const summary = screen.getByText("An overrated show")
    
    expect(summary).toBeInTheDocument()
    expect(summary).toHaveTextContent("An overrated show")
    expect(summary).toBeTruthy()
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={episode}/>)
    
    const defaultImg = screen.getByRole('img')
    const altText = screen.getByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(defaultImg).toBeInTheDocument()
    expect(altText).toBeInTheDocument()
    expect(defaultImg).toHaveAttribute('alt', 'https://i.ibb.co/2FsfXqM/stranger-things.png')
});

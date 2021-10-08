// import { useState } from 'react'
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, getByText, fireEvent} from '@testing-library/react'
import SeedInput from '../SeedInput';


test('SeedInput snapshot should match', () => {
    expect(1+2).toBe(3);
    
    const seed = null
    const setSeed = jest.fn()
    const component = renderer.create(
        <SeedInput seed={seed} setSeed={setSeed} /> 
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

// test('Seed should be null when input is null', () => {
//     const seed = null
//     const setSeed = jest.fn()
//     render(
//         <SeedInput seed={seed} setSeed={setSeed} />
//     )


//     // const component = renderer.create(
//     //     <SeedInput seed={seed} setSeed={setSeed} /> 
//     // )
//     // screen.render(
//     //     <SeedInput seed={seed} setSeed={setSeed} /> 
//     // )
//     const a = screen.getBy(component, 'SeedInputForm')
//     const b = null
// })

import { React } from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SeedInput from '../SeedInput';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Seed should be null when input is null', () => {
  let seed = null;
  const setSeed = (value) => { seed = value; };
  act(() => {
    ReactDOM.render(<SeedInput seed={seed} setSeed={setSeed} />, container);
  });

  const form = container.querySelector('Input');
  fireEvent.change(form, { target: { value: null } });
  expect(seed).toBe(null);
});

it('Seed should be null when input is alphanumeric', () => {
  let seed = null;
  const setSeed = (value) => { seed = value; };
  act(() => {
    ReactDOM.render(<SeedInput seed={seed} setSeed={setSeed} />, container);
  });

  const form = container.querySelector('Input');
  fireEvent.change(form, { target: { value: 'string123' } });
  expect(seed).toBe(null);
});

it('Seed should be null when input is numeric string', () => {
  let seed = null;
  const expectedSeed = '12321';
  const setSeed = (value) => { seed = value; };
  act(() => {
    ReactDOM.render(<SeedInput seed={seed} setSeed={setSeed} />, container);
  });

  const form = container.querySelector('Input');
  fireEvent.change(form, { target: { value: expectedSeed } });
  expect(seed).toBe(expectedSeed);
});

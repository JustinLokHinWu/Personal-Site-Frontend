import { React } from 'react';
import { shallow } from 'enzyme';
import SeedInput from '../SeedInput';

describe('Seed input function tests', () => {
  let seed;
  let form;
  let wrapper;

  beforeEach(() => {
    seed = null;
    const setSeed = (value) => { seed = value; };
    wrapper = shallow(<SeedInput seed={seed} setSeed={setSeed} />);

    form = wrapper.find('Input');
  });

  test('Seed should be null when input is null', () => {
    form.simulate('change', { target: { value: null } });

    expect(seed).toEqual(null);
  });

  test('Seed should be null when input is alphanumeric', () => {
    form = wrapper.find('Input');
    form.simulate('change', { target: { value: 'abc123' } });

    expect(seed).toEqual(null);
  });
  test('Seed should be updated when input is a numeric string', () => {
    const expectedSeed = '123';
    form = wrapper.find('Input');
    form.simulate('change', { target: { value: expectedSeed } });

    expect(seed).toEqual(expectedSeed);
  });
});

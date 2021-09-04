import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('pruebas en gridgif', () => {
  let wrapper = shallow(
    <GifGridItem title="silicon valley" url="https://github.com/houdini-21" />
  );
  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo en <p>', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe('silicon valley');
  });

  test('debe de tener un img igual a https://github.com/houdini-21', () => {
    const url = wrapper.find('img');
    expect(url.props().src).toBe('https://github.com/houdini-21');
    expect(url.props().alt).toBe('silicon valley');
  });

  test('debe de contener la clase animate__fadeInUp', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeInUp')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('pruebas en GifExpertApp', () => {
  test('haciendo snapshot del componente', () => {
    let wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['silicon valley'];

    let wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});

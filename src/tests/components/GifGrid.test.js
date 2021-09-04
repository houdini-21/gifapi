import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el componente gif grid', () => {
  test('hacer snapshot del componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    let wrapper = shallow(<GifGrid category="silicon valley" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando carga imagenes useFetchGifs', () => {
    const imgs = [
      {
        id: 'abc',
        url: 'houdini.com',
        title: 'lorem ipsum',
      },

      {
        id: 'c',
        url: 'houdini.com',
        title: 'lorem ipsum',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
    });

    let wrapper = shallow(<GifGrid category="silicon valley" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
  });
});

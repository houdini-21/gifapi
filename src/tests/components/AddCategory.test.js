import React from 'react';
import { shallow } from 'enzyme';
import AddCatergories from '../../components/AddCatergories';

describe('pruebas en AddCatergories', () => {
  const setCategories = jest.fn();

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCatergories setCategories={setCategories} />);
  });

  test('debe de mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar el input', () => {
    const input = wrapper.find('input');
    const value = 'hello friend';

    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('no debe de dar post', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar setCategories y limpiar la caja de texto', () => {
    //simular input change
    const input = wrapper.find('input');
    const value = 'where is my mind?';
    input.simulate('change', { target: { value } });

    //simular submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    //setCategories se deve de haber llamado
    //
    expect(setCategories).toHaveBeenCalled();

    expect(setCategories).toHaveBeenCalledTimes(1);

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //el valor del input debe de se ''wrapper.find('input')
    expect(input.prop('value')).toBe('');
  });
});

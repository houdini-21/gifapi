import React from 'react';
import { shallow } from 'enzyme';
import BackgroundParticles from '../../components/BackgroundParticles';

describe('pruebas en BackgroundParticles', () => {
  test('hacer snaphshot del componente', () => {
    const wrapper = shallow(<BackgroundParticles />);
    expect(wrapper).toMatchSnapshot();
  });
});

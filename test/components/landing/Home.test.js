import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Home from '../../../src/components/landing/Home';


describe('Home.test.js', () => {

    it('renders', () => {
        const wrapper = shallow(<Home/>);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('Section')).to.have.length(1);
        expect(wrapper.find('Footer')).to.have.length(1);        
    });
});

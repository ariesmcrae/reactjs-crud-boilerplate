import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Header from '../../../src/components/landing/Header';


describe('Header.test.js', () => {

    it('renders Header', () => {
        
        const wrapper = shallow(<Header />);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('header')).to.have.length(1);
        expect(wrapper.find('.jumbotron')).to.have.length(1);
        expect(wrapper.find('.display-4')).to.have.length(1);
        expect(wrapper.find('.lead')).to.have.length(1);
        
    });
});

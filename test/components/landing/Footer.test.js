import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Footer from '../../../src/components/landing/Footer';


describe('Footer.test.js', () => {

    it('renders', () => {
        
        const wrapper = shallow(<Footer />);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('footer')).to.have.length(1);
        expect(wrapper.find('nav')).to.have.length(1);
        expect(wrapper.find('a')).to.have.length(4);
        expect(wrapper.find('.tab-pane')).to.have.length(4);
        
    });
});

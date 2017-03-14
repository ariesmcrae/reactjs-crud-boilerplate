import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import About from '../../src/components/About';


describe('About.test.js', () => {

    it('renders', () => {
        const wrapper = shallow(<About/>);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('.container')).to.have.length(1);
    });
});

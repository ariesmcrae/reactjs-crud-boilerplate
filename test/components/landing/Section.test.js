import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Section from '../../../src/components/landing/Section';


describe('Section.test.js', () => {

    it('renders', () => {
        const wrapper = shallow(<Section/>);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('section')).to.have.length(1);
        expect(wrapper.find('.card')).to.have.length(4);
    });
});

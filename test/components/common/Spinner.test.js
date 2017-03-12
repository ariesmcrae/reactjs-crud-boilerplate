import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Spinner from '../../../src/components/common/Spinner';


describe('Spinner.test.js', () => {
    it('renders', () => {
        const wrapper = shallow(<Spinner/>);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('span')).to.have.length(1);
    });
});
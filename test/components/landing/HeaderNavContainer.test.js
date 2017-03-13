import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {HeaderNavContainer} from '../../../src/components/landing/HeaderNavContainer';


describe('HeaderNavContainer.test.js', () => {

    it('renders Header', () => {
        const props = { apiCallsInProgress: false }
        const wrapper = shallow(<HeaderNavContainer {...props}/>);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('nav')).to.have.length(1);
        expect(wrapper.find('NavLink')).to.have.length(3);
    });
});

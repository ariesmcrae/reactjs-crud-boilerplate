import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {HeaderNavContainer} from '../HeaderNavContainer';


describe('HeaderNavContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = { apiCallsInProgress: 0 }
        const wrapper = shallow(<HeaderNavContainer {...props}/>);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('nav')).toHaveLength(1);
        expect(wrapper.find('NavLink')).toHaveLength(3);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();          
    });
});

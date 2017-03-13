import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PageNotFound from '../../../src/components/common/PageNotFound';


describe('PageNotFound.test.js', () => {
    it('should render', () => {
        const props = { location:{pathName: '/blah'}};
        const wrapper = shallow(<PageNotFound {...props}/>);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('.display-1')).to.have.length(1);
    });
});

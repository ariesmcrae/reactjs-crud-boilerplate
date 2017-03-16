import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FieldInput from '../../../src/components/common/FieldInput';


describe('FieldInput.test.js', () => {
    it('renders', () => {
        const props = { name: 'Category', label: 'Category', onChange: () => {} };
        const wrapper = shallow(<FieldInput {...props}/>);
       
        expect(wrapper.length).to.equal(1);
    });    
});

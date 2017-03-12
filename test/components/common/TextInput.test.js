import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import TextInput from '../../../src/components/common/TextInput';


describe('TextInput.test.js', () => {
    it('renders', () => {
        const props = { name: 'Category', label: 'Category', onChange: () => {} };
        const wrapper = shallow(<TextInput {...props}/>);
       
        expect(wrapper.length).to.equal(1);
    });    
});
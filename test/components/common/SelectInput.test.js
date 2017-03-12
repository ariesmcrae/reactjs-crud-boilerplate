import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import SelectInput from '../../../src/components/common/SelectInput';


describe('SelectInput.test.js', () => {
    it('renders', () => {
        const props = { name: 'Category', value: 'Javascript', label: 'Category', onChange: () => {}, options:[{value: 'Josh', text: 'Bloch'}]};
        const wrapper = shallow(<SelectInput {...props}/>);
        expect(wrapper.length).to.equal(1);
    });    
});
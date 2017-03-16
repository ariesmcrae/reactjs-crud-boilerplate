import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import SelectInput from '../../../src/components/common/SelectInput';


describe('SelectInput.test.js', () => {
    it('renders', () => {
        const props = { 
            input:{},
            name: 'category',
            label: 'Category',
            defaultOption: '',
            options:[{value: 'Josh', text: 'Bloch'}],
            meta: {touched: false, error:{}, warning: {}},            
        };

        const wrapper = shallow(<SelectInput {...props}/>);
        
        expect(wrapper.length).to.equal(1);
    });    
});

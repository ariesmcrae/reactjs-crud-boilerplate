import React from 'react';
import { shallow } from 'enzyme';
import FieldInput from '../../../src/components/common/FieldInput';


describe('FieldInput.test.js', () => {

    it('renders without crashing', () => {
          const props = { 
            input: {},
            type: 'text',
            name: 'category', 
            label: 'Category', 
            placeholder: 'Category',
            meta: {touched: false, error:{}, warning: {}},
            onChange: () => {} 
        };

        const wrapper = shallow(<FieldInput {...props}/>);
        expect(wrapper.length).toEqual(1);
    });

    

});




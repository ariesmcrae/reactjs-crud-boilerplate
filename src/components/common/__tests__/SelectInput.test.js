import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectInput from '../SelectInput';


let props = undefined;


beforeAll(() => {
    props = {
        input: {},
        name: 'category',
        label: 'Category',
        defaultOption: '',
        options: [{ value: 'Josh', text: 'Bloch' }],
        meta: { touched: false, error: {}, warning: {} },
    };

    return props;
});



describe('SelectInput.test.js', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallow(<SelectInput {...props} />);
        return wrapper;
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });


    it('renders as expected', () => {
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });


});

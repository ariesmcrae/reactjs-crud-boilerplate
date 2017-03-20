import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../App';


describe('App.test.js', () => {
    let history;

    beforeEach(() => {
      history = createBrowserHistory();
    });

    it('renders without crashing', () => {
        const props = { history: history };

        const wrapper = shallow(<App {...props}/>);

        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../../src/components/App';


describe('App.test.js', () => {
    let history;

    beforeEach(() => {
      history = createBrowserHistory();
    });

    it('renders', () => {
        const props = {
            history: history
        };

        const wrapper = shallow(<App {...props}/>);

        expect(wrapper).to.have.length(1);
    });
});

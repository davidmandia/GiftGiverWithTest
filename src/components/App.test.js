import React from "react";

import App from './App';
import Enzyme from 'enzyme';


import { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() })


const app = shallow(<App />);

describe('App', () => {
    const id =1;


it('renders correctly', () => {
    
    
    expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

describe('when clicking the `add-gift` button', () => {
    

    beforeEach(() => {
        app.find('.btn-add').simulate('click');
    });
    afterEach(() => {
        app.setState({ gifts : [] });
    })
    it('adds a new gift to `state` when clicking the `add gift` button', () => {
    
        expect(app.state().gifts).toEqual([{ id}]);
    
    });
    
    it('adds a new gift to the rendered list when clickung the `add gift` button', () => {
    
        expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
        expect(app.find('Gift').exists()).toBe(true);
    })
});

describe('and user want to remove the added gift', () => {
    beforeEach(()=>{
        app.instance().removeGift(id)
    });
    it('removes the gift from the state', () => {
        expect(app.state().gifts).toEqual([]);
    })
})



})
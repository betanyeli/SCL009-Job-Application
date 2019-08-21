import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Navbar from './components/navbar'
import Modal from './components/modal'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

 
Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Components exists', () => {
  it('Should exists Navbar component />', () => {
    const Nav= shallow(<Navbar />);
    expect(Nav.exists()).toBe(true);
  });

 
    it('Should exists Modal component', () => {
      const Mod = shallow(<Modal />);
      expect(Mod.exists()).toBe(true);
    });

});

it('should exist Modal component on Navbar', () => {
  const thisComponent = shallow(<Navbar />);
  expect(thisComponent.find('Modal').length).toBe(1);
});


import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card'; 

describe('Card component', () =>{
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render UI as expected', () => {
        const tree = renderer.create(<Card title="Test1" content="Content1" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List'; 

const testContent = [
    {id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
]

describe('List component', () =>{
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="Test1" content={testContent} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render UI as expected', () => {
        const tree = renderer.create(<List header="Test1" content={testContent} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
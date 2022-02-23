
import App from '../App';
import {shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// doing the grouping putting 2 test cases into 1
describe('basic app rendering test cases', () => {
  test("check app comes without any issues", () => {
    shallow(<App />);
  });
});



  




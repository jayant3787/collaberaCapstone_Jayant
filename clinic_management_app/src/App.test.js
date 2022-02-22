import { render, screen } from '@testing-library/react';
import store from './store/myStore';
import { Provider } from 'react-redux';
import App from './App';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddDoctorContainer from './components/AddDoctorContainer';
import SearchDoctorContainer from './components/SearchDoctorContainer';
configure({ adapter: new Adapter() });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// doing the grouping putting 2 test cases into 1
describe('basic app rendering test cases', () => {
  test("check app comes without any issues", () => {
    shallow(<App />);
  });
});



describe('test for add doctor', () => {

  test("check addDoctorContainer comes without any issues", () => {
    mount(<Provider store={store}><AddDoctorContainer mode="edit" /></Provider>);
  });

test('app has a single AddDoctorContainer component and has content....', () => {
  const wrapper = mount(<Provider store={store}><AddDoctorContainer /></Provider>);
  const someContent = <h1 style={{ textAlign: "center" }}>ADD NEW DOCTOR FORM</h1>
    expect(wrapper.contains(someContent)).toEqual(true);
});

test('add doctor has a 1 h1 element', () => {
  var wrapper = mount(<Provider store={store}><AddDoctorContainer /></Provider>);
  // use CSS selector to find all h1 element
  const noOfh1Elements = wrapper.find('h1').length; // this will return an array
  expect(noOfh1Elements).toEqual(1);
});

test('app renders props are passed or not', () => {
  var wrapper = mount(<Provider store={store}><AddDoctorContainer mode="edit" /></Provider>);
  expect(wrapper.contains("HELLO")).toEqual(false);
});
});




describe('test for search doctor', () => {

  test("check searchDoctorContainer comes without any issues", () => {
    mount(<Provider store={store}><SearchDoctorContainer /></Provider>);
  });

  test('app has a single AddDoctorContainer component and has content....', () => {
    const wrapper = mount(<Provider store={store}><SearchDoctorContainer /></Provider>);
    const someContent = <h1>DOCTOR SEARCH FORM</h1>;
      expect(wrapper.contains(someContent)).toEqual(true);
  });

  test('has a single AddDoctorContainer component and has content....', () => {
    const wrapper = mount(<Provider store={store}><SearchDoctorContainer /></Provider>);
    const someContent = <h2><b>SEARCH BY</b></h2>
      expect(wrapper.contains(someContent)).toEqual(true);
  });
  
  test('search doctor has a 1 h1 element', () => {
    var wrapper = mount(<Provider store={store}><SearchDoctorContainer /></Provider>);
    // use CSS selector to find all h1 element
    const noOfh2Elements = wrapper.find('h1').length; // this will return an array
    expect(noOfh2Elements).toEqual(1);
  });

  test('search doctor has a 1 h2 element', () => {
    var wrapper = mount(<Provider store={store}><SearchDoctorContainer /></Provider>);
    // use CSS selector to find all h1 element
    const noOfh2Elements = wrapper.find('h2').length; // this will return an array
    expect(noOfh2Elements).toEqual(1);
  });

  test('app renders props are passed or not', () => {
    var wrapper = mount(<Provider store={store}><SearchDoctorContainer name="jayu" /></Provider>);
    expect(wrapper.contains("jayu")).toEqual(false);
  });

  });
  




import { render } from '@testing-library/react';
import Calibration from './Calibration';


test('renders Calibration component', () => {
  const container = render(<Calibration calibration={["1"]} />).container;
  expect(container).toHaveTextContent('Calibration Values');
});

test('renders a calibration value of 11 for an input of 1 ', () => {
  const { getByText } = render(<Calibration calibration={["1"]} />);
  const componentElement = getByText('Calibration Values are 11');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 22 for an input of 2 ', () => {
  const { getByText } = render(<Calibration calibration={["2"]} />);
  const componentElement = getByText('Calibration Values are 22');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 12 for an input of 12 ', () => {
  const { getByText } = render(<Calibration calibration={["12"]} />);
  const componentElement = getByText('Calibration Values are 12');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 12 for an input of a1a2b ', () => {
  const { getByText } = render(<Calibration calibration={["12"]}/>);
  const componentElement = getByText('Calibration Values are 12');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 12 for an input of ["12","12"]', () => {
  const { getByText } = render(<Calibration calibration={["12","12"]}/>);
  const componentElement = getByText('Calibration Values are 24');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 142 for an input of testCalibrationString', () => {
  const testCalibrationString = ["1abc2","pqr3stu8vwx","a1b2c3d4e5f","treb7uchet"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 142');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 11 for an input of testCalibrationString', () => {
  const testCalibrationString = ["one"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 11');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 29 for an input of testCalibrationString', () => {
  const testCalibrationString = ["two1nine"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 29');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 24 for an input of testCalibrationString', () => {
  const testCalibrationString = ["xtwone3four"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 24');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 13 for an input of testCalibrationString', () => {
  const testCalibrationString = ["abcone2threexyz"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 13');
  expect(componentElement).toBeInTheDocument();
});


test('renders a calibration value of 76 for an input of testCalibrationString', () => {
  const testCalibrationString = ["7pqrstsixteen"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 76');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 14 for an input of testCalibrationString', () => {
  const testCalibrationString = ["zoneight234"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 14');
  expect(componentElement).toBeInTheDocument();
});
test('renders a calibration value of 281 for an input of testCalibrationString', () => {
  const testCalibrationString = ["two1nine","eightwothree","abcone2threexyz","xtwone3four","4nineeightseven2","zoneight234","7pqrstsixteen"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 281');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 99 for an input of testCalibrationString', () => {
  const testCalibrationString = ["ninepgp9"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 99');
  expect(componentElement).toBeInTheDocument();
});

test('renders a calibration value of 59 for an input of testCalibrationString', () => {
  const testCalibrationString = ["hpcpqbhsfivesixninembvbpqphhmrtthree9"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 59');
  expect(componentElement).toBeInTheDocument();
});


test('renders a calibration value of 44 for an input of testCalibrationString', () => {
  const testCalibrationString = ["123fdx"]
  const { getByText } = render(<Calibration calibration={testCalibrationString}/>);
  const componentElement = getByText('Calibration Values are 13');
  expect(componentElement).toBeInTheDocument();
});

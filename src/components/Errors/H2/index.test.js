import React from 'react'
import H2 from './index'
import renderer from 'react-test-renderer'

test("renders correctly", () => {
  const h2 = renderer.create(<H2
    message="hello"
  />).toJSON();
  expect(h2).toMatchSnapshot();
});

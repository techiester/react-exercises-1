import React from 'react';
import renderer from 'react-test-renderer';
import Timer from './Timer';
import moment from "moment"

const testRenderer = renderer.create(
  <Timer />,
);
const testInstance = testRenderer.root;

afterAll(() => {
  testRenderer.unmount()
})

test('render time test', () => {
  const timeToCheck = testInstance.findByProps({ "className": "time" }).children[0]
  expect(timeToCheck).toBe(moment(new Date).format('hh:mm:ss A'));
});

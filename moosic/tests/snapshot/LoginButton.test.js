import React from 'react';
import LoginButton from '../../src/scenes/LoginScene/components/LoginButton';
import renderer from 'react-test-renderer';

it('LoginButton renders correctly', () => {
  const tree = renderer.create(
    <LoginButton/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

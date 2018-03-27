import React from 'react';
import InfoItem from '../../src/scenes/LoginScene/components/InfoItem';
import renderer from 'react-test-renderer';

it('InfoItem renders correctly', () => {
  const tree = renderer.create(
    <InfoItem/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

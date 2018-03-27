import React from 'react';
import TitleField from '../../src/scenes/TagScene/components/TitleField';
import renderer from 'react-test-renderer';

it('TitleField renders correctly', () => {
  const tree = renderer.create(
    <TitleField/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

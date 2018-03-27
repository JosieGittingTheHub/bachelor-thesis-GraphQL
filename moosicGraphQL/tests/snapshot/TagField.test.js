import React from 'react';
import TagField from '../../src/components/TagField';
import renderer from 'react-test-renderer';

it('TagField renders correctly', () => {
  const tree = renderer.create(
    <TagField/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
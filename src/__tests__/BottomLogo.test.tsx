import React from 'react'
import BottomLogo from '../views/BottomLogo/index'
import renderer from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react'


afterEach(cleanup)

test('Link changes the class when hovered', () => {
  const component = renderer.create(<BottomLogo />),
    tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

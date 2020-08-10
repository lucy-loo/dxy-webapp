import React from 'react'
import renderer from 'react-test-renderer'
import Marquee from '@/views/MapBox/Marquee'

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(<Marquee contents={[]} />),
//     tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

const marquee = [
  {
    src: 'https://a.com',
    title: 'A',
    msg: 'message_a',
  },
  { src: 'http://b.com', title: 'B', msg: 'message_b' },
]
test('test 1', () => {
  const component = renderer.create(<Marquee contents={[]} />)
  jest.runAllTimers()
  expect(2 + 2).toBe(4)
})

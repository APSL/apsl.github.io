import React from 'react'
import ReactDom from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils'
import {wrap} from 'react-stateless-wrapper'

import Organization from '../organization'

describe('Organization component', () => {
  const props = {
    avatarUrl: 'http://foo.bar/avatar',
    description: 'Lorem ipsum',
    name: 'APSL',
    htmlUrl: 'http://foo.bar/'
  }
  const WrappedOrganization = wrap(Organization)
  const organization = TestUtils.renderIntoDocument(<WrappedOrganization {...props} />)
  const orgNode = ReactDom.findDOMNode(organization)

  it('should have an image avatar link', () => {
    const a = orgNode.querySelector('a');
    expect(a.href).toBe(props.htmlUrl)

    const img = a.querySelector('img');
    expect(img.src.startsWith(props.avatarUrl)).toBeTruthy()
  })

  it('should have a description in H1', () => {
    const h1 = orgNode.querySelector('h1');
    expect(h1.textContent).toBe(props.description)
  })
})

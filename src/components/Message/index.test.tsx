import React from 'react'
import { render, screen } from '@testing-library/react'
import { Message } from './index'

/* ========================================================================

======================================================================== */

describe('General', () => {
  test('executes without crashing', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('Message', () => {
  test('renders the Message component', () => {
    render(<Message message='Testing123...' />)
  })

  test('implements jest-dom method without crashing', () => {
    render(<Message message='Testing123...' />)
    const component = screen.getByText(/Testing123.../)

    // Test that eslint-plugin-jest-dom is working...
    // expect(component.textContent).toBe('Success')

    // Test that  eslint-plugin-testing-library is working...
    // screen.debug()

    expect(component).toBeInTheDocument()
  })
})

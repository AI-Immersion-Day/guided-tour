import { render, screen } from '@testing-library/react'
import { EmptyState } from './empty-state'

describe('EmptyState', () => {
  it('renders with default props', () => {
    render(<EmptyState />)
    
    // Check for default title and message
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
    expect(screen.getByText('Implement your ideas here using agentic coding!')).toBeInTheDocument()
  })

  it('renders with custom title and message', () => {
    const customTitle = 'No Data Available'
    const customMessage = 'There is currently no data to display.'
    
    render(<EmptyState title={customTitle} message={customMessage} />)
    
    // Check for custom title and message
    expect(screen.getByText(customTitle)).toBeInTheDocument()
    expect(screen.getByText(customMessage)).toBeInTheDocument()
  })

  it('renders the info icon', () => {
    const { container } = render(<EmptyState />)
    
    // Check that the icon container is present
    const iconContainer = container.querySelector('.flex.h-16.w-16')
    expect(iconContainer).toBeInTheDocument()
  })

  it('has correct heading level for title', () => {
    render(<EmptyState title="Test Title" />)
    
    // Check that title uses h2 for proper document structure
    const heading = screen.getByRole('heading', { level: 2, name: 'Test Title' })
    expect(heading).toBeInTheDocument()
  })

  it('applies correct layout styles', () => {
    const { container } = render(<EmptyState />)
    
    // Check for the main container with flex layout
    const mainContainer = container.querySelector('.flex.min-h-\\[60vh\\]')
    expect(mainContainer).toBeInTheDocument()
  })
})

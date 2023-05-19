import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedWork from './SelectedWork';

describe('SelectedWork component', () => {
    it('renders correctly', () => {
      render(<SelectedWork />);
      const selectedWorkElement = screen.getByTestId('selected-work');
      expect(selectedWorkElement).toBeInTheDocument();
    });

  it('renders the buttons', () => {
    render(<SelectedWork />);
    const recentWorkButton = screen.getByRole('button', { name: 'SEE RECENT WORK' });
    expect(recentWorkButton).toBeInTheDocument();
  });

  it('renders the flesh out section', () => {
    render(<SelectedWork />);
    const fleshOutElement = screen.getByText("Let's flesh out your product ideas");
    expect(fleshOutElement).toBeInTheDocument();
    const designcrafterElement = screen.getByText(
      'Designcrafter works in two-week intensives called Product Run at a fixed fee. In week one we choose a direction and create key screens. In week two we expand and polish.'
    );
    expect(designcrafterElement).toBeInTheDocument();
  });
});

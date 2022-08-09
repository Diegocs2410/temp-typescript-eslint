import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from 'components/Header';

describe('Should render Button component', () => {
  test('Render single button', () => {
    const title = 'Test Header';
    render(<Header title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});

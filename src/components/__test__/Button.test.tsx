import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from 'components/Button';

const onClick = jest.fn();

describe('Should render Button component', () => {
  test('Render single button', () => {
    render(<Button onClick={onClick}>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('Should click action', () => {
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByText('Button');
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

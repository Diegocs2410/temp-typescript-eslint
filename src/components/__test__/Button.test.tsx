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

  it('Should render danger type Button', () => {
    render(<Button type="danger">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('bg-red-600');
  });

  it('Should render primary type Button', () => {
    render(<Button type="primary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('bg-cyan-500');
  });

  it('Should render success type Button', () => {
    render(<Button type="success">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('bg-green-500');
  });

  it('Should render disable button', () => {
    render(
      <Button type="success" disable>
        Button
      </Button>
    );
    expect(screen.getByText('Button')).toHaveClass('opacity-50');
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoxApp from 'components/BoxApp';
import { MemoryRouter } from 'react-router-dom';

const RenderBoxApp = () =>
  render(
    <MemoryRouter initialEntries={['/', 'some/bad/entry']}>
      <BoxApp to="/" text="test" />
    </MemoryRouter>
  );

describe('Tests on BoxApp component', () => {
  it('Should render BoxApp component', () => {
    RenderBoxApp();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

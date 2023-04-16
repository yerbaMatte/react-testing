import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    //  simulating fetching data with mock function
    // it avoids redundant network traffic
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');

    expect(listItemElements).not.toHaveLength(0);
  });
});

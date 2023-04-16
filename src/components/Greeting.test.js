import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//describe - grouping tests into one specific test suite
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Three A's
    //Arrange - set up the test data, test conditions and test environment
    render(<Greeting />);
    // Act - run logic that should be tested
    // ... nothing
    // Assert - compare execution results with expected results
    const helloWorldElement = screen.getByText('Hello World', { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test(`renders it's good to see you as a text`, () => {
    render(<Greeting />);
    const goodToSeeYou = screen.getByText('Its good to', { exact: false });
    expect(goodToSeeYou).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText('Changed!', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import ChatInput from './ChatInput';

describe('ChatInput Component', () => {
  test('calls onSend with the correct message when typing', () => {
    const mockOnSend = jest.fn();
    render(<ChatInput onSend={mockOnSend} />);
    
    const textarea = screen.getByPlaceholderText('Enter your message');
    fireEvent.change(textarea, { target: { value: 'Hello, world!' } });

    const button = screen.getByText('Send');
    fireEvent.click(button);

    expect(mockOnSend).toHaveBeenCalledWith('Hello, world!');
  });

  test('does not call onSend with an empty message', () => {
    const mockOnSend = jest.fn();
    render(<ChatInput onSend={mockOnSend} />);

    const textarea = screen.getByPlaceholderText('Enter your message');
    fireEvent.change(textarea, { target: { value: '' } });

    const button = screen.getByText('Send');
    fireEvent.click(button);

    expect(mockOnSend).not.toHaveBeenCalled();
  });
});

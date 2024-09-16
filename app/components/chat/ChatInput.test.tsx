import { fireEvent, render, screen } from '@testing-library/react';
import ChatInput from './ChatInput';

describe('ChatInput Component', () => {
  test('calls onSend with the correct message when Enter is pressed', () => {
    const mockOnSend = jest.fn();
    render(<ChatInput onSend={mockOnSend} />);
    
    const textarea = screen.getByPlaceholderText('Enter your message');

    fireEvent.change(textarea, { target: { value: 'Hello, world!' } });
    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockOnSend).toHaveBeenCalledWith('Hello, world!');
  });

  test('does not call onSend with an empty message when Enter is pressed', () => {
    const mockOnSend = jest.fn();
    render(<ChatInput onSend={mockOnSend} />);

    const textarea = screen.getByPlaceholderText('Enter your message');
    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockOnSend).not.toHaveBeenCalled();
  });
});

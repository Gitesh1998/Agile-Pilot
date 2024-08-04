import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

describe('Signup Component', () => {
  test('renders Signup component', () => {
    const { getByText, getByLabelText } = render(<Signup />);

    // Check if the form elements are rendered
    expect(getByText('Sign Up')).toBeInTheDocument();
    expect(getByLabelText('Full Name:')).toBeInTheDocument();
    expect(getByLabelText('Username:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
  });

  test('updates on input change', () => {
    const { getByLabelText } = render(<Signup />);
    const fullNameInput = getByLabelText('Full Name:');
    const usernameInput = getByLabelText('Username:');
    const passwordInput = getByLabelText('Password:');

    fireEvent.change(fullNameInput, { target: { value: 'Test Name' } });
    expect(fullNameInput.value).toBe('Test Name');

    fireEvent.change(usernameInput, { target: { value: 'TestUser' } });
    expect(usernameInput.value).toBe('TestUser');

    fireEvent.change(passwordInput, { target: { value: 'TestPass' } });
    expect(passwordInput.value).toBe('TestPass');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

const mockUseLogin = jest.fn();

jest.mock('../../hooks/useLogin', () => ({
  useLogin: () => mockUseLogin(),
}));

describe('Login component', () => {
  it('renders form fields', () => {
    mockUseLogin.mockReturnValue({
      username: '',
      password: '',
      errors: { username: '', password: '' },
      status: '',
      setUsername: jest.fn(),
      setPassword: jest.fn(),
      handleSubmit: jest.fn(),
    });

    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('disables the login button if inputs are empty', () => {
    mockUseLogin.mockReturnValue({
      username: '',
      password: '',
      errors: { username: '', password: '' },
      status: '',
      setUsername: jest.fn(),
      setPassword: jest.fn(),
      handleSubmit: jest.fn(),
    });

    render(<Login />);
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeDisabled();
  });

  it('calls handleSubmit on form submit', () => {
    const mockHandleSubmit = jest.fn((e) => e.preventDefault());

    mockUseLogin.mockReturnValue({
      username: 'test',
      password: 'pass',
      errors: {},
      status: '',
      setUsername: jest.fn(),
      setPassword: jest.fn(),
      handleSubmit: mockHandleSubmit,
    });

    render(<Login />);
    const form = screen.getByTestId('login-form');
    fireEvent.submit(form);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});

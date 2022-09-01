import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from  'react-test-renderer'
import Login from './Login'

test('logins in user', () => {
    render(<Login/>,{wrapper: BrowserRouter});
    const linkElement = screen.getByTitle("login");
    expect(linkElement).toBeInTheDocument();
});
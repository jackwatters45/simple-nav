import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../styles/reset.css';
import { useState } from 'react';
import Nav from '../components/Exports/Nav';
import { styled } from 'styled-components';
import NavLink from '../components/Exports/NavLink/NavLink';
import NavDropdown from '../components/Exports/NavDropdown';
import NavButton from '../components/Exports/NavButton/NavButton';
const StyledContainer = styled.div `
  display: flex;
  justify-content: space-between;

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const App = () => {
    const [user, setUser] = useState(true);
    const handleToggleUser = () => setUser((prev) => !prev);
    const logout = () => console.log('logout');
    return (_jsxs(StyledContainer, { children: [_jsx("button", { onClick: handleToggleUser, children: "Toggle user" }), _jsx(Nav, { children: user ? (_jsxs(_Fragment, { children: [_jsxs(NavDropdown, { buttonOptions: { text: 'Admin' }, children: [_jsx(NavLink, { to: "/admin/users", text: "View Users" }), _jsx(NavLink, { to: "/admin/posts", text: "View Posts" }), _jsx(NavLink, { to: "/admin/topics", text: "View Topics" })] }), _jsx(NavLink, { to: "/write", text: "Write" }), _jsxs(NavDropdown, { buttonOptions: { text: 'Account' }, children: [_jsx(NavLink, { to: "/profile", text: "Profile" }), _jsx(NavButton, { onClick: logout, text: "Logout" })] })] })) : (_jsxs(_Fragment, { children: [_jsx(NavLink, { to: "/write", text: "Write" }), _jsx(NavLink, { to: "/signup", text: "Sign up" }), _jsx(NavLink, { to: "/login", text: "Log in" })] })) })] }));
};
export default App;

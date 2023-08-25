import '../styles/reset.css';
import { useState } from 'react';
import Nav from '../components/Exports/Nav';
import { styled } from 'styled-components';
import NavLink from '../components/Exports/NavLink/NavLink';
import NavDropdown from '../components/Exports/NavDropdown';
import NavButton from '../components/Exports/NavButton/NavButton';

const StyledContainer = styled.div`
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
  const [user, setUser] = useState<boolean>(true);
  const handleToggleUser = () => setUser((prev) => !prev);

  const logout = () => console.log('logout');

  return (
    <StyledContainer>
      <button onClick={handleToggleUser}>Toggle user</button>
      <Nav>
        {user ? (
          <>
            <NavDropdown buttonOptions={{ text: 'Admin' }}>
              <NavLink to="/admin/users" text="View Users" />
              <NavLink to="/admin/posts" text="View Posts" />
              <NavLink to="/admin/topics" text="View Topics" />
            </NavDropdown>
            <NavLink to="/write" text="Write" />
            <NavDropdown buttonOptions={{ text: 'Account' }}>
              <NavLink to="/profile" text="Profile" />
              <NavButton onClick={logout} text="Logout" />
            </NavDropdown>
          </>
        ) : (
          <>
            <NavLink to="/write" text="Write" />
            <NavLink to="/signup" text="Sign up" />
            <NavLink to="/login" text="Log in" />
          </>
        )}
      </Nav>
    </StyledContainer>
  );
};

export default App;

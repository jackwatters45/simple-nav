import './styles/reset.css';
import { useState } from 'react';
import NavType from './components/NavType/NavType';
import { styled } from 'styled-components';
import NavLink from './components/NavItems/NavLink';
import NavDropdown from './components/NavItems/Dropdown/NavDropdown';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NavButton from './components/NavItems/NavButton';

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
      <NavType>
        {user ? (
          <>
            <NavDropdown
              buttonOptions={{ text: 'Admin', icon: <AdminPanelSettingsIcon /> }}
            >
              <NavLink to="/admin/users" text="View Users" />
              <NavLink to="/admin/posts" text="View Posts" />
              <NavLink to="/admin/topics" text="View Topics" />
            </NavDropdown>
            <NavLink to="/write" text="Write" icon={<EditNoteIcon />} />
            <NavDropdown buttonOptions={{ text: 'Account', icon: <AccountBoxIcon /> }}>
              <NavLink to="/profile" text="Profile" />
              <NavButton onClick={logout} text="Logout" />
            </NavDropdown>
          </>
        ) : (
          <>
            <NavLink to="/write" text="Write" icon={<EditNoteIcon />} />
            <NavLink to="/signup" text="Sign up" />
            <NavLink to="/login" text="Log in" />
          </>
        )}
      </NavType>
    </StyledContainer>
  );
};

export default App;

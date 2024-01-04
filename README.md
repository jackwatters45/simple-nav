# Simple Nav

Simple React nav component library

## Installation

```zsh
npm i @jackwatters/simple-nav
```

## Example

```jsx
export { Nav, NavLink, NavDropdown, NavButton } from '@jackwatters/simple-nav';

const App = () => {
  return (
    <Nav>
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
    </Nav>
  );
};
```

## Contribute

- Issue Tracker: <https://github.com/jackwatters45/simple-nav/issues>
- Source Code: <https://github.com/jackwatters45/simple-nav/tree/main/src>

## Support

If you are having issues, please let me know at: <jack.watters@me.com>

## License

The project is licensed under the MIT license.

## Other links

- Repo: <https://github.com/jackwatters45/simple-nav>
- Npm: <https://www.npmjs.com/package/@jackwatters/simple-nav>

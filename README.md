# Simple Nav

- icon size
  - options in general

## styles i deleted

- hamburger dropdown modal

  - font-size: 2rem;
  - font-weight: 700;

- normal dropdown content

  - background-color: ${(props) => props?.theme?.colors?.
  - backgroundSecondary};
  - border-radius: 3px;
  - padding: 4px;
  - font-size: 0.9rem;
  - margin-top: 4px;
  - box-shadow: ${(props) => props?.theme?.boxShadow};

- RegularNav

  - gap: 2vw;

- HamburgerModal
  - const slideIn = keyframes`
    - 0% {transform: translateX(100%);}
    - 100% {transform: translateX(0);}`;
  - MenuBackground
    - background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
    - animation: ${slideIn} 0.4s ease-in-out;

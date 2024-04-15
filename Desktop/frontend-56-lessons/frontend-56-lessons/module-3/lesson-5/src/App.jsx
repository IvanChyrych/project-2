import {Title} from './components/Title';
import {Container} from './components/Container';
import {HamburgerMenu} from './components/HamburgerMenu';
import {Hamburger} from './components/hamburger';

export function App() {
  return (
    <Container>
      <Title>Sing In</Title>
      <HamburgerMenu>
        <Hamburger variant="Active"></Hamburger>
      </HamburgerMenu>

    </Container>
  );
}

import {Title} from './components/Title';
import {Container} from './components/Container';
import {HamburgerMenu} from './components/HamburgerMenu';
import {Hamburger} from './components/hamburger';
import {Alert} from './components/alert';

export function App() {
  return (
    <Container>
      <Title>Sing In</Title>
      <HamburgerMenu>
        <Hamburger variant="Active"></Hamburger>
      </HamburgerMenu>
      <Alert variant="alert">Lorem ipsum </Alert>
      <Alert variant="error">Lorem ipsum </Alert>
      <Alert variant="warning">Lorem ipsum </Alert>
      <Alert variant="notice">Lorem ipsum </Alert>
      <Alert variant="confirm">Lorem ipsum </Alert>
    </Container>
  );
}

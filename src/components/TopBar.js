import { Container, Navbar, Button, NavbarText } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModal } from './LogiModal';
import { setUserLogStatus } from '../state/actions';

export function TopBar({ setActiveView }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleLogOut = () => {
    setActiveView('list');
    dispatch(setUserLogStatus(false));
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Blog App</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="link"
            onClick={() => setActiveView('list')}
            style={{ marginRight: '1em' }}
          >
            Articles List
          </Button>

          <Button variant="primary" onClick={() => setActiveView('form')}>
            Add New Article
          </Button>

          {isLoggedIn && (
            <Button
              variant="link"
              onClick={() => setActiveView('users')}
              style={{ marginLeft: '1em' }}
            >
              Users List
            </Button>
          )}

          <NavbarText className="navbar-user-status">
            {isLoggedIn ? (
              <>
                <span style={{ marginRight: '0.5em' }}>User logged in</span>
                <Button variant="danger" onClick={() => handleLogOut()}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <span style={{ marginRight: '0.5em' }}>User not logged in</span>
                <LoginModal variant={'secondary'} />
              </>
            )}
          </NavbarText>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

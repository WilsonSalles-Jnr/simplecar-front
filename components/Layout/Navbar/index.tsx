import { AppShell, Group } from '@mantine/core';
import NavPaths from './NavPaths';
import { routes } from './routes';

export default function Navbar() {
  return (
    <AppShell.Navbar>
      <Group m={10} justify="center">
        {routes.map((route, index) => (
          <NavPaths {...route} key={index} />
        ))}
      </Group>
    </AppShell.Navbar>
  );
}

import { IconUser, IconBrandAirtable, IconCar, IconTool, IconEngine } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface RouteInterface {
  name: string;
  path: string;
  icon: ReactNode;
}
export const routes: RouteInterface[] = [
  { name: 'Cliente', path: '/customer', icon: <IconUser /> },
  { name: 'Modelo', path: '/model', icon: <IconBrandAirtable /> },
  { name: 'Veículo', path: '/vehicle', icon: <IconCar /> },
  { name: 'Peças e Serviços', path: '/item', icon: <IconTool /> },
  { name: 'Orçamento', path: '/workorder', icon: <IconEngine /> },
];

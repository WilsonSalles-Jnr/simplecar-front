import { ActionIcon, Tooltip } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  name: string;
  path: string;
  icon: ReactNode;
}

export default function NavPaths({ name, path, icon }: Props) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Tooltip label={name} position="right">
      <ActionIcon
        variant={path === pathName ? 'filled' : 'outline'}
        onClick={() => router.push(path)}
      >
        {icon}
      </ActionIcon>
    </Tooltip>
  );
}

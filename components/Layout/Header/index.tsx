'use client';

import { AppShell, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Header() {
  const route = useRouter();
  return (
    <AppShell.Header p={10}>
      <Title onClick={() => route.push('/')} style={{ cursor: 'pointer' }}>
        Simplecar
      </Title>
    </AppShell.Header>
  );
}

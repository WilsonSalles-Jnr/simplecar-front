'use client';

import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 50, breakpoint: 500 }}>
      <Header />
      <Navbar />
      <AppShell.Main m={10}>{children}</AppShell.Main>
    </AppShell>
  );
}

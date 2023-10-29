'use client';

import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './Header';
import Navbar from './Navbar';

const queryClient = new QueryClient();

export default function Layout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShell header={{ height: 60 }} navbar={{ width: 50, breakpoint: 500 }}>
        <Header />
        <Navbar />
        <AppShell.Main m={10}>{children}</AppShell.Main>
      </AppShell>
    </QueryClientProvider>
  );
}

/* eslint-disable react/no-unused-prop-types */

'use client';

import {
  ActionIcon,
  Button,
  Group,
  Input,
  Modal,
  Stack,
  Table,
  Title,
  Tooltip,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useCreateCustomer, useCustomers } from '@/core/hooks/customer/customer.hook';

interface CustomerProps {
  id: number;
  name: string;
  phone: string;
}

export default function Customer() {
  const [modal, setModal] = useToggle();
  const form = useForm<{ name: string; phone: string }>();
  const { data } = useCustomers();
  const { mutateAsync, isLoading } = useCreateCustomer();

  const handleCreate = (customerData: { name: string; phone: string }) => {
    mutateAsync(customerData);
    form.reset();
    setModal();
  };
  return (
    <Group w="100%">
      <Group justify="space-between" w="100%">
        <Title>Clientes</Title>
        <Button onClick={() => setModal()}>Novo cliente</Button>
      </Group>
      <Table>
        <Table.Thead>
          <Table.Th>Nome</Table.Th>
          <Table.Th>Telefone</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {data?.map(({ id, name, phone }: CustomerProps) => (
            <Table.Tr key={id}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{phone}</Table.Td>
              <Table.Td align="right">
                <Tooltip label="Editar">
                  <ActionIcon>
                    <IconEdit size={14} />
                  </ActionIcon>
                </Tooltip>
              </Table.Td>
              <Table.Td align="right">
                <Tooltip label="Remover">
                  <ActionIcon color="red">
                    <IconTrash size={14} />
                  </ActionIcon>
                </Tooltip>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Modal opened={modal} onClose={setModal} title="Novo cliente">
        <form onSubmit={form.onSubmit(handleCreate)}>
          <Stack>
            <Input placeholder="Nome" {...form.getInputProps('name')} />
            <Input
              placeholder="Telefone"
              type="number"
              minLength={13}
              maxLength={15}
              {...form.getInputProps('phone')}
            />
            <Group justify="end">
              <Button type="submit" loading={isLoading}>
                Salvar
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Group>
  );
}

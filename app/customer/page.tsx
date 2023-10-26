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
import { useToggle } from '@mantine/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export default function Customer() {
  const [modal, setModal] = useToggle();
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
          <Table.Tr>
            <Table.Td>Wilson Salles Junior</Table.Td>
            <Table.Td>14997223323</Table.Td>
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
        </Table.Tbody>
      </Table>
      <Modal opened={modal} onClose={setModal} title="Novo cliente">
        <Stack>
          <Input placeholder="Nome" />
          <Input placeholder="Telefone" type="number" minLength={13} maxLength={15} />
          <Group justify="end">
            <Button>Salvar</Button>
          </Group>
        </Stack>
      </Modal>
    </Group>
  );
}

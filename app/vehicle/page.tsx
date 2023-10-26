'use client';

import { Button, Group, Input, Modal, Select, Stack, Title } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

export default function Vehicle() {
  const [openModal, setOpenModal] = useToggle();
  return (
    <Group>
      <Group w="100%" justify="space-between">
        <Title>Veículos</Title>
        <Button onClick={() => setOpenModal()}>Novo veículo</Button>
      </Group>
      <Modal opened={openModal} onClose={setOpenModal} title="Criar veículo">
        <Stack>
          <Input placeholder="Placa" />
          <Select placeholder="Cliente" />
          <Select placeholder="Modelo" />
          <Group justify="end">
            <Button>Salvar</Button>
          </Group>
        </Stack>
      </Modal>
    </Group>
  );
}

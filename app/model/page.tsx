'use client';

import { Button, Group, Input, Modal, Stack, Title } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

export default function Model() {
  const [openModal, setOpenModal] = useToggle();
  return (
    <Group>
      <Group justify="space-between" w="100%">
        <Title>Modelos</Title>
        <Button onClick={() => setOpenModal()}>Novo modelo</Button>
      </Group>
      <Modal opened={openModal} onClose={setOpenModal} title="Criar modelo">
        <Stack>
          <Input placeholder="Nome do modelo" />
          <Group justify="end">
            <Button>Salvar</Button>
          </Group>
        </Stack>
      </Modal>
    </Group>
  );
}

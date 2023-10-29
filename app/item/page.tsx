'use client';

import { ActionIcon, Button, Card, Group, Modal, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { ItemRequest } from '@/core/hooks/item/item.type';
import { useCreateItem, useItems } from '@/core/hooks/item/item.hook';
import ItemModalForm from '@/components/item/ItemModalForm';

export default function Item() {
  const { reset, getInputProps, onSubmit } = useForm<ItemRequest>({
    initialValues: {
      type: 'PART',
      description: '',
      name: '',
      modelIds: [],
    },
  });
  const [modal, setModal] = useToggle();
  const { data } = useItems();
  const { mutateAsync } = useCreateItem();

  const handleCreate = (item: ItemRequest) => {
    mutateAsync(item);
    reset();
    setModal();
  };

  return (
    <Group w="100%">
      <Group justify="space-between" w="100%">
        <Title>Peças e Serviços</Title>
        <Button onClick={() => setModal()}>Nova peça ou serviço</Button>
      </Group>
      {data?.map(({ id, name, description, type }) => (
        <Card key={id} w="100%">
          <Group justify="space-between">
            <Text>{type === 'PART' ? 'Peça' : 'Serviço'}</Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <ActionIcon color="red">
              <IconTrash />
            </ActionIcon>
          </Group>
        </Card>
      ))}
      <Modal opened={modal} onClose={setModal} title="Criar peça ou serviço">
        <form onSubmit={onSubmit(handleCreate)}>
          <ItemModalForm getInputProps={getInputProps} />
        </form>
      </Modal>
    </Group>
  );
}

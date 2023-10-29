'use client';

import {
  ActionIcon,
  Button,
  Card,
  Group,
  Input,
  Modal,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { useCreateVehicle, useVehicles } from '@/core/hooks/vehicle/vehicle.hook';
import { useCustomers } from '@/core/hooks/customer/customer.hook';
import { useModels } from '@/core/hooks/model/model.hook';

export default function Vehicle() {
  const [openModal, setOpenModal] = useToggle();
  const { reset, getInputProps, onSubmit } = useForm<{
    licensePlate: string;
    customerId: number;
    modelId: number;
  }>();
  const { data } = useVehicles();
  const { data: models } = useModels();
  const { data: customerData } = useCustomers();
  const { mutateAsync } = useCreateVehicle();

  const handleCreateVehicle = (vehicleForm: {
    licensePlate: string;
    customerId: number;
    modelId: number;
  }) => {
    mutateAsync(vehicleForm);
    reset();
    setOpenModal();
  };
  return (
    <Group>
      <Group w="100%" justify="space-between">
        <Title>Veículos</Title>
        <Button onClick={() => setOpenModal()}>Novo veículo</Button>
      </Group>
      {data?.map(
        (
          {
            licensePlate,
            model,
            customer,
          }: { licensePlate: string; model: { name: string }; customer: { name: string } },
          index: number
        ) => (
          <Card key={index} w="100%">
            <Group justify="space-between">
              <Text>{`${model.name} ${licensePlate} - ${customer.name}`}</Text>
              <ActionIcon color="red">
                <IconTrash />
              </ActionIcon>
            </Group>
          </Card>
        )
      )}
      <Modal opened={openModal} onClose={setOpenModal} title="Criar veículo">
        <form onSubmit={onSubmit(handleCreateVehicle)}>
          <Stack>
            <Input placeholder="Placa" {...getInputProps('licensePlate')} />
            <Select
              placeholder="Cliente"
              data={customerData?.map(({ name, id }: { name: string; id: number }) => ({
                label: name,
                value: id.toString(),
              }))}
              {...getInputProps('customerId')}
            />
            <Select
              placeholder="Modelo"
              data={models?.map(({ name, id }: { name: string; id: number }) => ({
                label: `${name}`,
                value: id?.toString(),
              }))}
              {...getInputProps('modelId')}
            />
            <Group justify="end">
              <Button type="submit">Salvar</Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Group>
  );
}

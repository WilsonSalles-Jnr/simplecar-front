import {
  Button,
  Checkbox,
  Group,
  MultiSelect,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from '@mantine/core';
import { GetInputProps } from '@mantine/form/lib/types';
import { useItems } from '@/core/hooks/item/item.hook';
import { useVehicles } from '@/core/hooks/vehicle/vehicle.hook';
import { WorkorderRequest } from '@/core/hooks/workorder/workorder.type';

interface Props {
  getInputProps: GetInputProps<WorkorderRequest>;
}

export default function WorkorderModalForm({ getInputProps }: Props) {
  const { data: vehicles } = useVehicles();
  const { data: items } = useItems();

  const vehicleMap = vehicles?.map(({ licensePlate, model, id }) => ({
    label: `${model.name} - ${licensePlate}`,
    value: id.toString(),
  }));

  const itemMap = items?.map(({ name, id }) => ({ label: name, value: id.toString() }));

  return (
    <Stack>
      <Select
        data={[
          { label: 'Aberto', value: 'OPEN' },
          { label: 'Autorizado', value: 'AUTHORIZED' },
          { label: 'Finalizado', value: 'FINISHED' },
          { label: 'Cancelado', value: 'CANCELED' },
        ]}
        {...getInputProps('status')}
      />
      <Select placeholder="Veículo" data={vehicleMap} {...getInputProps('vehicleId')} />
      <MultiSelect placeholder="Peças/Serviços" data={itemMap} {...getInputProps('itemIds')} />
      <SimpleGrid cols={2}>
        <Checkbox label="Amassado" {...getInputProps('smashed', { type: 'checkbox' })} />
        <Checkbox label="Riscado" {...getInputProps('scratrched', { type: 'checkbox' })} />
        <Checkbox label="Quebrado" {...getInputProps('brokenGlass', { type: 'checkbox' })} />
        <Checkbox label="Furo" {...getInputProps('hole', { type: 'checkbox' })} />
      </SimpleGrid>
      <Textarea placeholder="Observações" {...getInputProps('observation')} />
      <Group justify="end">
        <Button type="submit">Salvar</Button>
      </Group>
    </Stack>
  );
}

import { Button, Group, Input, MultiSelect, Select, Stack, Textarea } from '@mantine/core';
import { GetInputProps } from '@mantine/form/lib/types';
import { ItemRequest } from '@/core/hooks/item/item.type';
import { useModels } from '@/core/hooks/model/model.hook';

interface Props {
  getInputProps: GetInputProps<ItemRequest>;
}
export default function ItemModalForm({ getInputProps }: Props) {
  const { data } = useModels();
  const modelsData = data?.map(({ id, name }) => ({
    label: name,
    value: id.toString(),
  }));
  return (
    <Stack>
      <Select
        data={[
          { label: 'Peça', value: 'PART' },
          { label: 'Serviço', value: 'TASK' },
        ]}
        {...getInputProps('type')}
      />
      <Input placeholder="nome" {...getInputProps('name')} />
      <Textarea placeholder="descrição" {...getInputProps('description')} />
      <MultiSelect type="number" data={modelsData} {...getInputProps('modelIds')} />
      <Group justify="end">
        <Button type="submit">Salvar</Button>
      </Group>
    </Stack>
  );
}

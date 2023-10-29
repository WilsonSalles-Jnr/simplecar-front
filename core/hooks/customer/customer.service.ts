import api from '@/core/config/axios';

export async function getCustomers() {
  const result = await api.get('/customer/customers');
  return result.data;
}

export async function createCustomer(data: { name: string; phone: string }) {
  const result = await api.post('customer/', data);
  return result.data;
}

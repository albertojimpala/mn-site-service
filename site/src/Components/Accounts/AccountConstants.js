import React from 'react';
import { Select } from 'antd';

export const aSearchElements = (aClients = []) => [
  {
    label: 'Cliente',
    name: 'client_id',
    placeholder: 'Todos',
    type: 'select',
    values: () => (
      <>
        {aClients?.map(oClient => (
          <Select.Option value={oClient.id} key={oClient.id}>
            {oClient.trade_name}
          </Select.Option>
        ))}
      </>
    ),
  },
  {
    label: 'Estatus',
    name: 'status',
    placeholder: 'Todos',
    type: 'select',
    values: () => (
      <>
        <Select.Option value={1}>Activo</Select.Option>
        <Select.Option value={0}>Inactivo</Select.Option>
      </>
    ),
  },
];

export const oInitState = {
  status: '',
};
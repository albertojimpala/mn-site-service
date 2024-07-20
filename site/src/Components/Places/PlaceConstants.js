import React from 'react';
import { Select } from 'antd';

export const aSearchElements = [
  {
    label: 'Nombre',
    name: 'name',
    or: 'true',
    type: 'input',
  },
  {
    label: 'Tipo',
    name: 'type',
    placeholder: 'Todos',
    type: 'select',
    values: () => (
      <>
        <Select.Option value={0}>Lugar 1</Select.Option>
        <Select.Option value={1}>Lugar 2</Select.Option>
        <Select.Option value={2}>Lugar 3</Select.Option>
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
  name: '',
  description: '',
  type: '',
  status: '',
};

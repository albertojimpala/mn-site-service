import React from 'react';
import { Select } from 'antd';

export const aSearchElements = [
  {
    label: 'Nombre',
    name: 'names',
    or: 'true',
    type: 'input',
  },
  {
    label: 'Apellido Paterno',
    name: 'last_name',
    or: 'true',
    type: 'input',
  },
  {
    label: 'Apellido Materno',
    name: 'mother_name',
    or: 'true',
    type: 'input',
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
  names: '',
  last_name: '',
  mother_name: '',
  status: '',
};

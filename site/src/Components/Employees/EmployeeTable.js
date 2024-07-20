import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  message,
  notification,
  Popconfirm,
  Row,
  Table,
  Tag,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useFetchEmployees } from '../../Hooks/Employee.hook';
import { EmployeeActions } from './EmployeeActions';
import { process, SAVE, UPDATE } from '../../Service/Api';
import { SearchBar } from '../Atoms/SearchBar';
import { generateQueries } from '../../Utils/query';
import { aSearchElements, oInitState } from './EmployeeConstants';

export const EmployeeTable = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [modalLoading, setModalLoading] = useState(false);
  const [search, setSearch] = useState(oInitState);
  const [employees, loading, change, updater] = useFetchEmployees();

  const [formRef] = Form.useForm();

  const _handleDeactivate = async sId => {
    const response = await process(
      UPDATE,
      'employees',
      { status: 0 },
      { id: sId }
    );
    if (response?.ok) {
      message.success('Desactivado correctamente');
      updater();
    } else {
      message.error('Error al desactivar');
    }
  };

  const columns = [
    {
      dataIndex: 'names',
      title: 'Nombre(s)',
    },

    {
      dataIndex: 'last_name',
      title: 'Apellido Paterno',
    },

    {
      dataIndex: 'mother_name',
      title: 'Apellido Materno',
    },

    {
      dataIndex: 'status',
      title: 'Estatus',
      render: status =>
        status ? (
          <Tag color="#87d068">Activo</Tag>
        ) : (
          <Tag color="#f50">Inactivo</Tag>
        ),
    },
    {
      dataIndex: 'id',
      title: 'Acciones',
      render: (_, row) => {
        return (
          <Row>
            <Col>
              <Button
                onClick={() => {
                  setSelected(row);
                  formRef.setFieldsValue(row);
                  setModal(true);
                }}
              >
                <EditOutlined />
              </Button>
              <Popconfirm
                onConfirm={() => _handleDeactivate(row.id)}
                title="Está seguro de desactivar este Empleado?"
              >
                <Button>
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        );
      },
    },
  ];

  const _handleReset = () => {
    setSearch(oInitState);
    change();
  };

  const _handleSearch = () => change(generateQueries(search, aSearchElements));

  const _handleSubmit = async values => {
    setModalLoading(true);
    let response;
    if (selected?.id) {
      response = await process(UPDATE, 'employees', values, {
        id: selected.id,
      });
    } else {
      let oSend = { ...values };
      response = await process(SAVE, 'employees', oSend);
    }
    setModalLoading(false);
    if (response?.ok) {
      message.success('Exito');
      formRef.resetFields();
      setSelected({});
      setModal(false);
      updater();
    } else {
      const { data } = response;
      if (data?.code === 400) {
        let sErrors = '';
        if (Array.isArray(data.errors)) {
          for (const oError of data.errors) {
            if (oError.type === 'unique violation') {
              sErrors += `El valor ${oError.path} ya existe en BD\n`;
            }
          }
        } else {
          for (const sKey in data?.errors) {
            sErrors += data.errors[sKey] + '\n';
          }
        }
        message.error(data?.message);
        if (sErrors !== '') {
          notification.error({
            message: sErrors,
            title: 'Errores',
          });
        }
      } else if (data?.code === 409) {
        message.error('Valor duplicado');
      } else {
        message.error('Error en usuarios');
      }
    }
    setModalLoading(false);
  };

  return (
    <div>
      <Row justify="space-between">
        <Col>
          <h3>Empleados</h3>
        </Col>
        <Col>
          <Button onClick={() => setModal(true)} type="primary">
            Crear
          </Button>
        </Col>
      </Row>
      <EmployeeActions
        fn={{
          handler: setModalLoading,
          handlerSelected: setSelected,
          selected: selected,
        }}
        modal={{
          form: formRef,
          handler: setModal,
          loading: modalLoading,
          submit: _handleSubmit,
          visible: modal,
        }}
      />
      <SearchBar
        elements={aSearchElements}
        handleReset={_handleReset}
        handleSearch={_handleSearch}
        {...{ search, setSearch }}
      />
      <Table
        columns={columns}
        dataSource={employees?.data}
        loading={loading}
        pagination={{
          current: employees.skip / 10 + 1,
          onChange: e => change(employees.queries, (e - 1) * 10),
          pageSizeOptions: [10],
          total: employees.total,
        }}
        rowKey={row => row.id}
      />
    </div>
  );
};

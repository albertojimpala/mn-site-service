import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Input, Row, Select } from 'antd';
import { useFetchCompanies } from '../../Hooks/Company.hook';

export const MachineForm = ({ formRef, onSubmit }) => {
  const [companies, loading] = useFetchCompanies();

  return (
    <Form
      form={formRef}
      layout="vertical"
      name="MachineForm"
      onFinish={onSubmit}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
          <Form.Item label="Nombre" name="name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Descripcion" name="description">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Tipo" name="type">
            <Select>
              <Select.Option value={0}>Ancladora</Select.Option>
              <Select.Option value={1}>Camion</Select.Option>
              <Select.Option value={2}>Jumbo</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Serie" name="serie">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Estatus" name="status">
            <Select>
              <Select.Option value={0}>Inactivo</Select.Option>
              <Select.Option value={1}>Activo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Form.Item label="Compania" name="company_id">
            <Select loading={loading} placeholder="Selecciona una Compania">
              {companies?.data.map(oRol => (
                <Select.Option key={oRol.id} value={oRol.id}>
                  {oRol.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

MachineForm.propTypes = {
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
};

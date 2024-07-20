import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Input, Row, Select } from 'antd';
import { useFetchCompanies } from '../../Hooks/Company.hook';

export const EmployeeForm = ({ formRef, onSubmit }) => {
  const [companies, loading] = useFetchCompanies();

  return (
    <Form
      form={formRef}
      layout="vertical"
      name="ClientForm"
      onFinish={onSubmit}
    >
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item
            label="Nombre(s)"
            name="names"
            rules={[{ required: false }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Apellido Paterno"
            name="last_name"
            rules={[{ required: false }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Apellido Materno"
            name="mother_name"
            rules={[{ required: false }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="RFC"
            name="rfc"
            rules={[{ required: true, message: 'Campo requerido' }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Fecha de Nacimiento"
            name="date_birth"
            rules={[{ required: true, message: 'Campo requerido' }]}
          >
            <Input type="date" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Estatus" name="status">
            <Select placeholder="Selecciona un estatus">
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

EmployeeForm.propTypes = {
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
  oClient: PropTypes.object,
};

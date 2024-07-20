import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { MachineForm } from '../Forms';

export const MachineActions = ({
  fn = {
    handler: () => ({}),
    handlerSelected: () => ({}),
    selected: {},
  },
  modal = {
    form: {},
    handler: () => ({}),
    loading: false,
    submit: () => ({}),
    visible: false,
  },
}) => {
  return (
    <Modal
      cancelText="Cancelar"
      centered
      destroyOnClose
      onCancel={() => {
        fn.handlerSelected({});
        modal.handler(false);
        modal.form.resetFields();
      }}
      onOk={() => modal.form.submit()}
      okText={fn.selected?.id ? 'Actualizar' : 'Crear'}
      okButtonProps={{
        loading: modal.loading,
      }}
      title={fn.selected?.id ? 'Actualizar Equipo' : 'Crear Equipo'}
      visible={modal.visible}
    >
      <MachineForm
        formRef={modal.form}
        onSubmit={modal.submit}
        updating={!fn.selected?.id}
      />
    </Modal>
  );
};

MachineActions.propTypes = {
  fn: PropTypes.any.isRequired,
  modal: PropTypes.shape({
    form: PropTypes.object,
    handler: PropTypes.func,
    loading: PropTypes.bool,
    submit: PropTypes.func,
    visible: PropTypes.bool,
  }),
};

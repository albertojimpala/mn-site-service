import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { RegimeForm } from '../Forms';

export const RegimeActions = ({
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
      title={fn.selected?.id ? 'Actualizar Regimen' : 'Crear Regimen'}
      visible={modal.visible}
    >
      <RegimeForm formRef={modal.form} onSubmit={modal.submit} />
    </Modal>
  );
};

RegimeActions.propTypes = {
  fn: PropTypes.any.isRequired,
  modal: PropTypes.shape({
    form: PropTypes.object,
    handler: PropTypes.func,
    loading: PropTypes.bool,
    submit: PropTypes.func,
    visible: PropTypes.bool,
  }),
};

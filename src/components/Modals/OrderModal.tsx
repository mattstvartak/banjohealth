import { useEffect, useState } from "react";
import { Button, Modal, Typography } from "antd";
import { NewOrderForm } from "../Forms";
import styled from "styled-components";

const { Text } = Typography;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #F7FAFC;
  }

  .ant-modal-header {
    background: transparent;
  }

  .ant-modal-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }

  .ant-modal-close-x {
    display: none;
  }

  .ant-btn {
    margin: 28px 0;
  }

  label {
    color: #425466;
    font-weight: 500;
  }
`

export const OrderModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

    /**
     * Updates modal state.
     */
  const showModal = () => {
    setOpen(true);
  };

  /**
   * Closes modal and disables loading state.
   * @param done boolean
   */
  const handleOk = (done: boolean) => {
    if (!done) setConfirmLoading(true);
    if (done) {
      setConfirmLoading(false)
      setOpen(false);
    }
  };

  /**
   * Updates modal state on cancel.
   */
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{ float: "right" }}
        type='primary'
        onClick={() => showModal()}
      >
        New Order
      </Button>
      <StyledModal
        title='Create New Order'
        open={open}
        okButtonProps={{ htmlType: "submit", form: "new-order-form" }}
        okText='Submit'
        forceRender
        destroyOnClose={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Text type='secondary' style={{ textAlign: 'center',  display: 'block', margin: '12px 0 46px 0' }}>
          Fill out the required information to create a new order.
        </Text>
        <NewOrderForm onSubmit={handleOk} />
      </StyledModal>
    </>
  );
};

export default OrderModal;

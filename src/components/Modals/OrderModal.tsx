import { useEffect, useState } from "react";
import { Button, Modal, Typography } from "antd";
import { NewOrderForm } from "../Forms";

const { Text } = Typography;

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
      <Modal
        title='Create New Order'
        open={open}
        okButtonProps={{ htmlType: "submit", form: "new-order-form" }}
        okText='Submit'
        forceRender
        destroyOnClose={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Text type='secondary'>
          Fill out the required information to create a new order.
        </Text>
        <NewOrderForm onSubmit={handleOk} />
      </Modal>
    </>
  );
};

export default OrderModal;

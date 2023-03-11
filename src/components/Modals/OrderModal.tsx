import { useEffect, useState } from "react";
import { Button, Modal, Typography } from "antd";
import { NewOrderForm } from "../Forms";

const { Text } = Typography;

export const OrderModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (done: boolean) => {
    if (!done) setConfirmLoading(true);
    if (done) {
      setOpen(false);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{ float: "right" }}
        type='primary'
        onClick={() => showModal()}
      >
        Add Order
      </Button>
      <Modal
        title='Create New Order'
        open={open}
        okButtonProps={{ htmlType: "submit", form: "new-order-form" }}
        okText='Submit'
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

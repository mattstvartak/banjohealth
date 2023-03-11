import { useEffect, useState } from "react";
import { Modal, Typography } from "antd";
import { NewOrderForm } from "../Forms";

const { Text } = Typography;

interface Props {
  triggerModal: boolean | false;
  resetTrigger: Function;
}

export const OrderModal = ({ triggerModal, resetTrigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    if (triggerModal) showModal();
  }, [triggerModal]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (done: boolean) => {
    if (!done) setConfirmLoading(true);
    if (done) {
      setOpen(false);
      resetTrigger(false);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    resetTrigger(false);
  };

  return (
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
      <p>{modalText}</p>
    </Modal>
  );
};

export default OrderModal;

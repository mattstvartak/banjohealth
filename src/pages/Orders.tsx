import { useState } from "react";
import styled from "styled-components";
import { Col, Button, Row } from "antd";
import { OrderModal } from "../components/Modals";
import { OrdersTable } from "../components/Tables";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 20px;
`;

const Orders = () => {
  const [modalOpenState, setOrderModalState] = useState(false);

  const resetTrigger = () => {
    setOrderModalState(false);
  };

  return (
    <Wrapper>
      <Row justify='space-evenly'>
        <Col span='12'>Orders</Col>
        <Col span='12'>
          <Button
            style={{ float: "right" }}
            type='primary'
            onClick={() => setOrderModalState(true)}
          >
            Add Order
          </Button>
          <OrderModal
            resetTrigger={resetTrigger}
            triggerModal={modalOpenState}
          />
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <OrdersTable />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Orders;

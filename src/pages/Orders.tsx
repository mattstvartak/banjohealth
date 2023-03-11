import styled from "styled-components";
import { Col, Row } from "antd";
import { OrderModal } from "../components/Modals";
import { OrdersTable } from "../components/Tables";
const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 20px;
`;

const Orders = () => {
  return (
    <Wrapper>
      <Row justify='space-evenly'>
        <Col span='12'>Orders</Col>
        <Col span='12'>
          <OrderModal />
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

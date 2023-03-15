import styled from "styled-components";
import { Col, Row } from "antd";
import { OrderModal } from "../components/Modals";
import { OrdersTable } from "../components/Tables";
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 20px;
`;

const Orders = () => {
  return (
    <Wrapper>
      <Row>
        <Col span='24'>
          <OrdersTable />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Orders;

import { API, graphqlOperation } from "aws-amplify";
import { listOrders } from "../../graphql/queries";
import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { Order } from "../../API";
import { Col, Row, Table } from "antd";
import { OrderModal } from "../Modals";

const OrdersTable = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    /**
     * Retrieves orders from the API.
     */
    const getOrders = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listOrders));
        setData(res);
      } catch (err: unknown) {
        console.log("Error: ", err);
      }
    };

    if (!data) getOrders();
  }, []);

  const columns: ColumnsType<Order> = [
    {
      title: "Team Member",
      dataIndex: "teamMember",
      key: "teamMember",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Order Number",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
  ];

  if (!data) return <>Loading...</>;

  return (
    <>
      {data.data.listOrders.items && (
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          title={() => (
            <Row justify='space-evenly'>
              <Col span='12'>Orders</Col>
              <Col span='12'>
                <OrderModal />
              </Col>
            </Row>
          )}
          dataSource={data.data.listOrders.items}
        />
      )}
    </>
  );
};

export default OrdersTable;

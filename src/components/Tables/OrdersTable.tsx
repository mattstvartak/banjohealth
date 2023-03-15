import { API, graphqlOperation } from "aws-amplify";
import { listOrders } from "../../graphql/queries";
import { useEffect, useState } from "react";
import * as subscriptions from '../../graphql/subscriptions';
import { GraphQLSubscription, GraphQLQuery } from '@aws-amplify/api';
import { Col, Row, Table } from "antd";
import { OrderModal } from "../Modals";
import styled from 'styled-components';
import dayjs from 'dayjs';
import { ListOrdersQuery, OnCreateOrderSubscription } from "../../API";

const StyledTable = styled(Table)`
    .ant-table {
      border-radius: 16px 16px 0 0 !important;
    }

    .ant-table-title {
      border-radius: 16px 16px 0 0 !important;
      padding: 16px 13px 16px 24px;
    }

    .ant-table-thead {
      background-color: #FAFAFB;
      border-top: 1px solid #EDF2F7;
      color: #8492A6 !important;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: bold !important;
    }

    .ant-table-pagination.ant-table-pagination {
      display: block;
      background-color: #fff;
      margin: 0;
      padding: 16px 24px;
      border-radius: 0 0 16px 16px;
      text-align: right;
    }

    .ant-pagination-total-text {
      float: left;
    }

    td, th {
      padding: 15px 16px !important;

      &:first-child {
        padding-left: 24px !important;
      }

      &:last-child {
        padding-right: 24px !important;
      }
    }

    tr:not(thead > tr) {
      font-size: 14px;
      padding: 0 14px;

      td:nth-child(2) {
        text-transform: lowercase;
        text-transform: capitalize;
      }

      td:first-child, td:nth-child(4) {
        font-size: 12px; 
        font-weight: bold;
      }
    }

    .alert {
      border-radius: 100%;
      display: inline-block;
      height: 10px;
      margin-right: 12px;
      width: 10px;
      &-high {
        background-color: #F16063;
      }
      &-med {
        background-color: #F7936F;
      }
      &-low {
        background-color: #66CB9F;
      }
    }
`;

const OrdersTable = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    /**
     * Retrieves orders from the API.
     */
    const getOrders = async () => {
      await API.graphql<GraphQLQuery<ListOrdersQuery>>(graphqlOperation(listOrders))
      .then((data: { [key: string]: any } | null) => {
        if ( data ) setData(data.data.listOrders.items)
      })
      .catch(err => console.warn(err));
    };

    if (!data) getOrders();
  }, []);

  const getPriorityColor = (text: string) => {
    switch (text) {
      case 'HIGH':
        return (
          <span className="alert alert-high"></span>
        )
      case 'LOW':
        return (
          <span className="alert alert-low"></span>
        )
      default:
        return (
          <span className="alert alert-med"></span>
        )
    }
  }

  const columns = [
    {
      title: "Team Member",
      dataIndex: "teamMember",
      key: "teamMember",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (text: string) => (
        <>{getPriorityColor(text)}{text.toLowerCase()}</>
      ),
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
      render: (text: string) => (
        <>{dayjs(text).format('MM/DD/YYYY')}</>
      )
    },
  ];

  if (!data) return <>Loading...</>;

  API.graphql<GraphQLSubscription<OnCreateOrderSubscription>>(
    graphqlOperation(subscriptions.onCreateOrder)
  ).subscribe({
    next: ({ value }) => setData([...data, value.data?.onCreateOrder]),
    error: (error) => console.warn(error)
  });

  return (
    <>
      {data && (
        <StyledTable
          rowKey={(record: {[key: string]: any}) => record.id}
          columns={columns}
          title={() => (
            <Row justify='space-evenly'>
              <Col span='12' style={{ fontWeight: 'bold', fontSize: '14px', padding: '7px 0'}}>Orders</Col>
              <Col span='12'>
                <OrderModal />
              </Col>
            </Row>
          )}
          dataSource={[...data]}
          pagination={{
            defaultPageSize: 10,
            hideOnSinglePage: true,
            showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} results found`
          }}
        />
      )}
    </>
  );
};

export default OrdersTable;

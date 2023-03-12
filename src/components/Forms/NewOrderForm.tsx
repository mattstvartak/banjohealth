import { Form, Input, Select, DatePicker } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";

interface Props {
  onSubmit: Function;
}
export const NewOrderForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm();

  const onPass = async (values: { [key: string]: any }) => {
    try {
      onSubmit(false);
      await API.graphql(
        graphqlOperation(createOrder, {
          input: {
            teamMember: values.teamMember,
            priority: values.priority,
            team: values.team,
            dueDate: values.dueDate["$d"],
          },
        })
      );
      form.resetFields();
      onSubmit(true);
    } catch (err: unknown) {
      console.log("Error: ", err);
    }
  };

  return (
    <Form
      id='new-order-form'
      autoComplete='off'
      labelCol={{ span: 24 }}
      layout='vertical'
      name='New Order Form'
      wrapperCol={{ span: 24 }}
      onFinish={(values) => onPass(values)}
    >
      <Form.Item
        label='Team Member Name'
        name='teamMember'
        rules={[
          { required: true, message: "Please input a team member name." },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Priority'
        name='priority'
        rules={[{ required: true, message: "Please select a priority." }]}
      >
        <Select
          options={[
            { value: "HIGH", label: "High" },
            { value: "MEDIUM", label: "Medium" },
            { value: "LOW", label: "Low" },
          ]}
        />
      </Form.Item>
      <Form.Item
        label='Team'
        name='team'
        rules={[{ required: true, message: "Please select a team." }]}
      >
        <Select
          options={[
            { value: "RED", label: "Red" },
            { value: "GREEN", label: "Green" },
            { value: "BLUE", label: "Blue" },
            { value: "YELLOW", label: "Yellow" },
          ]}
        />
      </Form.Item>
      <Form.Item
        label='Due Date'
        name='dueDate'
        rules={[{ required: true, message: "Please select a due date." }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
    </Form>
  );
};

export default NewOrderForm;

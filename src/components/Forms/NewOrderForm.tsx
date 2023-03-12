import { Form, Input, Select, DatePicker } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";
import { Priority, Team } from "../../API";

interface Props {
  onSubmit: Function;
}
export const NewOrderForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm();

  const onPass = async (values: { [key: string]: any }) => {
    const date = new Date(values.dueDate["$d"]).toISOString().split('T')[0] + "Z";

    try {
      onSubmit(false);
      await API.graphql(
        graphqlOperation(createOrder, {
          input: {
            teamMember: values.teamMember,
            priority: values.priority,
            team: values.team,
            dueDate: date,
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
      form={form}
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
            { value: Priority.HIGH , label: "High" },
            { value: Priority.MEDIUM, label: "Medium" },
            { value: Priority.LOW, label: "Low" },
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
            { value: Team.RED, label: "Red" },
            { value: Team.GREEN, label: "Green" },
            { value: Team.BLUE, label: "Blue" },
            { value: Team.YELLOW, label: "Yellow" },
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

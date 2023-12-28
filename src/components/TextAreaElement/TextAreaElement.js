import { Form, Input } from "antd";

export default function TextAreaElement({
  name,
  label = "",
  placeholder = "",
  rules = [{ required: false, message: "" }],
  size = "defualt",
  className = "",
  row = 3,
}) {
  const { TextArea } = Input;
  return (
    <Form.Item className={className} name={name} label={label} rules={rules}>
      <TextArea rows={row} size={size} placeholder={placeholder} />
    </Form.Item>
  );
}

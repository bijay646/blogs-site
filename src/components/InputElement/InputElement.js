import { Form, Input } from "antd";

export default function InputElement({
  name,
  label = "",
  placeholder = "",
  rules = [{ required: false, message: "" }],
  size = "defualt",
  className = "",
}) {
  return (
    <Form.Item className={className} name={name} label={label} rules={rules}>
      <Input size={size} placeholder={placeholder} className="py-[0.4rem]" />
    </Form.Item>
  );
}

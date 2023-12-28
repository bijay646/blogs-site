import { Form, InputNumber } from "antd";

export default function InputNumberElement({
  name,
  label = "",
  placeholder = "",
  rules = [{ required: false, message: "" }],
  size = "defualt",
  className = "",
}) {
  return (
    <Form.Item className={className} name={name} label={label} rules={rules}>
      <InputNumber
        type="number"
        className="w-full b-[1px]"
        size={size}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}

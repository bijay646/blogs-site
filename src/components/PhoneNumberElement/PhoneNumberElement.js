import { Form } from "antd";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneNumberElement({
  name,
  label = "",
  placeholder = "",
  rules = [{ required: false, message: "" }],
  className = "",
}) {
  return (
    <Form.Item label={label} className={className} name={name} rules={rules}>
      <PhoneInput placeholder={placeholder} defaultCountry="np" />
    </Form.Item>
  );
}

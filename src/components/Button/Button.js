import { Button } from "antd";

export default function ButtonElement({
  name,
  buttonType = "primary",
  buttonHtmlType = "button",
  size = "default",
  handleSubmit = () => {},
}) {
  return (
    <Button
      className="bg-blue-500 w-fit"
      size={size}
      onClick={handleSubmit}
      type={buttonType}
      htmlType={buttonHtmlType}
    >
      {name}
    </Button>
  );
}

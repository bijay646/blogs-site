import { Form, message } from "antd";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import emailjs from "@emailjs/browser";

import {
  ButtonElement,
  InputElement,
  TextAreaElement,
  PhoneNumberElement,
} from "components";

export default function ContactUs({ contactUsRef }) {
  const [form] = Form.useForm();
  const handleSubmitMessage = (values) => {
    message.success("Email send Successfully");
    form.resetFields();
    emailjs
      .sendForm(
        "service_fsdkfhs",
        "template_hfdjskh",
        {
          user_name: values.firstName + values.lastName,
          user_email: values.email,
          message: values.message,
        },
        "fshdjfhskjdhffsd"
      )
      .then(
        (result) => {
          alert("succeess");
          console.log(result.text);
        },
        (error) => {
          alert("failure");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-6 px-3 sm:px-20 lg:px-44 py-7" ref={contactUsRef}>
      <div className="flex flex-row items-center gap-6 mb-6">
        <span className="w-12 border-2 border-solid border-blue-600 h-0 rounded-full"></span>
        <span className="text-4xl font-semibold">Contact Us</span>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-3 gap-12 ">
        <Form
          form={form}
          onFinish={handleSubmitMessage}
          layout="vertical"
          className="lg:col-span-1 md:col-span-2 grid md:grid-cols-2 grid-cols-1 md:gap-x-[1rem] "
        >
          <InputElement
            name="firstName"
            label="First name"
            placeholder="Firstname"
            rules={[
              { required: true, message: "Firstname is Required" },
              { min: 3, message: "Minimum 3 Character is Reuqired" },
            ]}
          />
          <InputElement
            name="lastName"
            label="Last name"
            placeholder="Lastname"
            rules={[
              { required: true, message: "Lastname is Required" },
              { min: 3, message: "Minimum 3 Character is Reuqired" },
            ]}
          />
          <InputElement
            name="email"
            label="Email address"
            placeholder="Email address"
            rules={[
              { required: true, message: "Email address is Required" },
              { type: "email", message: "Please enter a valid Email" },
            ]}
            className="md:col-span-2"
          />
          <PhoneNumberElement
            name="phoneNumber"
            label="Phone number"
            className="md:col-span-2"
            placeholder="Phone number"
            rules={[{ max: 14, message: "Phone number must be 10 digits" }]}
          />

          <TextAreaElement
            name="message"
            label="Message"
            placeholder="...."
            className="md:col-span-2"
            rules={[{ required: true, message: "Message is Required" }]}
            row={3}
          />
          <ButtonElement name="Send Message" buttonHtmlType="submit" />
        </Form>

        <div className="flex flex-col gap-3">
          {layoutContact(
            <HomeOutlined className="text-xl text-gray-400 bg-[#EEF5FF] rounded-full p-3" />,
            "Kathmandu, New Baneshwor, 44600"
          )}
          {layoutContact(
            <PhoneOutlined className="text-xl text-gray-400 bg-[#EEF5FF] rounded-full p-3" />,
            "+01 98765432"
          )}
          {layoutContact(
            <MailOutlined className="text-xl text-gray-400 bg-[#EEF5FF] rounded-full p-3" />,
            "dummy@gmail.com"
          )}
        </div>
      </div>
    </div>
  );
}

export const layoutContact = (Icon, content) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {Icon}
      <span className="text-[1.1rem] ">{content}</span>
    </div>
  );
};

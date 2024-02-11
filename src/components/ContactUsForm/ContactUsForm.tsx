import React, { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  ContactUsFormWrapper,
  Title,
  FormGroup,
  Label,
  Input,
  Textarea,
  Content,
  SubmitButton,
  Loader,
} from "./ContactUsForm.styled";
import Container from "../Container/Container";
import Button from "../Button/Button.styled";
import { useRouter } from "next/router";

interface ContactUsFormState {
  name: { name: string; value: string };
  email: { name: string; value: string };
  message: { name: string; value: string };
}

interface ContactUsFormProps {}

const ContactUsForm: FC<ContactUsFormProps> = () => {
  const { t } = useTranslation("home");
  const router = useRouter();
  const [value, setValue] = useState<ContactUsFormState>({
    name: { name: "name", value: "" },
    email: { name: "email", value: "" },
    message: { name: "message", value: "" },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value: newValue, name } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name as keyof ContactUsFormState],
        value: newValue,
      },
    }));
  };
  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const { name, email, message } = value;
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    if (isSubmitting) return <Loader />;
    if (isSuccess)
      return (
        <div>
          <p style={{ fontSize: 50 }}>{t("contact.thankyou")}</p>
          <Button
            onClick={() => {
              router.push("/");
            }}
            style={{ width: "100%" }}
          >
            {t("contact.goback")}
          </Button>
        </div>
      );
    return (
      <>
        <form onSubmit={submitFormHandler}>
          <FormGroup>
            <Label>{t("contact.name")}</Label>
            <Input
              value={value.name.value}
              name={value.name.name}
              required
              minLength={2}
              type="text"
              onChange={changeInputHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>{t("contact.email")}</Label>
            <Input
              value={value.email.value}
              name={value.email.name}
              required
              type="email"
              onChange={changeInputHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>{t("contact.message")}</Label>
            <Textarea
              value={value.message.value}
              name={value.message.name}
              maxLength={1000}
              rows={10}
              onChange={changeInputHandler}
            />
          </FormGroup>
          <SubmitButton>{t("contact.btn")}</SubmitButton>
        </form>
      </>
    );
  };

  return (
    <ContactUsFormWrapper>
      <Container>
        <Title>{t("nav.contact")}</Title>
        <Content>{renderContent()}</Content>
      </Container>
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;

import React from "react";
import { AppInput } from "../components/UI/AppInput";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { AppCheckbox } from "../components/UI/AppCheckbox";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const regexUzbNumber = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const acceptFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUzbNumber, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  publicOffer: yup.boolean().required("Обязательное поле!"),
  agreePublicOffer: yup.boolean().required("Обязательное поле!"),
});

export const AcceptPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      publicOffer: false,
      agreePublicOffer: false,
    },
  });

  const onAcceptSubmit = (data) => {
    console.table(data);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="AcceptPage">
          <Heading
            headingType="h1"
            text="АКЦЕПТ на предложение о заключении договора"
          />
          <form onSubmit={handleSubmit(onAcceptSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <AppInput
                  inputLabel="Ф.И.:"
                  inputPlaceholder="Ваш ответ"
                  inputType="text"
                  errorMessage={errors.username?.message}
                  hasError={errors.username ? true : false}
                  {...field}
                />
              )}
            />
            <Controller
              name="userphone"
              control={control}
              render={({ field }) => (
                <AppInput
                  inputLabel="Номер телефона"
                  inputPlaceholder="+998 9- --- -- -- "
                  inputType="tel"
                  errorMessage={errors.userphone?.message}
                  hasError={errors.userphone ? true : false}
                  {...field}
                />
              )}
            />
            <Controller
              name="publicOffer"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <AppCheckbox
                  checkboxLabel="Ознакомился с публичной офертой"
                  {...field}
                />
              )}
            />
            <Controller
              name="agreePublicOffer"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <AppCheckbox
                  checkboxLabel="Согласен с условиями публичной оферты"
                  {...field}
                />
              )}
            />
            <Button
              buttonText="Далее"
              isDisabled={!!Object.keys(errors).length}
              buttonType="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

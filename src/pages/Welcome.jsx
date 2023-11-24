import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
// import { LinkButton } from "../components/LinkButton";
import { Input } from "../components/Input";

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
});

const Welcome = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
    },
  });

  const onAcceptSubmit = (data) => {
    console.table(data);
  };

  const navigate = useNavigate();

  // const [nameValue, setNameValue] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");

  // const [nameError, setNameError] = useState(false);
  // const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    if (!!!Object.keys(errors).length) {
      navigate("/step-one");
    }
  };

  // const validateName = () => {
  //   if (!nameValue) {
  //     setNameError(true);
  //   } else {
  //     setNameError(false);
  //   }
  // };
  // const validatePhone = () => {
  //   if (!phoneValue) {
  //     setPhoneError(true);
  //   } else {
  //     setPhoneError(false);
  //   }
  // };

  // const handleNameInput = (value) => {
  //   setNameValue(value);
  //   validateName();
  // };
  // const handlePhoneInput = (value) => {
  //   setPhoneValue(value);
  //   validatePhone();
  // };

  // const clickHandler = () => {
  //   validateName();
  //   validatePhone();

  // };

  goToNextPage();
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form
            className="welcome__form"
            onSubmit={handleSubmit(onAcceptSubmit)}
          >
            {/* <Input
              hasError={nameError}
              value={nameValue}
              onChange={(value) => handleNameInput(value)}
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            /> */}
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  inputLabel="Ваше имя"
                  inputPlaceholder="Ваш ответ"
                  inputType="text"
                  errorMessage={errors.username?.message}
                  hasError={errors.username ? true : false}
                  {...field}
                  isRequired
                />
              )}
            />
            <label className="input-wrapper" htmlFor="username">
              <Controller
                name="userphone"
                control={control}
                render={({ field }) => (
                  <Input
                    errorMessage={errors.userphone?.message}
                    hasError={errors.userphone ? true : false}
                    // onChange={(value) => handlePhoneInput(value)}
                    isRequired
                    inputLabel="Ваш номер"
                    inputPlaceholder="+998 9- --- -- --"
                    {...field}
                  />
                )}
              />
            </label>
            <Button
              buttonType="submit"
              buttonText="Далее"
              isDisabled={!!Object.keys(errors).length}
              goToNextPage={!!Object.keys(errors).length}
              // onClick={clickHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

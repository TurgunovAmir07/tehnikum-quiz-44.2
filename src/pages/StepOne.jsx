import React from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";
// import { LinkButton } from "../components/LinkButton";
// import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../components/Button";

const acceptFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
});

const StepOne = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onAcceptSubmit = (data) => {
    console.table(data);
  };

  // const navigate = useNavigate();

  // const [phoneValue, setPhoneValue] = useState("");
  // const [phoneError, setPhoneError] = useState(false);

  // const goToNextPage = () => {
  //   if (phoneError) {
  //     navigate("/step-two");
  //   }
  // };

  // const validatePhone = () => {
  //   if (phoneValue) {
  //     setPhoneError(true);
  //   } else {
  //     setPhoneError(false);
  //   }
  // };

  // const handlePhoneInput = (value) => {
  //   setPhoneValue(value);
  //   validatePhone();
  // };

  // const clickHandler = () => {
  //   validatePhone();

  //   goToNextPage();
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          {/* <div className="indicator"> */}
          {/* <div className="indicator__text"> */}
          {/* <span className="indicator__description"> */}
          {/* Скидка за прохождение опроса: */}
          {/* </span> */}
          {/* <span className="indicator__value">15%</span> */}
          {/* </div> */}
          {/* <div className="indicator__progressbar"> */}
          {/* <div className="indicator__unit indicator__unit-1"></div> */}
          {/* <div className="indicator__unit indicator__unit-2"></div> */}
          {/* <div className="indicator__unit indicator__unit-3"></div> */}
          {/* <div className="indicator__unit indicator__unit-4"></div> */}
          {/* </div> */}
          {/* </div> */}
          <ProgressBar currentStep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <form
              className="welcome__form"
              onSubmit={handleSubmit(onAcceptSubmit)}
            >
              <label className="input-wrapper">
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input
                      // hasError={phoneError}
                      // value={phoneValue}
                      // onChange={(value) => handlePhoneInput(value)}
                      isRequired
                      type="text"
                      id="answer"
                      inputPlaceholder="Ваш ответ"
                      errorMessage={errors.username?.message}
                      hasError={errors.username ? true : false}
                      {...field}
                    />
                  )}
                />
              </label>
              <Button
                // id="next-btn"
                // buttonText="Далее"
                // onClick={clickHandler}
                // isDisabled={!!Object.keys(errors).length}
                // path="/step-two"
                // type="button"
                buttonType="submit"
                buttonText="Далее"
                isDisabled={!!Object.keys(errors).length}
                goToNextPage={!!Object.keys(errors).length}
              />
            </form>
            {/* <Button id="next-btn" buttonText="Далее" onClick={clickHandler} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;

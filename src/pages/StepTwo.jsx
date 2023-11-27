import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const variants = [
  {
    id: "variant-1",
    AnswerLabel: "Ответ №1",
  },
  {
    id: "variant-2",
    AnswerLabel: "Ответ №2",
  },
  {
    id: "variant-3",
    AnswerLabel: "Ответ №3",
  },
  {
    id: "variant-4",
    AnswerLabel: "Ответ №4",
  },
];

const acceptFormSchema = yup.object({
  useranswer: yup.mixed().oneOf(
    variants.map((v) => v.id),
    "Обязательное поле!"
  ),
});

const StepTwo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      useranswer: "",
    },
  });

  const onAcceptSubmit = (data) => {
    console.table(data);
  };

  const useranswer = watch("useranswer");

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onAcceptSubmit)}>
              <ul className="variants">
                {variants.map((elem) => (
                  <Controller
                    name="useranswer"
                    control={control}
                    render={({ field }) => (
                      <AnswerItem
                        key={elem.id}
                        id={elem.id}
                        AnswerLabel={elem.AnswerLabel}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        isRequired
                        errorMessage={errors.useranswer?.message}
                        hasError={errors.useranswer ? true : false}
                      />
                    )}
                  />
                ))}
              </ul>
              {useranswer && errors.useranswer && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginBottom: "20px",
                    display: useranswer ? "none" : "block",
                  }}
                >
                  {errors.useranswer.message}
                </p>
              )}

              <Button
                buttonType="submit"
                buttonText="Далее"
                isDisabled={!useranswer}
                onClick={() => trigger("useranswer")}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;

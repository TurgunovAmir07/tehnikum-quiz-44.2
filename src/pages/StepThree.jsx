import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItemImg } from "../components/AnswerItemImg";
import { Button } from "../components/Button";
import { Controller, useForm } from "react-hook-form";

const variants = [
  {
    id: "variant-1",
    AnswerLabel: "Ваш ответ 1",
    imgSrc: "./img/laugh.png",
    imgAlt: "laugh",
  },
  {
    id: "variant-2",
    AnswerLabel: "Ваш ответ 2",
    imgSrc: "./img/hearts.png",
    imgAlt: "hearts",
  },
  {
    id: "variant-3",
    AnswerLabel: "Ваш ответ 3",
    imgSrc: "./img/smirk.png",
    imgAlt: "smirk",
  },
  {
    id: "variant-4",
    AnswerLabel: "Ваш ответ 4",
    imgSrc: "./img/fright.png",
    imgAlt: "fright",
  },
];

const StepThree = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({
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
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Heading text="3. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onAcceptSubmit)}>
              <ul className="emoji-variants">
                {variants.map((elem) => (
                  <Controller
                    name="useranswer"
                    control={control}
                    render={({ field }) => (
                      <AnswerItemImg
                        key={elem.id}
                        id={elem.id}
                        AnswerLabel={elem.AnswerLabel}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        imgSrc={elem.imgSrc}
                        imgAlt={elem.imgAlt}
                      />
                    )}
                  />
                ))}
              </ul>
              <Button
                id="next-btn"
                buttonText="Далее"
                onClick={() => trigger("useranswer")}
                path="/step-four"
                type="button"
                isDisabled={!useranswer}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;

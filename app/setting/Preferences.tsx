import Input from "@/components/Input";
import Switch from "react-switch";
import React from "react";
import { useForm } from "react-hook-form";

interface Pref {
  currency: string;
  timezone: string;
}

const Preferences = () => {
  const { register, handleSubmit, formState } = useForm<Pref>();
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);

  const { errors } = formState;
  return (
    <div className="">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(() => {})}>
        <div className="flex justify-between gap-7">
          <div className="w-full">
            <Input<Pref>
              field="Currency"
              namee="currency"
              placeholder="USD"
              regex={/^[A-Za-z0-9\s]+$/}
              regexMsg="Incorrect currency format. Only letters, numbers, and spaces are allowed."
              minLength={1}
              requiredMsg="Currency field is required"
              errors={errors}
              register={register}
              mode="input"
            />
          </div>
          <div className="w-full">
            <Input<Pref>
              field="Timezone"
              namee="timezone"
              placeholder="GMT+8"
              regex={/^[A-Za-z0-9\s]+$/}
              regexMsg="Incorrect timezone format. Only letters, numbers, and spaces are allowed."
              minLength={1}
              requiredMsg="Timezone field is required"
              errors={errors}
              register={register}
              mode="input"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Notification</h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-5">
              <Switch
                onChange={() => setChecked1(!checked1)}
                checked={checked1}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#86efac"
              />
              <span>I send or receive digital currency</span>
            </label>
            <label className="flex items-center gap-5">
              <Switch
                onChange={() => setChecked2(!checked2)}
                checked={checked2}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#86efac"
              />
              <span>I receive merchant order</span>
            </label>
            <label className="flex items-center gap-5">
              <Switch
                onChange={() => setChecked3(!checked3)}
                checked={checked3}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#86efac"
              />
              <span>There are recommendation for my account</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-lg p-2 px-16 self-end"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Preferences;

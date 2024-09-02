import Input from "@/components/Input";
import React from "react";
import { useForm } from "react-hook-form";
import Switch from "react-switch";

interface Pass {
  password: string;
  newPassword: string;
}

const Security = () => {
  const [twoFactor, setTwoFactor] = React.useState(true);
  const { register, handleSubmit, formState } = useForm<Pass>();
  const { errors } = formState;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h2 className="text-slate-700">Two-factor Authentication</h2>
        <label className="flex items-center gap-5">
          <Switch
            onChange={() => setTwoFactor(!twoFactor)}
            checked={twoFactor}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#86efac"
          />
          <span>Enable or disable two factor authentication</span>
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-700">Change Password</h2>
        <form className="flex flex-col " onSubmit={handleSubmit(() => {})}>
          <div className="w-1/2">
            <Input<Pass>
              field="Current Password"
              namee="password"
              placeholder="********"
              regex={/^[A-Za-z0-9\s]+$/}
              regexMsg="Incorrect password format. Only letters, numbers, and spaces are allowed."
              minLength={6}
              requiredMsg="Password field is required"
              errors={errors}
              register={register}
              mode="password"
            />
          </div>
          <div className="w-1/2">
            <Input<Pass>
              field="New Password"
              namee="newPassword"
              placeholder="********"
              regex={/^[A-Za-z0-9\s]+$/}
              regexMsg="Incorrect password format. Only letters, numbers, and spaces are allowed."
              minLength={6}
              requiredMsg="Password field is required"
              errors={errors}
              register={register}
              mode="password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-lg p-2 px-16 self-end"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Security;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Toaster from "./Toaster";
import Arc from "../assets/arc.png";

interface IRegister {
  fullName: string;
  email: string;
  phone: string;
}

const Register = () => {
  const initialValue: IRegister = { fullName: "", email: "", phone: "" };
  const [register, setRegister] = useState<IRegister>(initialValue);
  const [errors, setErrors] = useState<any>({});
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const emailRegex =
    /^([a-zA-Z0-9_\-+'])+(\.[a-zA-Z0-9_\-+']+)*@((([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,15}))\s*$/i;

  const inputClassNames = (value: string) => {
    const inputText = `w-70 rounded-md bg-[#E6E8DD] p-2`;
    const className = "bg-red-100";

    return errors[value] ? `${inputText} ${className}` : inputText;
  };

  const validateInput = () => {
    const newErrors = { ...errors };
    newErrors.fullName = register?.fullName?.trim().length > 0 ? false : true;
    newErrors.phone = register?.phone?.trim().length > 0 ? false : true;

    if (register?.email?.length > 0) {
      if (emailRegex.test(register.email)) {
        newErrors.email = false;
      } else {
        newErrors.email = true;
      }
    } else {
      newErrors.email = true;
    }

    setErrors(newErrors);

    return !(newErrors.fullName || newErrors.email || newErrors.phone);
  };

  const handleChange = (e: any) => {
    const {
      target: { name: name, value: value },
    } = e;

    setRegister({ ...register, [name]: value });
  };

  const handleClick = () => {
    const isValid = validateInput();
    if (isValid) {
      setDisabled(true);
      setOpen(true);
      setTimeout(function () {
        setDisabled(false);
        setOpen(false);
      }, 3000);
    }
  };

  const link = "hover:text-amber-800";

  return (
    <div className="relative h-full bg-amber-950 opacity-80">
      <div className="h-full bg-[#EEEEE7] p-5 max-md:rounded-t-3xl md:rounded-l-3xl">
        <div className="flex h-full flex-col justify-between gap-20">
          <div className="flex h-0">
            <div>&nbsp;</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <div className="flex justify-center py-5">
                <div className="pt-1">
                  <img src={Arc} alt="arc" className="h-10" />
                </div>
                <div className="flex flex-col pl-1">
                  <div className="font-bold">CHALMERS</div>
                  <div>APARTMENTS</div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[80%] text-center">
                  A unique opportunity to live in Edinburgh's UNESCO World
                  Heritage site.
                </div>
              </div>
              <div className="flex justify-center py-5">
                <div className="w-[50%] text-center text-sm font-bold">
                  27 ONE, TWO AND THREE BED APARTMENTS
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center">
                  <input
                    className={inputClassNames("fullName")}
                    maxLength={150}
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    className={inputClassNames("email")}
                    maxLength={150}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    className={inputClassNames("phone")}
                    maxLength={25}
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="w-70 rounded-md bg-[#222222] p-2 text-white hover:bg-orange-950 disabled:bg-gray-400"
                    disabled={disabled}
                    onClick={handleClick}
                    type="button"
                  >
                    REGISTER INTEREST
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-10">
            <a href="#" className={link}>
              Privacy Policy
            </a>
            <a href="#" className={link}>
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
      <Toaster open={open} />
    </div>
  );
};

export default Register;

import { useEffect, useState } from "react";

type Props = { open: boolean };

const Toaster = ({ open }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const classNames = `fixed top-5 right-0 z-10 ${show ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"} w-80 rounded-md bg-green-500 p-5 text-white transition duration-1000 ease-in-out`;

  return (
    <div className={classNames}>You have been registered successfully!</div>
  );
};

export default Toaster;

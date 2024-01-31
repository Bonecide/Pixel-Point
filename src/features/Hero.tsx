import { useCallback, useState } from "react";
import { Input } from "../components/Input/Input";

export type StatusType = "initial" | "loading" | "error" | "success";
export const Hero = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<StatusType>("initial");
  const onSubmit = useCallback(() => {
    if (!mail) {
      setError("Email is a required field");
      setStatus("error");
    } else {
      setStatus("loading");

      setTimeout(() => {
        setStatus("success");
      }, 2000);
    }
  }, [mail]);
  const setValue = useCallback((text: string) => {
    setStatus("initial");
    setError("");
    setMail(text);
  }, []);
  return (
    <section className="pt-[200px] container bg-[url('/images/heroBg.svg')]">
      <div className="flex justify-between items-center">
        <div className="w-[650px] flex flex-col gap-[30px] items-start">
          <h1 className="gradientText text-[70px]  leading-[81px]">
            Revolutionize <br /> your DevOps journey with DevOptima
          </h1>
          <img
            src="/images/heroBlind.png"
            className="absolute left-0 top-0 z-[-1]"
            alt=""
          />
          <p className=" text-[20px] text-[#BDC4D1]">
            Empower teams to innovate faster through streamlined development,
            efficient automated workflows, and reliable scaling.
          </p>

          <Input
            status={status}
            error={error}
            value={mail}
            setValue={setValue}
            onSubmit={onSubmit}
            placeholder="Your business email..."
          />
        </div>
        <div className="relative">
          <img src="/images/heroImage.png" alt="" />
          <img
            src="/images/heroImageBlind.png"
            className="absolute top-0 left-0 w-[600px] h-[600px] z-[9]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

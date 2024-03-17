import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useRequest from "../../hooks/useRequest";
import { toast } from "react-toastify";

const Signup = () => {
  const { request, response } = useRequest();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { mobile, name, email } = data;
    request("POST", "users/register", {
      username: name,
      email: email,
      number: mobile,
    });
  };

  useEffect(() => {
    if (response) {
      if (response.status == true) {
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (response.status == false) {
        toast.error(response.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div class="_3Um38 _3lG1r">
            <input
              class="_381fS"
              type="tel"
              name="mobile"
              tabindex="1"
              maxlength="10"
              autocomplete="off"
              {...register("mobile", { required: true })}
            />
            <div class="_2EeI1 _26LFr"></div>
            <label class="_1Cvlf _2tL9P " for="mobile">
              Phone number
            </label>
            {errors?.mobile && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="_3Um38 _3lG1r">
            <input
              class="_381fS"
              type="text"
              name="name"
              tabindex="1"
              autocomplete="off"
              {...register("name", { required: true })}
            />
            <div class="_2EeI1 _26LFr"></div>
            <label class="_1Cvlf _2tL9P " for="mobile">
              Name
            </label>
            {errors?.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="_3Um38 _3lG1r">
            <input
              class="_381fS"
              type="email"
              name="email"
              tabindex="1"
              autocomplete="off"
              {...register("email", { required: true })}
            />
            <div class="_2EeI1 _26LFr"></div>
            <label class="_1Cvlf _2tL9P " for="mobile">
              Email
            </label>
            {errors?.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <button class="_3GOZo">Have a referral code?</button>
        <div class="_25qBi _2-hTu">
          <button
            type="submit"
            // style={{ display: "none" }}
            className="a-ayg"
          >
            CONTINUE
          </button>
        </div>
        <div class="_1FvHn">
          By creating an account, I accept the{" "}
          <a class="IBw2l" href="/terms-and-conditions">
            Terms &amp; Conditions
          </a>{" "}
          &amp;{" "}
          <a class="IBw2l" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
      </form>
    </>
  );
};

export default Signup;

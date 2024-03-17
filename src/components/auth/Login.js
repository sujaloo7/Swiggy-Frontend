import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useRequest from "../../hooks/useRequest";
import { toast } from "react-toastify";

const Login = () => {
  const { request, response } = useRequest();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { mobile } = data;

    request("POST", "users/login", {
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
              id="mobile"
              tabindex="1"
              maxlength="10"
              autocomplete="off"
              {...register("mobile", { required: true })}
            />
            <div class="_2EeI1 _26LFr"></div>
            <label class="_1Cvlf _2tL9P " for="mobile">
              Phone number
            </label>
          </div>
        </div>
        {errors?.mobile && (
          <span className="text-danger">This field is required</span>
        )}

        <div class="_25qBi _2-hTu">
          <button
            type="submit"
            // style={{ display: "none" }}
            className="a-ayg"
          >
            Login
          </button>
        </div>
        <div class="_1FvHn">
          By clicking on Login, I accept the{" "}
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

export default Login;

import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  fname: yup.string(),
  lname: yup.string(),
  number: yup.string(),
  address: yup.string(),
  message: yup.string(),
});

const Form = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    const id = toast.loading("Please wait...");
    try {
      const { data } = await axios.post(
        "http://13.127.163.178:8000/contact/contact_us/",
        formData
      );
      toast.update(id, {
        render: `${data.message}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      reset();
    } catch (error) {
      toast.update(id, {
        render: `${error.response.data.message}`,
        type: "error",
        autoClose: 3000,
        isLoading: false,
      });
    }
    //do something else
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="container flex flex-wrap mx-auto my-[100px]"
    >
      <div className="relative p-3 basis-1/2 ">
        <input
          {...register("fname")}
          type="text"
          className="input-common-class"
          id="exampleFormControlInput1"
          placeholder="Your first name"
          name="fname"
          required
        />
      </div>
      <div className="relative p-3 basis-1/2">
        <input
          {...register("lname")}
          type="text"
          className="input-common-class"
          id="exampleFormControlInput1"
          placeholder="Your last name "
          name="lname"
          required
        />
      </div>
      <div className="relative p-3 basis-1/2">
        <input
          {...register("number")}
          type="text"
          className="input-common-class"
          id="exampleFormControlInput1"
          placeholder="Your Phone Number"
          name="number"
          required
        />
      </div>
      <div className="relative p-3 basis-1/2">
        <input
          {...register("address")}
          type="text"
          className="input-common-class"
          id="exampleFormControlInput1"
          placeholder="Your Address "
          name="address"
          required
        />
      </div>
      <div className="p-3 basis-full">
        <textarea
          {...register("message")}
          type="textarea"
          className="input-common-class h-[153px]"
          id="exampleFormControlInput1"
          placeholder="Enter your message here... "
          name="message"
          required
        />
      </div>
      <div className="p-3">
        <button className="bg-[#D2153D] w-[240px] h-[64px] text-white flexible leading-[24px] text-[20px]">
          Submit Message{" "}
          <span>
            <FaArrowRight size={15} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;

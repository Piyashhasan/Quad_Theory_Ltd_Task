import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import FoodSlider from "../FoodSlider/FoodSlider";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addFoodItem,
  popularFood,
  recommendedFood,
} from "../../features/foodItems/foodItemsSlice";
import toast from "react-hot-toast";

const PopularItems = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addFoodItem(data));
    dispatch(recommendedFood());
    dispatch(popularFood());
    toast.success("Product added Successfully...", { id: "add food" });
    reset();
  };

  return (
    <>
      <div className="container my-10">
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="font-bold text-lg">Popular</h3>
          </div>
          <div className="flex items-center justify-between">
            {/* --- modal section start --- */}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="text-orange-500 px-3 rounded hover:bg-orange-500 hover:text-white hidden sm:block"
              type="button"
            >
              AddMore
            </button>

            <div
              id="default-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900 ">
                      Add Food Item
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4 md:p-5 space-y-4">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="max-w-sm mx-auto p-5"
                    >
                      <div className="mb-5">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Food Name"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          {...register("price", { required: true })}
                          type="number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Price"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          {...register("imageUrl", { required: true })}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Your food image URL"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <div className="flex items-center justify-between">
                          <label htmlFor="" className="text-lg mr-3">
                            Category
                          </label>
                          <div className="flex items-center me-4">
                            <input
                              {...register("isPopular")}
                              type="checkbox"
                              value="true"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                              htmlFor="inline-checkbox"
                              className="ms-2 text-sm font-medium text-gray-900 "
                            >
                              Popular
                            </label>
                          </div>
                          <div className="flex items-center me-4">
                            <input
                              {...register("isRecommended")}
                              type="checkbox"
                              value="true"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                              htmlFor="inline-2-checkbox"
                              className="ms-2 text-sm font-medium text-gray-900 "
                            >
                              Recommended
                            </label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* ---  modal section end --- */}

            <div className="flex items-center sm:mx-5">
              <IoIosArrowBack className="text-gray-400 hidden sm:block" />
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <FoodSlider popular="popular" />
        </div>
      </div>
    </>
  );
};

export default PopularItems;

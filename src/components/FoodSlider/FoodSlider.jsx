import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../features/foodItems/foodItemsSlice";
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
const FoodSlider = ({ popular, recommended }) => {
  const { isLoading, popularFood, recommendedFood } = useSelector(
    (store) => store.foodItems
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  
  return (
    <div>
      <Slider {...settings}>
        {popular &&
          popularFood.map((items, index) => {
            return (
              <div key={index} className="p-2">
                <div>
                  <img
                    className="rounded-lg object-cover w-[220px] h-[162px] sm:h-[275px] "
                    src={items?.imageUrl}
                    alt={items?.name}
                  />
                  <p className="text-center text-sm mt-3">{items?.name}</p>
                </div>
              </div>
            );
          })}
        {recommended &&
          recommendedFood.map((items, index) => {
            return (
              <div key={index} className="p-2">
                <div>
                  <img
                    className="rounded-lg object-cover w-[220px] h-[162px] sm:h-[275px] "
                    src={items?.imageUrl}
                    alt={items?.name}
                  />
                  <p className="text-center text-sm mt-3">{items?.Name}</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default FoodSlider;

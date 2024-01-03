import React from "react";
import "./Dashbord.css";
import Card from "../Cards/Card";
import { plans } from "../../data/plans";
import FeaturePlan from "../FeaturePlan/FeaturePlan";
import { featurePlans } from "../../data/featurePlans";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";
import { useDimensions } from "../../utils/useDimentions";
import "swiper/css";

SwiperCore.use([Pagination, Autoplay]);

function Dashboard() {
  const { windowWidth, isSmallDevice } = useDimensions();
  return (
    <div>
      <section id="dashbord-page">
        <h3>Choose a plan thats just right for you !</h3>
        <div className="duration-tab">
          <div className="duration">
            <div class="tabs">
              <input type="radio" id="radio-1" name="tabs" checked />
              <label class="tab" for="radio-1">
                Monthly
              </label>
              <input type="radio" id="radio-2" name="tabs" />
              <label class="tab" for="radio-2">
                Annualy <span>-10%</span>
              </label>
              <span class="glider"></span>
            </div>
          </div>
        </div>
        <div className="list-card">
          {windowWidth < 1380 ? (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                680: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              {plans?.map((plan) => (
                <SwiperSlide>
                  <Card data={plan} isSmallDevice={isSmallDevice} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            plans?.map((plan) => <Card data={plan} />)
          )}

          {/* {plans?.map((plan) => (
            <Card data={plan} />
          ))} */}
        </div>
        <div className="feature-plans">
          {featurePlans.map((plan) => (
            <FeaturePlan data={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

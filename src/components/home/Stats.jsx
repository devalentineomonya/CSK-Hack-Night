import { useEffect, useRef } from "react";
import { BsPeople } from "react-icons/bs";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
import { TbClockCode, TbDevicesCode } from "react-icons/tb";
import { LuFileCode } from "react-icons/lu";
import PropTypes from "prop-types"
const Stats = () => {
  return (
    <section className="w-full flex items-center justify-center h-fit min-h-[50vh] p-2 md:p-6 bg-gradient-to-tr from-black to bg-slate-950">
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2  max-xl:gap-y-3  xl:grid-cols-4 gap-x-4">
        <StatsCard
          title="Registered Members"
          value={70}
          icon={<BsPeople size={30} />}
        />
        <StatsCard
          title="Event Hours"
          value={10}
          icon={<TbClockCode size={30} />}
        />
        <StatsCard
          title="Tests Completed"
          value={5}
          icon={<LuFileCode size={30} />}
        />
        <StatsCard
          title="Tools to Learn"
          value={6}
          icon={<TbDevicesCode size={30} />}
        />
      </div>
    </section>
  );
};

const StatsCard = ({ title, value, icon }) => {
  const odometerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const odometer = new Odometer({
      el: odometerRef.current,
      format: "(,ddd)",
      duration: 3000,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            odometer.update(value);
          } else {
            odometer.update(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="w-full aspect-video bg-white px-8 py-4 flex flex-col"
    >
      <div className="flex-1 h-full">
        <div className="h-14 aspect-square rounded text-white bg-gradient-to-tr from-[#2409CF] to-[#F52727] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 h-full">
        <h2 className="font-medium text-2xl text-gradient">{title}</h2>
        <div
          ref={odometerRef}
          className="text-lg font-semibold"
          style={{ fontSize: "2rem" }}
        >
          0
         
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes ={
    title:PropTypes.string.isRequired,
    value:PropTypes.number.isRequired,
    icon:PropTypes.node.isRequired
}
export default Stats;

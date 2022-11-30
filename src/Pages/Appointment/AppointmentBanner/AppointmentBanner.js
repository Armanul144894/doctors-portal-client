import chair from "../../../assets/images/chair.png";
import banner from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

import { format } from "date-fns";

const AppointmentBanner = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <header
      className=""
      style={{
        background: `url(${banner}) `,
        backgroundSize: "cover",
      }}
    >
      <div className="hero py-20">
        <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
          <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt="" />
          <div className="rounded shadow-2xl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

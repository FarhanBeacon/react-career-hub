import PropTypes from "prop-types";

const SubBanner = ({value}) => {
  return (
    <div className="bg h-[150px] gird grid-cols-3 content-center rounded-xl">
      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold align-middle">{value}</h2>
      </div>
    </div>
  );
};

SubBanner.propTypes ={
    value: PropTypes.string,
}

export default SubBanner;

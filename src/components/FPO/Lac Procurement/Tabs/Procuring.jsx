import Card from "../../../Farmer/Card";

const Procuring = () => {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Procuring;

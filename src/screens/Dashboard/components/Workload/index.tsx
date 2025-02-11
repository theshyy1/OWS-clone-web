import Button from "../../../../components/ButtonOption/Button";

const Workload = () => {
  return (
    <div className="h-[307px] rounded-2xl bg-[#F2EAE5] p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Projects Workload</h3>
        <Button name="Last 3 months" />
      </div>
    </div>
  );
};

export default Workload;

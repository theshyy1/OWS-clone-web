export const EmptyContainer = () => {
  return (
    <div className="flex h-[450px] w-full flex-col items-center justify-center space-y-3 overflow-y-auto px-10 shadow-md">
      <span className="text-xl italic">Let's add new todo !!</span>
      <span className="block h-[200px] w-[200px] rounded-full bg-white text-xl font-semibold" />
    </div>
  );
};

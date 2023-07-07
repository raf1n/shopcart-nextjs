const SearchBar = () => {
  return (
    <div className="w-full lg:relative lg:flex lg:flex-row lg:items-center lg:justify-between mt-5">
      <div className="rounded-xl bg-sandybrown flex flex-row p-4 items-center justify-center space-x-2">
        <img className="w-5 h-6" alt="" src="/group.svg" />
        <div className="font-medium">Dhaka, 1212</div>
      </div>
      <div className="rounded-xl box-border w-full lg:w-2/4 flex flex-row p-4 items-center justify-between text-gray-100 border-[1px] border-solid border-gray-200 mt-4 lg:mt-0">
        <div className="font-medium">Search</div>
        <img className="w-4 h-4" alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};
export default SearchBar;

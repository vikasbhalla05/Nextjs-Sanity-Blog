const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-10 py-5 font-bold">
      <div>
        <h1 className="text-6xl">Vikas Bhalla</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#6254f3]">
            Every Developer&apos;s
          </span>{" "}
          favourite blog in Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | The weekly debugging
        nightmares &amp; more !
      </p>
    </div>
  );
};

export default Banner;

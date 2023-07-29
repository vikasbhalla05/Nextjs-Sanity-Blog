import Image from "next/image";

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={35}
        width={35}
        alt="profile"
        src="https://i.ibb.co/cFhbmYL/Profile.jpg"
      />
      {renderDefault(props)}
    </div>
  );
};

export default StudioLogo;

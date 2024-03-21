import { authUserSession } from "../../../libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary">
      <h3>Dashboard</h3>
      <h5>Welcome, {user.name}</h5>
      <img
        src={user.image}
        alt=""
        width={250}
        height={250}
        className="w-[250px] h-[250px] mt-3 rounded-full"
      />
    </div>
  );
};

export default Page;

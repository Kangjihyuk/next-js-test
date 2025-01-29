import { useSession } from "next-auth/react";

const Profile = () => {
  const { data } = useSession();
  return (
    <div>
      Profile
      <h2>{data?.user?.name}</h2>
    </div>
  );
};

export default Profile;

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect, useState } from "react";
import { getObectFromS3 } from "../utils/aws/s3/getObject";
import { PrimaryBtn } from "../components/Button";
import { Heading1 } from "../components/Heading";

function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [url, setUrl] = useState("/user-icon.jpg");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    (async () => {
      if (!user.picture) return;
      const url = await getObectFromS3(user.picture);
      setUrl(url);
    })();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="grid px-5 mt-10 w-[40rem]  bg-white py-5 gap-2 rounded-lg shadow-lg">
      <Heading1>Welcome to your dashboard</Heading1>
      <div className="grid place-items-center gap-3 mt-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={url} />
          </div>
        </div>
        <p>{user?.username}</p>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <PrimaryBtn onClick={handleLogout}>Logout</PrimaryBtn>
      </div>
    </div>
  );
}

export default Dashboard;

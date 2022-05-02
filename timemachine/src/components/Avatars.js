import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TimeMachineApi from "../api/TimeMachineApi";
import AvatarCard from "./UI/AvatarCard";

const Avatars = (props) => {
  const [avatarList, setAvatarList] = useState([]);
  let avatarId = null;

  useEffect(() => {
    loadAvatars();
  }, []);

  const loadAvatars = async () => {
    const data = await TimeMachineApi.getAllAvatars();
    setAvatarList(data ? data : []);
  };

  const renderAvatars = () => {
    return avatarList.map((avatar) => {
      avatarId = avatar.id;
      return <AvatarCard key={avatarId} avatar={avatar} />;
    });
  };

  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {renderAvatars()}
      </ul>
      <Outlet />
    </div>
  );
};

export default Avatars;

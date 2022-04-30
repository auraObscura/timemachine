import { useEffect, useState } from "react";
import TimeMachineApi from "../api/TimeMachineApi";
import AvatarCard from "./UI/AvatarCard";

const Avatars = (props) => {
  const [avatarList, setAvatarList] = useState([]);

  useEffect =
    (() => {
      loadAvatars();
    },
    []);

  const loadAvatars = async () => {
    const data = await TimeMachineApi.getAllAvatars();
    setAvatarList(data ? data : []);
  };

  const renderAvatars = () => {
    avatarList.map((avatar) => {
      const avatarCards = [];
      avatarCards.push(<AvatarCard key={avatar.id} avatar={avatar} />);
      return avatarCards;
    });
  };

  return <div>{renderAvatars()}</div>;
};

export default Avatars;

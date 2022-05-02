import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import TimeMachineApi from "../api/TimeMachineApi";
import ConvoHistoryCard from "./UI/ConvoHistoryCard";

const ConvoHistory = (props) => {
  const [convoList, setConvoList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadConvos();
  }, []);

  const loadConvos = async () => {
    const data = await TimeMachineApi.getUserConversations();
    setConvoList(data ? data : []);
  };

  const renderConvos = () => {
    return convoList.map((convo) => {
      return (
        <ConvoHistoryCard key={convo.id} convo={convo} avatar={convo.avatar} />
      );
    });
  };

  return <div>{renderConvos()}</div>;
};

export default ConvoHistory;

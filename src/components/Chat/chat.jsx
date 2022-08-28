import "./chat.css";
import React from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  BsPaperclip,
  BsSearch,
  BsEmojiSmile,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { TbMoodSmile, TbPaperclip, TbSend } from "react-icons/tb";
import Picker from "emoji-picker-react";
import Message from "./Message/message";

const Chat = () => {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Avatar className="chat-header-avatar">{"DP"}</Avatar>
        <div className="chat-header-info">
          <h4>David Perrine</h4>
          <p>Yesterday</p>
        </div>
        <div className="chat-header-icon-container">
          <IconButton>
            <BsSearch />
          </IconButton>
          <IconButton>
            <BsThreeDotsVertical />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <Message />
        <Message />
      </div>
      {/* <Picker onEmojiClick={onEmojiClick} /> */}
      <div className="chat-footer">
        <div className="chat-footer-icon-container">
          <IconButton>
            <TbMoodSmile className="chat-footer-icon" />
          </IconButton>
          <IconButton>
            <TbPaperclip className="chat-footer-icon" />
          </IconButton>
        </div>
        <form>
          <textarea placeholder="Message" type="text" contentEditable />
          <IconButton>
            <TbSend className="chat-footer-icon" />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;

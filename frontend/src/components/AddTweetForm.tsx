import React, { ReactEventHandler, useState } from "react";
import cn from "classnames";

import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import IconButton from "@material-ui/core/IconButton/IconButton";
import EmojiIcon from "@material-ui/icons/EmojiEmotions";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useHomeStyles } from "../pages/Home/useHomeStyles";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>("");
  const textLimitPercent = (text.length / 280) * 100;
  const textCount = text.length - MAX_LENGTH;

  const handleChangeTextArea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget && text.length <= 280) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText("");
  };

  return (
    <div>
      <div className={classes.addForm}>
        <div className={classes.addFormBody}>
          <Avatar
            className={classes.tweetAvatar}
            src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80"
          />
          <TextareaAutosize
            value={text}
            // rowsMax={maxRows}
            onChange={handleChangeTextArea}
            className={classes.addFormTextarea}
            placeholder="What is happening?"
          />
        </div>
        <div className={classes.addFormBottom}>
          <div className={cn(classes.tweetIcon)}>
            <IconButton color="primary">
              <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <IconButton color="primary">
              <EmojiIcon style={{ fontSize: 26 }} />
            </IconButton>
          </div>
          <div className={classes.addFormBottomRight}>
            {text && (
              <>
                <span>{textCount}</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="static"
                    size={20}
                    thickness={4}
                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                    style={
                      text.length >= MAX_LENGTH ? { color: "red" } : undefined
                    }
                  />
                  <CircularProgress
                    style={{ color: "rgba(0,0,0,0.1)" }}
                    variant="static"
                    size={20}
                    thickness={4}
                    value={100}
                  />
                </div>
              </>
            )}
            <Button
              onClick={handleClickAddTweet}
              disabled={text.length >= MAX_LENGTH}
              color="primary"
              variant="contained"
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.addFormBottomLine} />
    </div>
  );
};

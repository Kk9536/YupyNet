import React, { useEffect, useState } from "react";

const API_URL = "https://bras-ipod-regarded-awesome.trycloudflare.com/avatars.json";
const DEFAULT_AVATAR = "https://cdn.discordapp.com/embed/avatars/0.png";

const Avatar = ({ userId, size = 120, style = {}, ...rest }) => {
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const user = data[userId];
        if (user && user.avatarURL) setAvatar(user.avatarURL);
        else setAvatar(DEFAULT_AVATAR);
      })
      .catch(() => setAvatar(DEFAULT_AVATAR));
  }, [userId]);

  return (
    <img
      src={avatar}
      alt={`头像 - 用户ID: ${userId}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        ...style,
      }}
      {...rest}
    />
  );
};

export default Avatar;

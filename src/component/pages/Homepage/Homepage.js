// src/component/pages/Homepage/Homepage.js
import React from 'react';
import Logo from './logo';
import './Homepage.css';
import DiscordLogin from './DiscordLogin';

export default function Homepage() {
  return (
    <div className="homepage-bg">
      <Logo />
      <DiscordLogin/>
    </div>
  );
}

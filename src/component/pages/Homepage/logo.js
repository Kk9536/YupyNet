import React from 'react';
import './logo.css';

export default function Logo() {
  return (
    <div className="logo">
      <svg width="48" height="48" viewBox="0 0 48 48">
        {/* 左耳朵 */}
        <path d="M10 18 Q8 6 20 12" fill="#fff0f6" stroke="#e75480" strokeWidth="2"/>
        {/* 右耳朵 */}
        <path d="M38 18 Q40 6 28 12" fill="#fff0f6" stroke="#e75480" strokeWidth="2"/>
        {/* 脸部 */}
        <ellipse cx="24" cy="26" rx="14" ry="13" fill="#fff0f6" stroke="#e75480" strokeWidth="3"/>
        {/* 眼睛 */}
        <ellipse cx="18" cy="28" rx="2" ry="3" fill="#e75480"/>
        <ellipse cx="30" cy="28" rx="2" ry="3" fill="#e75480"/>
        {/* 鼻子 */}
        <ellipse cx="24" cy="32" rx="1.2" ry="1" fill="#e75480"/>
        {/* 嘴巴 */}
        <path d="M23 33 Q24 35 25 33" stroke="#e75480" strokeWidth="1.2" fill="none"/>
        {/* 腮红 */}
        <ellipse cx="16" cy="33" rx="2" ry="1" fill="#f8bbd0" opacity="0.7"/>
        <ellipse cx="32" cy="33" rx="2" ry="1" fill="#f8bbd0" opacity="0.7"/>
        {/* 小胡须 */}
        <path d="M9 32 Q14 32 15 33" stroke="#e75480" strokeWidth="1"/>
        <path d="M39 32 Q34 32 33 33" stroke="#e75480" strokeWidth="1"/>
      </svg>
      <span className="logo-text">YupyNet</span>
    </div>
  );
}

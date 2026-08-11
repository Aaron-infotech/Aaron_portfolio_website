import React from 'react';

// Official HTML5 Logo
export const Html5Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" fill="#E34F26" />
    <path d="M12 3.8v16.3l5.8-1.6L19.2 3.8H12z" fill="#EF652A" />
    <path d="M7.5 7h9l-.3 3.5H12v3h3.9l-.4 4.5-3.5 1v-3.2l1.7-.5.2-1.8H7.5" fill="#FFFFFF" />
  </svg>
);

// Official CSS3 Logo
export const Css3Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" fill="#1572B6" />
    <path d="M12 3.8v16.3l5.8-1.6L19.2 3.8H12z" fill="#33A9DC" />
    <path d="M7.5 7h9l-.3 3.5H7.8l.3 3.5h7.8l-.5 5.5-3.4 1v-3.2l1.7-.5.2-1.8H7.5" fill="#FFFFFF" />
  </svg>
);

// Official JavaScript Logo
export const JavaScriptLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M13.2 18.2c.6.9 1.4 1.4 2.5 1.4 1.2 0 2-.6 2-1.5 0-1-.7-1.4-2.1-2l-.7-.3c-2-.9-3.3-2-3.3-4.3 0-2.4 1.8-4.2 4.7-4.2 2.1 0 3.6.8 4.5 2.4l-2 1.2c-.5-.9-1.2-1.4-2.4-1.4-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 1.9 1.8l.7.3c2.3 1 3.7 2.1 3.7 4.5 0 2.7-2.1 4.4-5.2 4.4-2.8 0-4.6-1.3-5.5-3.1l2.2-1.2zM6.5 18.3c.5.8 1.1 1.3 2 1.3 1 0 1.6-.5 1.6-1.8V7.5h2.8v10.3c0 2.8-1.6 4.2-4.2 4.2-2.1 0-3.5-1-4.2-2.5l2-1.2z" fill="#000000" />
  </svg>
);

// Official React JS Logo
export const ReactLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.3">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

// Modern Backend Server Logo
export const BackendLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" fill="#f3e8ff" />
    <rect x="2" y="14" width="20" height="8" rx="2" fill="#f3e8ff" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    <line x1="10" y1="6" x2="14" y2="6" />
    <line x1="10" y1="18" x2="14" y2="18" />
  </svg>
);

// AI Code Generation Logo
export const AiCodeLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#7c3aed" />
    <path d="M4 4L5.2 7.8L9 9L5.2 10.2L4 14L2.8 10.2L0 9L2.8 7.8L4 4Z" fill="#a855f7" transform="translate(14, -2) scale(0.6)" />
    <path d="M4 4L5.2 7.8L9 9L5.2 10.2L4 14L2.8 10.2L0 9L2.8 7.8L4 4Z" fill="#c084fc" transform="translate(-2, 13) scale(0.5)" />
  </svg>
);

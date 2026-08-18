import React from 'react';

// Official HTML5 Logo
export const Html5Logo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" fill="#E34F26" />
    <path d="M12 3.8v16.3l5.8-1.6L19.2 3.8H12z" fill="#EF652A" />
    <path d="M7.5 7h9l-.3 3.5H12v3h3.9l-.4 4.5-3.5 1v-3.2l1.7-.5.2-1.8H7.5" fill="#FFFFFF" />
  </svg>
);

// Official CSS3 Logo
export const Css3Logo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" fill="#1572B6" />
    <path d="M12 3.8v16.3l5.8-1.6L19.2 3.8H12z" fill="#33A9DC" />
    <path d="M7.5 7h9l-.3 3.5H7.8l.3 3.5h7.8l-.5 5.5-3.4 1v-3.2l1.7-.5.2-1.8H7.5" fill="#FFFFFF" />
  </svg>
);

// Official JavaScript Logo
export const JavaScriptLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M13.2 18.2c.6.9 1.4 1.4 2.5 1.4 1.2 0 2-.6 2-1.5 0-1-.7-1.4-2.1-2l-.7-.3c-2-.9-3.3-2-3.3-4.3 0-2.4 1.8-4.2 4.7-4.2 2.1 0 3.6.8 4.5 2.4l-2 1.2c-.5-.9-1.2-1.4-2.4-1.4-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 1.9 1.8l.7.3c2.3 1 3.7 2.1 3.7 4.5 0 2.7-2.1 4.4-5.2 4.4-2.8 0-4.6-1.3-5.5-3.1l2.2-1.2zM6.5 18.3c.5.8 1.1 1.3 2 1.3 1 0 1.6-.5 1.6-1.8V7.5h2.8v10.3c0 2.8-1.6 4.2-4.2 4.2-2.1 0-3.5-1-4.2-2.5l2-1.2z" fill="#000000" />
  </svg>
);

// Official TypeScript Logo
export const TypeScriptLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 9H7v2h1.5v7.5h2.5V11H12.5V9h-1zM18.8 12.3c-.6-.7-1.4-1-2.4-1-1 0-1.7.3-2.1.8l1.3 1.1c.3-.3.6-.5 1-.5.4 0 .7.1.9.3.2.2.3.4.3.7 0 .3-.1.5-.4.7-.2.2-.6.4-1.2.6-1.1.4-1.9.8-2.3 1.3-.4.5-.6 1.1-.6 1.8 0 .8.3 1.5.9 2s1.4.7 2.4.7c1.2 0 2.2-.4 2.9-1.3l-1.3-1.2c-.4.5-1 .8-1.6.8-.4 0-.7-.1-.9-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.4-.7.2-.2.7-.4 1.3-.6 1.1-.4 1.8-.8 2.2-1.3.4-.5.6-1.1.6-1.8 0-.9-.3-1.6-1-2.2z" fill="#FFFFFF" />
  </svg>
);

// Official React JS Logo
export const ReactLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

// Official Next.js Logo
export const NextjsLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#000000" />
    <path d="M14.8 17L9.5 9.8V17H8V7h1.6l5.3 7.2V7h1.5v10h-1.6z" fill="#FFFFFF" />
  </svg>
);

// Official Tailwind CSS Logo
export const TailwindLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 0.3 1.7 1.1 2.5 1.9C13.2 12.5 14.8 14 18.6 14c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-0.3-1.7-1.1-2.5-1.9C17.4 7.5 15.8 6 12 6zM5.4 14c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 0.3 1.7 1.1 2.5 1.9C6.6 20.5 8.2 22 12 22c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-0.3-1.7-1.1-2.5-1.9-1.2-1.3-2.8-2.8-6.6-2.8z" fill="#38BDF8" transform="scale(0.8) translate(2, 2)" />
  </svg>
);

// Official Bootstrap Logo
export const BootstrapLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#7952B3" />
    <path d="M7 6h5.2c1.7 0 2.8.4 3.5 1.1.7.7 1 1.6 1 2.7 0 1.2-.4 2-1.3 2.6v.1c1.2.5 1.8 1.5 1.8 3 0 1.2-.4 2.2-1.2 3-.8.8-2 1.2-3.8 1.2H7V6zm3 4.2h2.2c.8 0 1.4-.2 1.7-.5.4-.3.6-.8.6-1.4 0-.6-.2-1-.6-1.3-.4-.3-1-.4-1.7-.4H10v3.6zm0 6.6h2.5c.8 0 1.5-.2 1.9-.6.4-.4.6-.9.6-1.6 0-.7-.2-1.2-.6-1.6-.4-.4-1.1-.6-2-.6H10v4.4z" fill="#FFFFFF" />
  </svg>
);

// Official Node.js Logo
export const NodejsLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm0 3.2l7.2 4.2-7.2 4.1L4.8 9.4 12 5.2zm-8 6.1l7.2 4.2v8.2L4 19.5v-8.2zm16 8.2l-7.2 4.2v-8.2l7.2-4.2v8.2z" fill="#339933" />
  </svg>
);

// Official Express.js Logo
export const ExpressLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#000000" />
    <text x="12" y="16" fontSize="11" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">ex</text>
  </svg>
);

// REST API Icon
export const RestApiIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" fill="#7c3aed" />
  </svg>
);

// PostgreSQL Logo
export const PostgresLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-2.5 0-4.5-1.5-4.5-3.5S10.5 9.5 13 9.5s4.5 1.5 4.5 3.5-2 3.5-4.5 3.5z" fill="#4169E1" />
  </svg>
);

// MongoDB Logo
export const MongoLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2s-6 5.5-6 11.5C6 17.5 8.7 21 12 22c3.3-1 6-4.5 6-8.5C18 7.5 12 2 12 2zm0 18v-8" stroke="#47A248" strokeWidth="2" fill="none" />
  </svg>
);

// MySQL Logo
export const MysqlLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm4.5 12.5c-1 1-2.5 1.5-4.5 1.5s-3.5-.5-4.5-1.5V11c1-1 2.5-1.5 4.5-1.5s3.5.5 4.5 1.5v4.5z" fill="#00758F" />
  </svg>
);

// Git Logo
export const GitLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21.7 10.7L13.3 2.3c-.4-.4-1-.4-1.4 0l-2.4 2.4 3 3c.4-.1.9.1 1.2.4.5.5.5 1.3 0 1.8-.3.3-.8.5-1.3.4l-2.8 2.8v3.4c.3.2.5.6.5 1 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.5.3-.9.7-1.1v-3.5L6.3 9.7c-.2-.3-.3-.8-.1-1.2.2-.4.6-.7 1.1-.7l3-3L7.9 2.4c-.4-.4-1-.4-1.4 0L2.3 6.6c-.4.4-.4 1 0 1.4l11.4 11.4c.4.4 1 .4 1.4 0l6.6-6.6c.4-.4.4-1 0-1.4z" fill="#F05032" />
  </svg>
);

// GitHub Logo
export const GithubLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Docker Logo
export const DockerLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.135a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H2.18a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m5.918 2.714h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.135a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.18a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.18 2.715a.186.186 0 00-.185.186c0 1.942.502 4.415 2.106 5.867 1.488 1.348 3.738 1.988 6.446 1.988 5.41 0 9.878-3.041 11.236-8.04.185-.13.12-.228-.1-.284l-.865-.224c-.16-.042-.32.036-.39.186-.88 1.83-3.23 3.51-6.14 3.51-4.7 0-7.39-2.28-7.98-4.14a.188.188 0 00-.178-.137h-3.95z" />
  </svg>
);

// CI/CD Icon
export const CiCdIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="6" y1="9" x2="6" y2="15" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

// AI Assistant Icon
export const AiAssistantIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#7C3AED" />
  </svg>
);

// Prompt Engineering Icon
export const PromptEngIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

// MCP Icon
export const McpIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
  </svg>
);

// AI Project Development Icon
export const AiDevIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

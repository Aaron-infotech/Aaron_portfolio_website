import React from 'react';

export const LinkedInIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: color }}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.333 5.004l-1.416 5.17 5.29-1.388a9.948 9.948 0 0 0 4.781 1.217h.004c5.504 0 9.988-4.478 9.99-9.985 0-2.668-1.038-5.176-2.924-7.062a9.923 9.923 0 0 0-7.064-2.942zm5.952 14.168c-.25.7-.1.436-1.785 1.416-.52.3-1.173.33-1.889.104-.432-.137-.986-.32-1.695-.626-2.981-1.287-4.927-4.289-5.076-4.487-.148-.198-1.213-1.611-1.213-3.074 0-1.463.768-2.181 1.04-2.479.272-.298.594-.372.792-.372l.57.01c.182.009.427-.069.669.51.247.595.841 2.058.916 2.206.075.149.124.323.025.521-.099.199-.148.323-.3.495-.148.174-.312.388-.446.521-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1.1.734 2.03.967.298.149.496.223.57.347.075.124.075.719-.173 1.414z"/>
  </svg>
);

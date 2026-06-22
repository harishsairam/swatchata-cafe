/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
  content: [
    "./src/pages/**/*.js",
    "./src/pages/**/*.ts",
    "./src/pages/**/*.jsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.js",
    "./src/components/**/*.ts",
    "./src/components/**/*.jsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.js",
    "./src/app/**/*.ts",
    "./src/app/**/*.jsx",
    "./src/app/**/*.tsx",
  ],
    theme: {
      extend: {
        "colors": {
                "primary-fixed-dim": "#b8ccb4",
                "tertiary-fixed-dim": "#c8c8b0",
                "on-tertiary": "#303221",
                "on-secondary-fixed-variant": "#574500",
                "surface": "#131313",
                "on-secondary": "#3c2f00",
                "on-tertiary-fixed": "#1b1d0e",
                "on-error-container": "#ffdad6",
                "on-primary-fixed-variant": "#3a4b39",
                "tertiary-fixed": "#e4e4cc",
                "secondary-fixed": "#ffe088",
                "surface-tint": "#b8ccb4",
                "on-surface-variant": "#c4c8bf",
                "surface-container": "#201f1f",
                "primary": "#b8ccb4",
                "on-secondary-container": "#342800",
                "on-primary": "#243424",
                "secondary": "#e9c349",
                "on-tertiary-container": "#8e8f79",
                "inverse-on-surface": "#313030",
                "on-tertiary-fixed-variant": "#474836",
                "outline-variant": "#434842",
                "on-surface": "#e5e2e1",
                "surface-container-highest": "#353534",
                "surface-variant": "#353534",
                "surface-container-high": "#2a2a2a",
                "tertiary": "#c8c8b0",
                "on-secondary-fixed": "#241a00",
                "surface-container-lowest": "#0e0e0e",
                "error": "#ffb4ab",
                "inverse-primary": "#516350",
                "primary-container": "#1a2a1a",
                "on-error": "#690005",
                "tertiary-container": "#262717",
                "on-primary-fixed": "#0f1f10",
                "on-background": "#e5e2e1",
                "surface-container-low": "#1c1b1b",
                "surface-bright": "#393939",
                "inverse-surface": "#e5e2e1",
                "error-container": "#93000a",
                "primary-fixed": "#d4e8cf",
                "secondary-fixed-dim": "#e9c349",
                "secondary-container": "#af8d11",
                "background": "#131313",
                "on-primary-container": "#80927d",
                "outline": "#8e928a",
                "surface-dim": "#131313"
        },
        "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
        },
        "spacing": {
                "unit": "8px",
                "container-max": "1200px",
                "margin-desktop": "64px",
                "margin-mobile": "20px",
                "gutter": "24px"
        },
        "fontFamily": {
                "headline-sm": [
                        "Libre Caslon Text"
                ],
                "body-lg": [
                        "Libre Caslon Text"
                ],
                "headline-md": [
                        "Libre Caslon Text"
                ],
                "display-lg": [
                        "Libre Caslon Text"
                ],
                "label-md": [
                        "Work Sans"
                ],
                "display-lg-mobile": [
                        "Libre Caslon Text"
                ],
                "body-md": [
                        "Libre Caslon Text"
                ]
        },
        "fontSize": {
                "headline-sm": [
                        "24px",
                        {
                                "lineHeight": "32px",
                                "fontWeight": "400"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "400"
                        }
                ],
                "headline-md": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "fontWeight": "400"
                        }
                ],
                "display-lg": [
                        "56px",
                        {
                                "lineHeight": "64px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "label-md": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "letterSpacing": "0.05em",
                                "fontWeight": "500"
                        }
                ],
                "display-lg-mobile": [
                        "36px",
                        {
                                "lineHeight": "44px",
                                "letterSpacing": "-0.01em",
                                "fontWeight": "700"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ]
        }
},
    },
  };

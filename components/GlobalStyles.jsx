import React from 'react';

export const GlobalStyles = ({ children }) => (
  <>
    {children}
    <style>{`
      :root {
        --foreground: #000000;
        --background: #ffffff;
        --primary: #6bc3b9;
        --secondary: #ffc12f;
        --error: #ff0033;
        --border-radius: 0.25rem;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        box-sizing: border-box;
        font-family: Karla, sans-serif;
        margin: 0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        color: var(--primary);
      }

    `}</style>
  </>
)

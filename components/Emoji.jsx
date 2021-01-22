import React from 'react';

export const Emoji = (props) =>  (
  <>
    <span className="emoji" role="img" aria-label={props.alt} {...props} />
    <style jsx>{`
      .emoji {
        padding: 0 0.25rem;
      }
    `}</style>
  </>
);

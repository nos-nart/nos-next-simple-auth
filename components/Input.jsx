import React from 'react';
import { Emoji } from './Emoji';

export const Input = ({ register, label, errors, help, name, type, id }) => (
  <>
    <div className="input-wrapper">
      {
        label
          && <div className="label-wrapper">
            <label htmlFor={name}>{label}</label>
            {errors && (
              <>
                <Emoji style={{ margin: "0 0.25rem" }}>-</Emoji>{" "}
                <span className="error">is {errors}</span>
              </>
            )}
          </div>
      }
      {help && <p className="label__help">{help}</p>}
      <input type={type} id={id} name={name} className="input" ref={register} />
    </div>
    <style jsx>{`
      .error {
        color: var(--error);
        font-size: 0.75rem;
      }
      .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.75rem 0;
      }

      .input {
        font-size: 1rem;
        border: 2px solid #eaeaea;
        border-radius: var(--border-radius);
        padding: 0.5rem;
        width: 100%;
      }

      .input:active,
      .input:focus,
      .input:hover {
        outline: none;
        border-color: var(--primary);
      }

      .label__help {
        font-size: 0.75rem;
        color: grey;
        padding: 0;
        margin: 0;
      }

      .label-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 0.25rem;
      }
    `}</style>
  </>
)

import React from 'react'
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { Input, Button } from '@/components/index';

export const FormLogin = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);

  const {register, handleSubmit, errors} = useForm();
  
  const onSubmit = data => console.log(data);
  console.log('errors: ', errors);
  
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSignUp 
            && <Input 
              id="name"
              name="name"
              type="text"
              label="👩‍💻 Name"
              register={register({
                required: true
              })}
              errors={errors.name}
              />
          }
          <Input 
            id="email"
            name="email"
            type="text"
            label="✉️ Email"
            register={register({
              required: {
                value: true,
                message: 'is required'
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
            errors={
              errors.email && errors.email?.message
            }
          />
          <Input 
            id="password"
            name="password"
            type="password"
            label="🔑 Password"
            register={register({
              required: {
                value: true,
                message: 'is required'
              },
              minLength: {
                value: 6,
                message: 'too short'
              }
            })}
            errors={
              errors.password && errors.password?.message
            }
          />
          <Button
            style={{ width: '100%' }}
            type="submit"
            // disabled={errors}
            loading={false}
          >
            {!isSignUp ? "Log in" : "Sign up"}
          </Button>
          <p className="error">{}</p>{" "}
        </form>
        <p className="log-in-prompt">
          {isSignUp ? "Have" : "Need"} an account?
          <span className="small">
            Click below, fill out the form!
          </span>
        </p>
        <Button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Log in" : "Sign up"}
        </Button>
      </div>
      <style jsx>{`
        .error {
          text-align: center;
          color: var(--error);
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          width: 400px;
        }

        .log-in-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 0.25rem;
        }

        .log-in-prompt > .small {
          font-size: 0.75rem;
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}

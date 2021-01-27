import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'
import { Input, Button } from '@/components/index';

export const FormRegister = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const {register, handleSubmit, errors} = useForm();
  const contentType = 'application/json';

  const onSubmit = async (data) => {
    console.log('data: ', data);
    try {
      const res = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({ ...data })
      })

      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/login');
    } catch (error) {
      // handle the error
    }
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            id="name"
            name="name"
            type="text"
            label="👩‍💻 Name"
            register={register({
              required: true
            })}
            errors={errors.name}
          />
          <Input 
            id="email"
            name="email"
            type="text"
            label="✉️ Email"
            register={register({
              required: {
                value: true,
                message: 'required'
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
                message: 'required'
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
            loading={isLoading}
          >
            Sign up
          </Button>
          <p className="error">{}</p>{" "}
        </form>
        <p className="log-in-prompt">
          Have an account?
          <span className="small">
            Click below, fill out the form!
          </span>
        </p>
        <Link href="/login">
          <a>
            <Button style={{ width: '100%' }}>Log in</Button>
          </a>
        </Link>
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

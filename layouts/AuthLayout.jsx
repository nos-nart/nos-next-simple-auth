import React from 'react'
import { Banner } from '@/components/index';

export const AuthLayout = ({children}) => {
  return (
    <>
      <div className="page">
        <div className="left-panel">
          <Banner width={460} />
        </div>
        <div className="right-panel">
          {children}
        </div>
      </div>
      <style jsx>{`
        .right-panel {
          width: 50%;
          display: flex;
          justify-content: center;
        }
        
        .left-panel {
          width: 50%;
          display: flex;
          justify-content: flex-end;
        }

        .page {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}

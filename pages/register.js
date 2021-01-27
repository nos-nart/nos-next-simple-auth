import React from 'react';
import Router from 'next/router';

import { FormRegister } from '@/containers/index';
import { AuthLayout } from '@/layouts/index';

export default function Register() {
  return (
    <AuthLayout>
      <FormRegister />
    </AuthLayout>
  )
}
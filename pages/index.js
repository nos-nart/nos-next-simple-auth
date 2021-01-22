import Link from 'next/link';
import { Button } from '@/components/index';

export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <Link href="/login">
        <Button>login</Button>
      </Link>
    </>
  )
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ reset }: IErrorProps) => {
  return (
    <Card className="mx-auto w-fit">
      <CardHeader>
        <CardTitle>Something went wrong</CardTitle>
        <div className="flex gap-4">
          <Button onClick={reset}>Try again</Button>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Error;

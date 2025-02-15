import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const FlatNotFound = () => {
  return (
    <Card className="mx-auto w-fit">
      <CardHeader>
        <CardTitle>Apartment was not founded</CardTitle>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </CardHeader>
    </Card>
  );
};

export default FlatNotFound;

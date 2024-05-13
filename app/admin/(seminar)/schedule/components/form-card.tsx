import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Form } from './form';

type FormCardProps = {
  title: string;
  description: string;
  action: string;
};

export function FormCard({ title, description, action }: FormCardProps) {
  return (
    <Card className="w-[95%] max-w-[700px] min-w-[300px] m-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
      <CardFooter className="justify-center gap-10">
        <Button variant="outline" asChild>
          <Link href="/admin">Cancel</Link>
        </Button>
        <Button>{action}</Button>
      </CardFooter>
    </Card>
  );
}

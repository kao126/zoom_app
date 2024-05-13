import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Admin() {
  return (
    <main className="h-dvh flex justify-center items-center">
      <h1>adimin top</h1>
      <Button asChild>
        <Link href="/admin/schedule/new">create new Schedule</Link>
      </Button>
    </main>
  );
}

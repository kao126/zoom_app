// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

import Link from 'next/link';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      amount: 100,
      status: 'pending',
      email: 'a@example.com',
    },
    {
      id: '2',
      amount: 100,
      status: 'pending',
      email: 'b@example.com',
    },
    {
      id: '3',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '4',
      amount: 100,
      status: 'pending',
      email: 'd@example.com',
    },
    {
      id: '5',
      amount: 100,
      status: 'pending',
      email: 'e@example.com',
    },
    {
      id: '6',
      amount: 100,
      status: 'pending',
      email: 'f@example.com',
    },
    {
      id: '7',
      amount: 100,
      status: 'pending',
      email: 'g@example.com',
    },
    // ...
  ];
}

export default async function Admin() {
  const data = await getData();

  return (
    <main>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
        <Button asChild>
          <Link href="/">申込画面</Link>
        </Button>
      </div>
    </main>
  );
}

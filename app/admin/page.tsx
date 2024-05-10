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
      name: 'James',
      email: 'a@example.com',
      age: '10s',
      gender: 'x',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Ken',
      email: 'b@example.com',
      age: '10s',
      gender: 'male',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Kylie',
      email: 'c@example.com',
      age: '10s',
      gender: 'female',
      status: 'pending',
    },
    {
      id: '4',
      name: 'Chris',
      email: 'd@example.com',
      age: '10s',
      gender: 'male',
      status: 'pending',
    },
    {
      id: '5',
      name: 'Ronald',
      email: 'e@example.com',
      age: '10s',
      gender: 'male',
      status: 'pending',
    },
    {
      id: '6',
      name: 'Jessy',
      email: 'f@example.com',
      age: '10s',
      gender: 'female',
      status: 'pending',
    },
    {
      id: '7',
      name: 'Alex',
      email: 'g@example.com',
      age: '10s',
      gender: 'x',
      status: 'success',
    },
    // ...
  ];
}

export default async function Admin() {
  const data = await getData();

  return (
    <main className="h-dvh flex justify-center items-center">
      <div className="container m-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}

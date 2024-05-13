import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-dvh flex justify-center items-center">
      <Card className="w-[95%] max-w-[700px] mx-auto">
        <CardHeader>
          <CardTitle>セミナータイトル</CardTitle>
          <CardDescription>セミナー概要</CardDescription>
        </CardHeader>
        <CardContent>セミナーコンテンツ説明</CardContent>
        <CardFooter className="flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-full flex flex-col-reverse justify-center items-end md:flex-row md:space-x-1.5 md:items-center">
            <Progress value={30} className="w-full" />
            <span>30/100</span>
          </div>
          <Button asChild>
            <Link href="/form">申し込みはこちら</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

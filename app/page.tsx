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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[700px] mx-auto">
        <CardHeader>
          <CardTitle>セミナータイトル</CardTitle>
          <CardDescription>セミナー概要</CardDescription>
        </CardHeader>
        <CardContent>セミナーコンテンツ説明</CardContent>
        <CardFooter className="space-x-5">
          <div className="w-full flex space-x-1.5 justify-center items-center">
            <Progress value={30} className="w-full" />
            <span>30/100</span>
          </div>
          <Button asChild>
            <Link href="/form">申し込みはこちら</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[700px] mx-auto">
        <CardHeader>
          <CardTitle>セミナータイトル</CardTitle>
          <CardDescription>セミナー概要</CardDescription>
        </CardHeader>
        <CardContent>
          セミナーコンテンツ説明
          <div className="flex space-x-1.5 justify-center items-center">
            <Progress value={30} className="w-full" />
            <span>30/100</span>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button asChild>
            <Link href="/form">申し込みはこちら</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

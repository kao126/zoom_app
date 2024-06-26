import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Form() {
  return (
    <main className="h-dvh flex justify-center items-center">
      <Card className="w-[700px] m-auto">
        <CardHeader>
          <CardTitle>Application Form</CardTitle>
          <CardDescription>Zoomウェビナー申し込みフォーム</CardDescription>
          <div className="flex space-x-1.5 justify-center items-center">
            <Progress value={30} className="w-full" />
            <span>30/100</span>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastname">お名前</Label>
                <div className="flex space-x-1.5">
                  <Input type="text" placeholder="lastname" id="lastname" />
                  <Input type="text" placeholder="firstname" id="firstname" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">メールアドレス</Label>
                <Input type="email" placeholder="email" id="email" />
              </div>
              <div className="flex space-x-1.5">
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="age">年齢</Label>
                  <Select>
                    <SelectTrigger id="age">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="10s">10-19</SelectItem>
                      <SelectItem value="20s">20-29</SelectItem>
                      <SelectItem value="30s">30-39</SelectItem>
                      <SelectItem value="40s">40-49</SelectItem>
                      <SelectItem value="50s">50-59</SelectItem>
                      <SelectItem value="over60">60-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="gender">性別</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="male">男性</SelectItem>
                      <SelectItem value="female">女性</SelectItem>
                      <SelectItem value="x">未回答</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center gap-10">
          <Button variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <Button>申し込む</Button>
        </CardFooter>
      </Card>
    </main>
  );
}

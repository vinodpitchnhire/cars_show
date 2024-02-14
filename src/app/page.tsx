'use client'
import Image from "next/image";
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import dynamic from 'next/dynamic';
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox";
const AppEditor = dynamic(() => import('@/components/Editor'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <Card className="w-[650px]">
        <div className="flex items-center gap-4 w-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <div className="h-12 px-4 flex items-center py-5 w-full rounded-full border-2 cursor-pointer">
                  <p>Start a post</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <div className="flex gap-3 items-center">
                    <div>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <DialogTitle>Mark Davidson</DialogTitle>
                      <p className="text-sm">Post to Anyone</p>
                    </div>

                  </div>

                  <div className="py-10">
                    <AppEditor className="" />
                  </div>


                </DialogHeader>

                <DialogFooter>
                  <div className="flex w-full justify-end">

                    <Button type="submit" className="bg-[#0a66c2] text-white text-xs ">Post</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </div>
        <CardFooter className="mt-6 p-0">
          <div className="w-full">
            <ul className="flex items-center justify-between">
              <li>Media</li>
              <li>Event</li>
              <li>Write Article</li>
            </ul>
          </div>
        </CardFooter>

      </Card>
      <Card className="w-[650px]">
        <div className="flex items-center gap-4 w-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full">

          </div>
        </div>

      </Card>


    </main>
  );
}

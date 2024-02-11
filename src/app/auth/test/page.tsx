import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="password" />
        <Button type="submit">Lgin</Button>
      </div>
    </main>
  );
}
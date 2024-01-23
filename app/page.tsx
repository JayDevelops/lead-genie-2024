import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
      <div className="space-x-4">
          <Button>Hello World</Button>
          <UserButton afterSignOutUrl="/" />
      </div>
  );
}

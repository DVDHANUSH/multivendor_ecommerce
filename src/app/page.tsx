import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
     <div>
      <div className="w-100 flex justify-end">
        <UserButton></UserButton>
        <ThemeToggle>
        </ThemeToggle>
      </div>
      <h1 className="fon-bold text-blue-500 font-barlow">Welcome to the course</h1>
        <Button variant="outline">Click here</Button>
     </div>
  );
}
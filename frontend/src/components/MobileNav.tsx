import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return(
    <Sheet>
       <SheetTrigger>
        <Menu className="text-cyan-600"/>
       </SheetTrigger>
       <SheetContent className="space-y-3">
        <SheetTitle>
            <span>Welcome to SharePlate!</span>
        </SheetTitle>
        <Separator/>
        <SheetDescription className="flex flex-col gap-4">
              <Button className="flex-1 font-bold bg-cyan-600">Log In</Button>
        </SheetDescription>
        </SheetContent> 
    </Sheet>
  )
}

export default MobileNav;
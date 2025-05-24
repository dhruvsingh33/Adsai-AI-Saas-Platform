import { UserButton } from "@clerk/nextjs";
import { Button } from "/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2>
      Hello From Next JS
      <br></br>
      <a href="http://localhost:3000/workspace">
        <Button>Subscribe</Button>
      </a>
      
      <UserButton/>
    </h2>
   </div>
  );
}

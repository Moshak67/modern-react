import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return (
    <div className="flex flex-wrap gap-4">
        
    {images.map((img) => (
      <div key={img.id} className="w-48 ">
        <img src={img.url} alt="image" />
      </div>
    ))}
  </div>
  )
}


export default async function HomePage() {

  

  return (
    <main className="">
      <SignedOut>
        <div className=" h-full w-full text-2xl text-center">
          Please sign in!
        </div>
      </SignedOut>
      <SignedIn>
<Images/>
      </SignedIn>
     
    </main>
  );
}

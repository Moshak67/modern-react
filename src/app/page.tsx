import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/10ce2e44-e8fa-4d35-b67b-20df30c04520-zfwlop.jpg",
  "https://utfs.io/f/666eb390-de8d-4a39-b394-c28c53611665-p6s4ir.jpg",
  "https://utfs.io/f/041ac38d-8a6c-4742-a55d-045953ccaa2a-8k990v.jpg",
  "https://utfs.io/f/ee3f6901-f1e0-4e10-b712-f03d61d47134-1yvnud.jpg",
  "https://utfs.io/f/76dd1106-6b47-4828-845c-7cf472b88e18-iujxz.jpg",
  "https://utfs.io/f/75293911-3f9d-4f1a-bc15-de318bff5fb0-uoy30e.jpg",
  "https://utfs.io/f/5dec1548-355c-4e73-acdc-9237ee274b92-6avhew.jpg",
  "https://utfs.io/f/25874175-09db-469d-b427-9aa6f8ad3e8f-ujmr1z.jpg",
]

const mockImages = mockUrls.map((url,idx) => ({
  id: idx+1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((img) => (
          <div key={img.id} className="w-48 ">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
     Hello (Gallery in progress)
    </main>
  );
}

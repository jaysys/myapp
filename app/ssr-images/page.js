import Image from "next/image";

//`${process.env.NEXT_PUBLIC_API_URL}/api/images`
//"http://localhost:3000/api/images"
export default async function SSRImagesPage() {
  const response = await fetch("http://localhost:3000/api/images", {
    cache: "no-store",
  });

  const images = await response.json();

  return (
    <div>
      <h1>SSR Images Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((img) => (
          <div key={img.id} style={{ margin: "10px" }}>
            <Image
              src={`data:image/jpeg;base64,${img.data}`}
              alt={`Image ${img.id}`}
              width={200}
              height={200}
            />
            <p>Image ID: {img.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

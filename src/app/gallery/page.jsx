import Image from "next/image";

const Gallery = () => {
  return (
    <div className="min-h-screen px-12 py-24">
      <h2 className="text-3xl mb-12">Gallery Page</h2>
      {/* <Image src="/images/1.jpg" alt="" height="1080" width="1920" /> */}
      {[1, 2, 3, 4, 5]?.map((img) => (
        <Image
          key={img}
          src={`/images/${img}.jpg`}
          alt=""
          height="1080"
          width="1920"
        />
      ))}
    </div>
  );
};

export default Gallery;

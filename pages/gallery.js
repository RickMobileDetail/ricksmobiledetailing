export default function Gallery() {
  const cars = [
    {
      name: "Ford Super Duty Detail",
      images: ["/gallery/superduty-before1.jpg", "/gallery/superduty-after1.jpg", "/gallery/superduty-before2.jpg"]
    }
  ];
  return (
    <main className="container">
      <h1>Gallery</h1>
      {cars.map((car, i) => (
        <div key={i}>
          <h2>{car.name}</h2>
          <div className="slideshow">
            {car.images.map((img, j) => (
              <img key={j} src={img} alt={`Slide ${j}`} width={300} height={200} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
import Image from "next/image";
export default function Services() {
  const services = [
    { name: "Paint Correction", image: "/images/paint-correction.jpg", desc: "Swirls, oxidation, light scratches removed." },
    { name: "Fleet Service", image: "/images/fleet-service.jpeg", desc: "Clean and maintain company vehicles." },
    { name: "Interior Detail", image: "/images/interior-detail.jpeg", desc: "Vacuum, shampoo, deep clean interior." },
    { name: "Exterior Detail", image: "/images/exterior-detail.jpeg", desc: "Wash, clay bar, wax, shine." }
  ];
  return (
    <main className="container">
      <h1>Our Services</h1>
      {services.map((s, i) => (
        <div key={i} className="card">
          <Image src={s.image} alt={s.name} width={300} height={200} />
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
          <a href="https://api.leadconnectorhq.com/widget/booking/KPKL8GjIqPNbxmkWu4J8" target="_blank" rel="noopener noreferrer">
            <button>Book a Call</button>
          </a>
        </div>
      ))}
    </main>
  );
}
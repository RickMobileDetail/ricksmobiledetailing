import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Rick's Mobile Detailing</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Full-Service Detailing at Your Place or Ours
      </p>
      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
        <a href="https://api.leadconnectorhq.com/widget/booking/KPKL8GjIqPNbxmkWu4J8" target="_blank" rel="noopener noreferrer">
          Book a Call
        </a>
      </nav>
    </main>
  );
}
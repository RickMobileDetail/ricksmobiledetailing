import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="container">
      <Image src="/images/logo.png" alt="Rick's Logo" width={150} height={150} />
      <h1>Rick's Mobile Detailing</h1>
      <p className="tagline">Full-Service Detailing at Your Place or Ours</p>
      <div className="slideshow">
        <Image src="/images/before1.jpg" alt="Before" width={300} height={200} />
        <Image src="/images/after1.jpg" alt="After" width={300} height={200} />
      </div>
      <nav className="nav">
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <div id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        <a href="https://api.leadconnectorhq.com/widget/booking/KPKL8GjIqPNbxmkWu4J8" target="_blank" rel="noopener noreferrer">
          <button className="book-btn">Book a Call</button>
        </a>
      </div>
    </main>
  );
}
import Image from "next/image";
import Link from 'next/link';
import ProductCard from "./components/productCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  );
}

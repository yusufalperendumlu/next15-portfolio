import Link from "next/link";

export default function Products() {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <h1>Product list</h1>
        <h2>
          <Link href="/products/1">product 1</Link>
        </h2>
        <h2>product 2</h2>
        <h2>product 3</h2>
      </div>
    </>
  );
}

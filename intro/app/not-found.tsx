import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <h4>Could not find requested resource</h4>
      <Link href="/">Home</Link>
    </div>
  );
}

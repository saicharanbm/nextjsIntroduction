import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">Review for this ID not found</h1>
      <h4 className="text-lg text-gray-600">
        Could not find the requested resource
      </h4>
      <Link className="text-blue-500 hover:underline" href="/">
        Home
      </Link>
    </div>
  );
}

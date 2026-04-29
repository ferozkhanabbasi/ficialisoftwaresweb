import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="logo" className="h-8" loading="lazy" />
      <p className="text-2xl font-semibold">Ficiali</p>
    </Link>
  );
}

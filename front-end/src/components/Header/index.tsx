import Link from "next/link";
import { LuCakeSlice } from "react-icons/lu";

const routesInfo = [
  {
    titulo: "Encomendo já o seu produto",
    slug: "encomendar-produto",
  },
  {
    titulo: "Doces",
    slug: "doces",
  },
  {
    titulo: "Contato",
    slug: "contato",
  },
  {
    titulo: "Quem somos",
    slug: "quem-somos",
  },
];

const iconProps = {
  color: "rgb(147 197 253)",
  size: "40"
};

export default function Header() {

  return (
    <header className="flex justify-between items-center w-full bg-zinc-700 h-20">
      <Link href="/" className="flex items-center justify-center p-6 gap-3">
        <h1 className="text-blue-300 text-2xl">Site Doces</h1>
        <LuCakeSlice {...iconProps}/>
      </Link>
      <nav>
        <ul className="flex justify-between gap-5 m-4">
          {routesInfo.map((route, idx) => (
            <Link
              href={`/${route.slug}`}
              key={idx}
              className="text-white transition-all	 hover:text-blue-300"
            >
              {route.titulo}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

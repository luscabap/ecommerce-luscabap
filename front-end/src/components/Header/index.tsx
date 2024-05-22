import Link from "next/link";
import { LuCakeSlice } from "react-icons/lu";
import ToggleTheme from "../ToggleTheme";
import { MdPeopleOutline } from "react-icons/md";

type HeaderProps = {
  titulo: string;
  secundario?: boolean;
};

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
  color: "rgb(157 23 77)",
  size: "40"
};

export default function Header({ titulo, secundario = false }: HeaderProps) {
  return (
    <header
      className={`flex justify-between items-center w-full bg-yellow-500 h-20 rounded-md dark:bg-transparent transition-all border-2 border-solid border-yellow-500
      ${secundario ? "bg-white border-blue-300 border-solid border-2 rounded-md bg-transparent" : "bg-yellow-500"}`}
    >
      <Link href="/" className="flex items-center justify-center p-6 gap-3">
        <h1 className="text-pink-800 text-2xl" data-testid="title">
          {titulo}
        </h1>
        <LuCakeSlice {...iconProps} />
      </Link>
      <nav>
        <ul className="flex justify-between gap-5 m-4">
          {routesInfo.map((route, idx) => (
            <Link
              href={`/${route.slug}`}
              key={idx}
              className={`text-white transition-all hover:text-pink-500  dark:text-black ${secundario ? "text-black" : "text-white"}`}
            >
              {route.titulo}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-5 m-5">
        <ToggleTheme />
        <MdPeopleOutline {...iconProps}/>
      </div>
    </header>
  );
}

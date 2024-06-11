"use client";
import { UseAppContext } from "@/context";
import ContainerDoce from "../ContainerDoce";
import { docesProps } from "@/types/doceProps";

interface IMainProps {
  data: {
    doces: docesProps[]
  }
}

export default function Main() {
  const { data }: IMainProps = UseAppContext();
  console.log(data);
  return (
    <main>
      <span className="flex items-center justify-center gap-3 m-3">
        {data.doces.map((doce) => (
          <ContainerDoce
            key={doce.id}
            categoria={doce.categoria}
            foto={doce.foto}
            preco={doce.preco}
            titulo={doce.titulo}
            peso={doce.peso}
            serve={doce.serve}
          />
        ))}
      </span>
    </main>
  );
}

import ContainerDoce from "@/components/ContainerDoce";
import { docesProps } from "@/types/doceProps";

interface IRequisicaoDoces {
  doces: docesProps[]
}

async function getData(): Promise<IRequisicaoDoces>{
  const requisicao = await fetch("http://localhost:4000/doces", { next: { revalidate: 10 } });

  if(!requisicao.ok){
    throw new Error("Falha ao fazer a requisição.");
  }

  const resposta = await requisicao.json();
  return resposta;
}

export default async function Home() {
  const data = await getData();
  console.log(data.doces);
  return (
    <main>
      <h1 className="text-green-400">Hello World!</h1>
      <span className="flex items-center justify-center gap-3 m-3">
        { data.doces.map(doce => <ContainerDoce
          key={doce.id}
          categoria={doce.categoria}
          foto={doce.foto}
          preco={doce.preco}
          titulo={doce.titulo}
          peso={doce.peso}
          serve={doce.serve}/>) }
      </span>
    </main>
  );
}

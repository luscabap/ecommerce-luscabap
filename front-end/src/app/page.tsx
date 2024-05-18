type respostaApi = {
  resposta: string
}

// export const getServerSideProps = async () => {
//   const requisicao = await fetch("http://localhost:4000/");
//   const resposta = await requisicao.json();

//   return {
//     props: {
//       resposta
//     }
//   };
// };

async function getData(){
  const requisicao = await fetch("http://localhost:4000/");

  if(!requisicao.ok){
    throw new Error("Falha ao fazer a requisição.");
  }

  const resposta = await requisicao.json();
  return resposta;
}



export default async function Home() {
  const data = await getData();
  return (
    <main>
      <h1 className="text-green-400">Hello World!</h1>
    </main>
  );
}

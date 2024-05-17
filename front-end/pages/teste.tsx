type teste = {
  resposta: {
  }
}

export const getServerSideProps = (async () => {
  const requisicao = await fetch("http://localhost:4000/");
  const resposta = await requisicao.json();

  return {
    props: {
      resposta,
    }
  };
});

export default function TestePage({ resposta }: teste){
  console.log(resposta);

  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
  );
}

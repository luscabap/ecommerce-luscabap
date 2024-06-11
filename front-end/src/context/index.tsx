"use client";
import { createContext, useState, useContext } from "react";
import { docesProps } from "@/types/doceProps";

interface IRequisicaoDoces {
  doces: docesProps[];
}

async function getData(): Promise<IRequisicaoDoces> {
  const requisicao = await fetch("http://localhost:4000/doces", {
    next: { revalidate: 10 },
  });

  if (!requisicao.ok) {
    throw new Error("Falha ao fazer a requisição.");
  }

  const resposta = await requisicao.json();
  return resposta;
}

const AppContext = createContext<any>(undefined);

export async function AppWrapper({ children }:{
  children: React.ReactNode;
}) {
  const data = await getData();

  return (
    <AppContext.Provider value={{
      data
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
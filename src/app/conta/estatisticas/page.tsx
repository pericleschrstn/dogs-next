import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(() => import("@/components/conta/conta-estatisticas"), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
});

export const metadata: Metadata = {
  title: "Estatísticas - Minha conta",
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();
  if (!data) return null;
  return <ContaEstatisticas data={data} />;
}

import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  if (!data) return { title: "Foto" };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  if (!data) return notFound();

  return (
    <section className="container mainContainer">
      <FeedModal photo={data} />
    </section>
  );
}
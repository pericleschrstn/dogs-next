import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function HomePage() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p>Nenhuma foto foi postada</p>
        </div>
      )}
    </section>
  );
}

import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  //   );
  //   const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="lihat semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title=" Rekomendasi"
          linkTitle="lihat semua"
          linkHref="/populer"
        />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
};

export default Page;

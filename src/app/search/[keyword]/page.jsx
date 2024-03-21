import { getAnimeResponse } from "../../../libs/api-libs";
import AnimeList from "../../../components/AnimeList/index";
import Header from "../../../components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header
          title={`pencarian untuk ${decodedKeyword}...`}
          linkTitle="lihat semua"
          linkHref="/populer"
        ></Header>
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

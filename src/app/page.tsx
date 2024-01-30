import TopSearchForm from "@/components/molecules/forms/TopSearchForm";
import TopHero from "@/components/organisms/Hero/TopHero";
import { getCocktails } from "@/libs/getCockTail";
import Link from "next/link";

export default async function Home() {
  const results = await getCocktails({
    word: "test",
    alcohol_to: 20,
  });

  return (
    <main>
      <TopHero>
        <div className="hero-content text-center text-neutral-content">
          <div className="glass m-auto  w-11/12 p-4 md:max-w-7xl">
            <h1 className="mb-5 flex justify-center font-bold">
              <img src="/images/logo/light-big-logo.png" />
            </h1>
            <div className="my-5">
              <TopSearchForm />
            </div>
            <div className="my-5 flex w-full items-center justify-center">
              <Link
                href="/list"
                className="btn btn-outline w-1/2 hover:bg-base-200 hover:text-white"
              >
                一覧を見る
              </Link>
            </div>
          </div>
        </div>
      </TopHero>
    </main>
  );
}

import TopSearchForm from "@/components/molecules/forms/TopSearchForm";
import TopHero from "@/components/organisms/Hero/TopHero";

export default function Home() {
  return (
    <main>
      <TopHero>
        <div className="hero-content text-center text-neutral-content">
          <div className="glass m-auto  w-11/12 p-4 md:max-w-3xl">
            <h1 className="mb-5 flex justify-center font-bold">
              <img src="/images/logo/light-big-logo.png" />
            </h1>
            <div className="mb-5">
              <TopSearchForm />
              <p className="mt-3 text-right text-xs">
                ※カクテル名は全て英語表記です
              </p>
            </div>
          </div>
        </div>
      </TopHero>
    </main>
  );
}

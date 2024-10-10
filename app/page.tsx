import CharacterList from "@/components/CharacterList";

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

export async function Home({ searchParams }: HomeProps) {
  return <CharacterList searchParams={searchParams} />;
}

export default Home;

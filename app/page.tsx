import CharacterList from "@/components/CharacterList";

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

const Home = ({ searchParams }: HomeProps) => {
  return <CharacterList searchParams={searchParams} />;
};

export default Home;

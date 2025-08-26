import CharacterContainer from "@/components/CharacterContainer";

const CharacterPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <CharacterContainer id={id} />
    </div>
  );
};

export default CharacterPage;

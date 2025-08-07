import CharacterContainer from "@/components/CharacterContainer";

const CharacterPage = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <CharacterContainer id={id} />
    </div>
  );
};

export default CharacterPage;

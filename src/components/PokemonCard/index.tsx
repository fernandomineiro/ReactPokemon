import {
  Container,
  Poster,
  Title,
  Weight,
  Height,
  Type,
  PokemonDetails
} from './styles';

interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  type: string;
  height: number;
}

export function PokemonCard({
  name,
  image,
  height,
  type,
  weight
}: PokemonCardProps) {
  return (
    <Container data-aos="zoom-out-up">
      <Title>{name}</Title>
      <Poster src={image} />
      <PokemonDetails>
        <Weight>Peso: {weight}</Weight>
        <Height>Altura: {height}</Height>
        <Type>Tipo: {type}</Type>
      </PokemonDetails>
    </Container>
  );
}

export async function fetchCharacters(
  page: number,
  status: string,
  gender: string
) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&status=${status}&gender=${gender}`
  );
  const data = await res.json();
  return data;
}

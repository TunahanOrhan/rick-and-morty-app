import React from "react";
import { PaginationWithLinks } from "./ui/pagination-with-links";
import { fetchCharacters } from "@/lib/api";
import StatusSelect from "./StatusSelect";
import GenderSelect from "./GenderSelect";
import { Card } from "./ui/card";

interface CharacterListProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CharacterList({
  searchParams,
}: CharacterListProps) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const gender = searchParams.gender ? searchParams.gender : "";
  const status = searchParams.status ? searchParams.status : "";

  const characters = await fetchCharacters(currentPage, status, gender);
  console.log(characters);

  return (
    <div className="w-full">
      <div className="flex gap-4 justify-center mx-auto p-4 md:p-10">
        <StatusSelect />
        <GenderSelect />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {characters.results.map((character: any) => (
          <Card
            key={character.id}
            className="border-none max-w-96 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out bg-[#F0E14A]"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full rounded-t-lg"
            />
            <div className="p-2">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">{character.name}</h1>
                <span className="ml-auto font-normal">{character.gender}</span>
              </div>
              <div className="flex flex-col">
                <div
                  className={`${
                    character.status == "Alive"
                      ? "text-green-500" : character.status == "Dead" ? "text-red-500"
                      : "text-gray-500"
                  } capitalize`}
                >
                  {character.status}
                </div>
                <div>
                  <span className="font-semibold capitalize">Type: </span>
                  {character.type ? character.type : "Unknown"}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="p-6">
        <PaginationWithLinks
          page={currentPage}
          pageSize={20}
          totalCount={characters.info.count}
        />
      </div>
    </div>
  );
}

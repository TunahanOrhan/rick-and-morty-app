"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const GenderSelect = () => {
  const router = useRouter();

  const handleGenderChange = (value: string) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set("gender", value);
    currentSearchParams.set("page", "1");
    router.push(`/?${currentSearchParams.toString()}`); // update url
  };

  return (
    <Select onValueChange={handleGenderChange}>
      <SelectTrigger className="w-1/4 border-[#97CE4C]">
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="genderless">Genderless</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GenderSelect;

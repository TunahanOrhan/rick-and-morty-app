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

const StatusSelect = () => {
  const router = useRouter();

  const handleStatusChange = (value: string) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set("status", value);
    currentSearchParams.set("page", "1");
    router.push(`/?${currentSearchParams.toString()}`); // update url
  };

  return (
    <Select onValueChange={handleStatusChange}>
      <SelectTrigger className="w-1/4 border-[#97CE4C]">
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="alive">Alive</SelectItem>
          <SelectItem value="dead">Dead</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusSelect;

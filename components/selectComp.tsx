import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const websiteTypes = [
  "Business Websites",
  "E-commerce Platforms",
  "Landing Pages",
  "Blogs and Content Websites",
  "Portfolio Sites",
];

export default function WebsiteTypeSelector() {
  const [selectedType, setSelectedType] = React.useState("");

  return (
    <div className="w-full max-w-xs mx-auto">
      <Select onValueChange={setSelectedType} value={selectedType}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a website type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Website Types</SelectLabel>
            {websiteTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedType && (
        <p className="mt-4 text-sm text-muted-foreground">
          You selected: {selectedType}
        </p>
      )}
    </div>
  );
}

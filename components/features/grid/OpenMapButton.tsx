"use client";

import { Map } from "lucide-react";
import Button from "@/components/ui/Button";
import { useGrid } from "@/hooks/useGrid";

export default function OpenMapButton() {
  const { openMap } = useGrid();
  return (
    <Button variant="ghost" onClick={openMap}>
      <Map className="size-4" aria-hidden="true" />
      Open the grid map
    </Button>
  );
}

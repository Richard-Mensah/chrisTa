import type { DiagramKey, RoleId } from "@/types";
import DistributionDiagram from "./DistributionDiagram";
import LifecycleDiagram from "./LifecycleDiagram";
import SolarPlantDiagram from "./SolarPlantDiagram";
import SubstationDiagram from "./SubstationDiagram";

type Props = {
  diagram: DiagramKey;
  role?: RoleId;
};

/** Picks the illustrative diagram for a case study or training guide. */
export default function CaseDiagram({ diagram, role }: Props) {
  if (diagram === "solar") return <SolarPlantDiagram />;
  if (diagram === "distribution") return <DistributionDiagram />;
  if (diagram === "substation") return <SubstationDiagram />;
  return <LifecycleDiagram role={role} />;
}

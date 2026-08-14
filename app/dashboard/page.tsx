import { NetworkBoard } from "@/components/network-board";
import { getNetworkSnapshot } from "@/lib/mock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Interactive demonstration map of Shield Chicago flood stations with neighborhood hydrographs and a list view.",
};

export default function DashboardPage() {
  const snapshots = getNetworkSnapshot();
  return <NetworkBoard snapshots={snapshots} />;
}

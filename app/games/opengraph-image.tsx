import Thumbnail from "@/components/thumbnail";

export default function OGImage() {
  return Thumbnail({
    title: "Jogos",
    description: "Jogos para você se divertir.",
    route: ["games"],
  });
}

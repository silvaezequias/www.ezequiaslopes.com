import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { games } from "@/app/util/projects";

export function Games(prop: { amount?: number }) {
  const slicedGames = games.slice(
    0,
    (prop.amount || Infinity) > games.length ? games.length : prop.amount,
  );

  return (
    <div
      className="mt-10 grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${slicedGames.length > 1 ? 2 : 1}, 1fr)`,
      }}
    >
      {games
        .slice(
          0,
          (prop.amount || Infinity) > games.length ? games.length : prop.amount,
        )
        .map((p) => (
          <Link
            key={p.title}
            href={p.href || p.github}
            target="_blank"
            className="group overflow-hidden rounded border border-neutral-900 bg-neutral-950 transition-colors hover:hover:border-neutral-400"
          >
            <div className="relative flex h-70 min-h-56 w-full bg-zinc-950 overflow-hidden">
              <Image
                fill
                src={p.imageQuery!}
                alt={p.title}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-neutral-800 text-neutral-400"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <h3 className="mt-3 text-neutral-100">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{p.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

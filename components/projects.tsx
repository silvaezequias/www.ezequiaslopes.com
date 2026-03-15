import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { projects } from "@/app/util/projects";

export function Projects(prop: { amount?: number }) {
  const slicedProjects = projects.slice(
    0,
    (prop.amount || Infinity) > projects.length ? projects.length : prop.amount,
  );

  return (
    <div
      className="mt-10 grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${
          slicedProjects.length > 1 ? 2 : 1
        }, 1fr)`,
      }}
    >
      {slicedProjects.map((p) => (
        <Link
          key={p.title}
          href={p.href || p.github}
          target="_blank"
          className="group overflow-hidden rounded border border-neutral-900 bg-neutral-950 transition-colors hover:hover:border-neutral-400 flex flex-col h-full"
        >
          <div className="relative flex min-h-56 h-full w-full bg-neutral-950 overflow-hidden">
            <Image
              fill
              src={`/images/projects/${p.name
                .toLocaleLowerCase()
                .replace(/\s/g, "-")}.png`}
              alt={p.title}
              className="object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-end h-full">
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

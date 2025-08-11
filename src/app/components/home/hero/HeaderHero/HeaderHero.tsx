import itemsHeader from "@/src/app/data/itemsHeader";
import Link from "next/link";

export function HeaderHero() {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-transparent hover:bg-third transition-all duration-300">
      <Link href={"/"} className="font-primary tracking-tighter text-3xl">
        AM
      </Link>
      <div className="flex items-center gap-4 font-secondary uppercase font-semibold tracking-wider">
        {
          itemsHeader.map(({ link, title }, index) => {
            return (
              <Link href={link} key={index} className="hover:text-white transition-all duration-300">
                {title}
              </Link>
            )
          })
        }
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

const trends = [
  {
    title: "Soft Minimalism",
    tag: "Apparel",
    image: "/images/lookbook/trend-1.jpg",
    href: "/collections/womens",
  },
  {
    title: "Urban Trail",
    tag: "Footwear",
    image: "/images/lookbook/trend-2.jpg",
    href: "/collections/mens",
  },
  {
    title: "Earth Tones",
    tag: "Accessories",
    image: "/images/lookbook/trend-3.jpg",
    href: "/collections/womens",
  },
  {
    title: "Clean Comfort",
    tag: "Unisex",
    image: "/images/lookbook/trend-4.jpg",
    href: "/collections/mens",
  },
];

export function LookbookTrends() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-12">
      <div className="mb-8 text-center">
        <p className="text-[11px] uppercase tracking-[1.5px] text-warm-gray mb-2">
          Editorial
        </p>
        <h2 className="text-[36px] font-normal text-charcoal">
          New Lookbook Trends
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {trends.map((trend) => (
          <Link key={trend.title} href={trend.href} className="group block">
            <div className="relative overflow-hidden aspect-[3/4] bg-stone-100">
              <Image
                src={trend.image}
                alt={trend.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
            <div className="mt-3">
              <span className="text-[10px] uppercase tracking-[1px] text-warm-gray">
                {trend.tag}
              </span>
              <h3 className="text-[15px] font-normal text-charcoal mt-0.5 group-hover:underline underline-offset-2">
                {trend.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

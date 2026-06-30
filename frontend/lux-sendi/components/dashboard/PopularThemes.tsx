import { url } from "inspector";
import Image from "next/image";

const themes = [
  {
    name: "Theme Barbie",
    bookings: 42,
    url: "/themebarbie2.jpeg"
  },
  {
    name: "Theme Purple",
    bookings: 36,
    url: "/themepurple2.jpeg"
  },
  {
    name: "The Reunion",
    bookings: 29,
    url: "/themereunion1.jpeg"
  },
];

export default function PopularThemes() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-semibold">
          Popular Themes
        </h2>

        <button className="text-[#B8860B]">
          Manage
        </button>

      </div>

      <div className="space-y-5">

        {themes.map((theme ) => (

          <div
            key={theme.name}
            className="flex gap-5 rounded-2xl  p-4 hover:shadow-md transition"
          >

            <Image src={theme.url} width={100} height={100} alt={theme.name} className="rounded-xl" ></Image>

            <div className="flex flex-col justify-center">

              <h3 className="text-lg font-semibold">
                {theme.name}
              </h3>

              <p className="text-zinc-500">
                {theme.bookings} bookings
              </p>

            </div> 

          </div>

        ))}

      </div>

    </section>
  );
}
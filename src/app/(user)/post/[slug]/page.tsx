import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import urlFor from "../../../../../sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Prop = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 sec

// generate slug routes array of strings for static site generation
export async function generateStaticParams() {
  const query = groq`*[_type=='post']{slug}`;

  const slug: Post[] = await client.fetch(query);
  const slugRoutes = slug.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Prop) {
  const query = groq`
        *[_type=='post' && slug.current== $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#6254f3] ">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-xsm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage?.alt || "no alt"}
              fill
            ></Image>
          </div>

          <section className="p-5 bg-[#6154f3a3] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="flex flex-col justify-between gap-y-1">
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="px-2 flex flex-row justify-start items-center gap-3">
                <Image
                  className="rounded-full object-cover"
                  height={35}
                  width={35}
                  alt={post.author.name}
                  src={urlFor(post.author.image).url()}
                />
                <div className="">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/*TODO: author bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10 line-clamp-2 ">{post.description}</h2>

              <div className="pt-5 flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-center justify-end">
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="bg-[#6254f3] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    <p>{category.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogList from "@/components/BlogList";

const query = groq`*[_type=='post'] {...,author->,categories[]->} | order(_createdAt desc)`;

export const revalidate = 60; // revalidate this page every 60 sec

export default async function Home() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div>
      {/* Blog list */}
      <BlogList posts={posts} />
    </div>
  );
}

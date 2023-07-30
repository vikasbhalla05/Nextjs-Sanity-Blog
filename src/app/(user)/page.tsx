import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogList from "@/components/BlogList";

const query = groq`*[_type=='post'] {...,author->,category[]->} | order(_createdAt desc)`;

export default async function Home() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div>
      {/* Blog list */}
      <BlogList posts={posts} />

      <h1>Not in Preview</h1>
    </div>
  );
}

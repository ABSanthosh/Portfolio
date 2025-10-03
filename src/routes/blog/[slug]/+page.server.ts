export const prerender = true;

export async function load({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const post = await import(`../../../data/articles/blog/${params.slug}.md`);

  return {
    html: post.default.render().html as string,
    meta: post.metadata as {
      [key: string]: string;
    },
  };
}

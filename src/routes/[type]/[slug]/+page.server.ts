export async function load({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const post = await import(
    `../../../data/articles/${params.type}/${params.slug}.md`
  );
  return {
    html: post.default.render().html,
    meta: post.metadata,
  };
}

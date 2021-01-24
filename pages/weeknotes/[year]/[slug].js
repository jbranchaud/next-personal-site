import { useRouter } from "next/router";
import { getAllWeeknotes, getWeeknote } from "../../../lib/api/content";
import markdownToHtml from "../../../lib/markdownToHtml";
import Layout from "../../../src/components/layout";

const WeeknotesTemplate = ({ weeknote }) => {
  const { year, title, content } = weeknote;

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Weeknotes: {title}</h1>
      <div className={"prose"} dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  // const post = getPostBySlug(params.slug, [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'content',
  //   'ogImage',
  //   'coverImage',
  // ])
  const { year, slug } = params;
  const weeknote = getWeeknote(year, slug);
  const content = await markdownToHtml(weeknote.content || "");

  return {
    props: {
      weeknote: {
        ...weeknote,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const weeknotes = await getAllWeeknotes();

  return {
    paths: weeknotes.map(({ year, slug, ...rest }) => {
      return {
        params: {
          year: year,
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}

export default WeeknotesTemplate;

import React from "react";
import { getWeeknotesByYear } from "../../lib/api/content.js";
import Layout from "../../src/components/layout";

const WeeknotesIndex = ({ weeknotesByYear }) => {
  return (
    <Layout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Weeknotes</h1>
        {Object.entries(weeknotesByYear).map(([year, weeknotes]) => {
          return (
            <React.Fragment key={year}>
              <h2 className="text-lg font-bold">{year}</h2>
              <div>
                {weeknotes.map(({ title, slug }) => {
                  return (
                    <ul key={slug}>
                      <li>
                        <a href={`weeknotes/${year}/${slug}`}>{title}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const weeknotesByYear = await getWeeknotesByYear();

  return {
    props: {
      weeknotesByYear,
    },
  };
}

export default WeeknotesIndex;

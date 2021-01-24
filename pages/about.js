import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/layout.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>About · Josh Branchaud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1>About</h1>
          <p>
            My name is Josh Branchaud. I'm an independent software developer and
            consultant. If you'd like to work with me,{" "}
            <a
              className="underline text-purple-600 pointer hover:text-purple-800"
              href="mailto:jbranchaud@gmail.com"
            >
              reach out
            </a>
            . You can also find me on{" "}
            <a
              className="hover:underline text-purple-600 pointer hover:text-purple-800"
              href="https://twitter.com/jbrancha"
            >
              twitter
            </a>
            .
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </Layout>
    </>
  );
}

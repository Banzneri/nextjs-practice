import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import React from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

interface Props {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Tervepä terve</p>
        <p>Nimeni on Pasi</p>
      </section>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a>
                <li className={utilStyles.listItem}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

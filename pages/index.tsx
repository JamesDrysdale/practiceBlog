import type { NextPage } from 'next'
import Head from 'next/head'
import CallToAction from '../components/CallToAction'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <CallToAction />
      <Posts />

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"]{
    _id,
    title,
    author -> {
     name,
     image
  },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }

};

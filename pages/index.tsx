// import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/image";
import RecentPost from "../components/RecentPost";
// import metadata from "../data/metadata";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";


const HomeProfile = dynamic(() => import('../components/HomeProfile'), {
  ssr: false,
})

function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <>
        <HomeProfile />
        {posts.length >= 5 ? (
          <RecentPost posts={posts.slice(0, 5)} />
        ) : (
          <RecentPost posts={posts} />
        )}
      </>
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Homepage




/*
const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metadata.home.name}
          </span>
        </div>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};
*/


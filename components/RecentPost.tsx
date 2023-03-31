import Link from "next/link"
import { PostCard, PostDescription, PostItlte, RecentPostTitle } from './RecentPost.style'

const RecentPost = ({ posts }) => {
  return (
    <>
      <RecentPostTitle>Recent Post</RecentPostTitle>
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
            <PostCard>
              <PostItlte>{post.title}</PostItlte>
              <PostDescription>{post.description}</PostDescription>
            </PostCard>
          </Link>
        ))}
      </>
    )
}
export default RecentPost

//     <section className={`mt-10`}>
//       <h1 className={`text-3xl font-extrabold`}>Recent Posts</h1>
//       <div className={`flex flex-col`}>
//         {posts.slice(0, 5).map((post) => (
//           <Link
//             key={post._id}
//             href={`/blog/${post._raw.flattenedPath}`}
//             passHref
//           >
//             <a className="mt-5">
//               <div className={`font-medium text-xl`}>{post.title}</div>
//               <div className={`font-light`}>{post.description}</div>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };


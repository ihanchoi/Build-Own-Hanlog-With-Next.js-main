import Head from 'next/head'
import { ContainerContainer, Main } from './Container.style'
import Footer from './Footer'
// import GA from './GA' // google analytics 
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <GA /> */}
      <ContainerContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ContainerContainer>
    </>
  )
}

export default Container


// import Image from "next/image";
// import Head from "next/head";
// import metadata from "../data/metadata";
// import Nav from "./Nav";

// const Container = (props) => {
//   const meta = {
//     title: metadata.meta.title,
//     description: metadata.meta.description,
//     author: metadata.author,
//     ...props.customMeta,
//   };

//   return (
//     <div className={`w-full flex flex-col items-center p-3`}>
//       <Head>
//         <title>{meta.title}</title>
//         <meta content={meta.description} name="description" />
//         <meta property="og:site_name" content={meta.author} />
//       </Head>
//       <header
//         className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
//       >
//         <div className={`flex flex-row items-center`}>
//           <Image
//             src={`/logo.jpg`}
//             alt="로고"
//             width={40}
//             height={40}
//             objectFit={`cover`}
//             className={`rounded-full`}
//           />
//           <span className={`mx-2 font-extralight text-lg`}>
//             {metadata.meta.title}
//           </span>
//         </div>
//         <Nav />
//       </header>
//       <main className={`w-full max-w-3xl`}>{props.children}</main>
//     </div>
//   );
// };

// export default Container;

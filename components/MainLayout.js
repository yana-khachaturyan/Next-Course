import Link from "next/link"
import Head from "next/head"


export function MainLayout ({children, title='Next App'}){
    return (
        <>
        <Head>
      
            <title>{title} | Next Course</title>
            <meta charSet="utf-8"/>
            <meta name="keyword" content="next,javascript, nextjs,react"/>
            <meta name="description" content="this is just example of next"/>
        </Head>
        <nav>
        <Link href={'/'}><h3> Home </h3></Link>
        <Link href={'/about'}><h3>About </h3></Link>
        <Link href={'/posts'}><h3>Posts </h3></Link>
        </nav>
            <main>
                {children}
            </main>
      <style jsx global>{`
      
    nav{
        position:fixed;
        height:60px;
        left:0;
        top:0;
        right:0;
        background-color: navy;
        display: flex;
        justify-content: space-around;
        align-items:center;
      }
    nav a{
        color:#FFF;
        text-decoration:none;

    }
    nav a:hover{
        color:gray;
        text-decoration:none;
        
    }
    main{
        margin-top:60px;
        padding:1rem;
    }

      `}

      </style>
        </>
    )
}
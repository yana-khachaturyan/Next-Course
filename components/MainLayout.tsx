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
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
        </Head>
        <nav>
        <Link href={'/'}><h4> Home </h4></Link>
        <Link href={'/about/'}><h4>About </h4></Link>
        <Link href={'/posts/'}><h4>Posts </h4></Link>
        <Link href={'/post'}><h4>Typscript</h4></Link>
        <Link href={'/oldPosts/'}><h4>Posts(/id) </h4></Link>
        <Link href={'/about/article/'}><h4>Articles </h4></Link>
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
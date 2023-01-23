import { MainLayout } from "../../components/MainLayout"
import Link from "next/link"
//import { useRouter } from "next/router"
export default  function OldPosts (props){
       
    const {posts} = props;
    console.log(posts)
//    const router = useRouter()
    return (
    <>
    <MainLayout>
    {/* <h1>Post {router.query.id}</h1> */}

    </MainLayout>
    <div className="container">
    <div className="card border-primary mb-3" key={posts.id}>
    <div className="card-header">{posts.id} {posts.title}</div>
    <div className="card-body">
      <p className="card-text">{posts.body}</p>
              </div>
              </div>
     <Link href={'/posts'}>Back to all posts</Link>
              </div>
  
    </>
    )

}
OldPosts.getInitialProps = async(ctx) => {
    const data = await fetch (`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}/`);
    const result= await data.json();

    return {
        posts: result
       
    }
}
// import {useState, useEffect} from 'react'
import fetch from "isomorphic-unfetch";
import { MainLayout } from "components/MainLayout"  

const Posts = (props) => {

    //  const [posts, setPosts] = useState ([])
    //  useEffect(()=> {
    //      async function load() {
    //      const response = await fetch ('http://localhost:4200/posts')
    //      const json= await response.json()
    //      setPosts(json)
    //      }
    //      load()
    //  }, [])
    
    const {posts} = props;
    return (<>
    <MainLayout title={'Posts Page'}> 
    {/* <h1>Posts Page!</h1>
    <pre>{JSON.stringify([], null, 2)}</pre> */}
    
    </MainLayout>

    <div className="container">
        {posts.map(posts=>( <>
              <div className="card border-primary mb-3" key={posts.id}>
              <div className="card-header">{posts.id} {posts.title}</div>
              <div className="card-body">
                <p className="card-text">{posts.body}</p>
              </div>
              </div>
            </>
         ) ) }
    </div>

    </>
    )
};

Posts.getInitialProps= async (ctx)=> {
    const data = await fetch ('https://jsonplaceholder.typicode.com/posts/');
    console.log(data,'data');
    const result= await data.json();
    console.log(result,'result');
    return {
        posts: result
    }
};
export default Posts
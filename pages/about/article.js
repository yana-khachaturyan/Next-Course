 import {useState, useEffect} from 'react';
 import {API_KEY} from '../key/key'
 import { MainLayout } from 'components/MainLayout';
// import AuthorCss from '../../styles/author.module.scss'
import axios from 'axios'
const src = 'https://content.guardianapis.com/search?page=2&q=debate&api-key=test';
const apiKey=API_KEY;


export default  function Article (){
const [articles, setArticles]=useState([]);
useEffect(()=>{
axios
.get(src)
.then(data=>{
    setArticles(data.data.response.results);
})
}, [])
    // let [result, setResult]=useState(0);
    // let [result2, setResult2]=useState(0)
    // function clickMe() {
    //     setResult(result+1);
    //   }
    // useEffect(()=> {
    //     setResult2=(result*2);
    // }, [result]) 
    return (
        // <div className={AuthorCss.app}>
        // <h1>Result = {result}</h1>
        // <h1>Result*2 = {result*2}</h1>
        // <Button title="Add" onClick={clickMe}/>
        // </div>
        <>
            <MainLayout title={'Articles Page'}>    
         </MainLayout>
        <h3>{articles.map(article=>{
            return(
                <div>
                    <p><a href={article.webUrl}>{article.webTitle}</a></p>
                </div>
            )
        })}</h3>

        </>
    )
}
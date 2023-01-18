import Link from "next/link"
import {MainLayout} from '../components/MainLayout'
export default  function Index (){
    return (
    <MainLayout title={'Home Page'}>         
        <h1>Hello next js</h1>
        <p>Next.js is a framework for creating server-rendered JavaScript apps based on React.js, Node.js, Webpack and Babel.js.
             It is basically a project boilerplate for React, crafted with attention to best practices,
              that allows you to create "universal" web apps in a simple, consistent way, with hardly any configuration.
        </p>
        <p><Link href={'/about'}>About</Link></p>
        <p><Link href={'/posts'}>Posts</Link></p>
    </MainLayout>
    )
}
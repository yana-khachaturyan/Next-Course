import '../styles/main.scss'
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}) {
    return (
    <> 
    <NextNProgress 
    color="yellow" 
    startPosition={0.3} 
    stopDelayMs={200}
     height={2}
     />
    <Component {...pageProps}/>
    {/* <style jsx global>{`
    body{
        font-family: 'Roboto', sans-serif;
    }
    `}

    </style> */}
    </>
    )
}
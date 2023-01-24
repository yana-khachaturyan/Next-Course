import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render (){
        return (
            <Html>
              <Head >
            
<link rel="stylesheet" 
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
crossOrigin="anonymous"/>
      
              <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          )
        
    }
}

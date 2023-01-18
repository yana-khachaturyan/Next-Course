import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render (){
        return (
            <Html>
              <Head >
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      
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

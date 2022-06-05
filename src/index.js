import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


function Booklist(){


    return <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
       </section>
}


const Book=()=>{

    return (
        
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
}


      const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg" alt=""/>
        

            const Title = () => <h1>Where the Crawdads Sing  Delia Owens</h1>
            const Author = () => <h4 style={{color:'#617d98'}}>Paperback</h4>






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Booklist/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

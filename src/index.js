import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// setup variables

const firstBook={
     author:'Paperback',
     title:'Where the Crawdads Sing  Delia Owens',
     img:'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',

}

const secondBook={
     author:'Sumon',
     title:'This book is written by sumon',
     img:'https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL604_SR604,400_.jpg',

}




function Booklist(){


    return <section className='booklist'>
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>

            {/*//how to use children props*/}

            <p> Here P is the Children Props</p>

        </Book>



        <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
       </section>
}


const Book=(props)=>{

    //props destructuring
    const {img,title,author,children}= props;


    return (
        
        <article className='book'>
            <img src={img} alt=""/>
            {children}
            <h1>{title}</h1>
            <h4>{author}</h4>

        </article>
    );
}



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

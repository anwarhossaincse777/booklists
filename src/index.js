import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// setup variables

const books=[
            {
                id:1,
             author:'Paperback',
             title:'Where the Crawdads Sing  Delia Owens',
             img:'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',

        },

        {
            id:2,
             author:'Sumon',
             title:'This book is written by sumon',
             img:'https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL604_SR604,400_.jpg',

        },
    {
        id:3,
        author:'Sumon Updated',
             title:'This book is written by sumon',
             img:'https://images-na.ssl-images-amazon.com/images/I/71pQQ9mk8eL._AC_UL604_SR604,400_.jpg',

        },


];



function Booklist(){


    return <section className='booklist'>


        {/*array te map function calilam eitai deklam eikhane*/}

        {books.map((book,index)=>{

        const {img,title,author}=book;
        return(
           <Book key={book.id} book={book}>

           </Book>
        );
        })}

       </section>

}


const Book=(props)=>{

    //props destructuring
    const {img,title,author,children}= props.book;

//attribute, eventHandler

    //OnCLick ,onMouseOVer

    const clickHandler = (e) => {

      alert('hello world');

    };


    const complexExample = (author) => {

      alert(author);

    };

    return (

        <article className='book' onMouseOver={()=>{


         console.log(title);


        }}>
            <img src={img} alt=""/>
            {children}
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
             reference example
            </button>


            <button type="button" onClick={()=>complexExample(author)}>
             complex example
            </button>

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

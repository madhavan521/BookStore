import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams()
  useEffect(()=>{
    fetch(`http://localhost:8000/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setBook(data)
    })
  },[id])


  return (
    <div>
    <div className='d-flex justify-content-center'>
    <img src={book.imageurl} alt="" width="90%" height="370px" className='ms-3 coverimg'/>
      </div>
      <div className='ms-4 my-2 py-2'>
      <h4><strong>Name of the Book:</strong>{book.name}</h4>
      <p><strong>Name of the Author:</strong> {book.author}</p>
      <p><strong>Year of the Book Released: </strong>{book.releaseDate}</p>
      <p><strong>Publisher of the Book:</strong> {book.publisher}</p>
    </div>
    <div className='ms-4 my-2'>
       <p><strong>Description:</strong>
       Books have been a fundamental part of human civilization for centuries, serving as vessels of knowledge, culture, and imagination. From ancient scrolls to modern e-books, the written word has evolved, yet its significance remains profound. This essay explores the multifaceted roles that books play in our lives, highlighting their importance in education, personal development, and cultural preservation.

At their core, books are tools for education. They provide a structured way to absorb information and understanding about various subjects, from science and history to philosophy and the arts. Textbooks, for instance, are designed to relay specific knowledge systematically, equipping students with the tools they need to succeed academically. However, education extends beyond traditional textbooks. Literature, for example, introduces readers to different perspectives, fostering critical thinking and empathy. Through stories, readers engage with characters and scenarios that challenge their worldviews, encouraging a deeper understanding of humanity and society.

Books also serve as avenues for personal development. Reading can shape an individual’s identity, nurture imagination, and enhance cognitive abilities. For many, immersing oneself in a novel or a self-help book can inspire transformation. Literature often reflects the complexities of human emotions and relationships, offering solace to readers who may find parallels between their own experiences and those of the characters. Furthermore, reading has been shown to improve vocabulary, comprehension, and analytical skills, all of which are critical in both personal and professional settings.<b/>

In addition to their educational and personal benefits, books play a vital role in cultural preservation. They capture the essence of different times, places, and peoples, acting as a repository of collective memory. Historical texts and literary works contribute to a society’s shared identity, providing insights into past struggles and triumphs. Indigenous cultures, for instance, have begun to reclaim their narratives through literature, ensuring that their histories and traditions are not lost to time. In this way, books can be powerful tools for social change, fostering awareness and respect for diverse cultures and histories.</p>
    </div></div>
  );
};

export default ShowBook;

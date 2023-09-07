import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

// Import the Home.css file from the styles folder
import '../styles/Home.css' 


const Home = () => {

//  const [number, setNumber] = useState(0)

//  function increase(){
//   setNumber(number +1)
//  }

//  function decrease(){
//   setNumber(number - 1)
//  }


  return (
    <>

    {/* useState example */}
    {/* <div>
    <h1>{number}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </div> */}
    <div>
        
    <Navbar/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo. Labore rerum repellendus amet autem corporis est eius tempora, officiis voluptatibus ut laudantium ipsum aspernatur fugit quisquam beatae debitis. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse unde consequuntur minus laboriosam voluptate assumenda totam animi ab, nam nesciunt labore necessitatibus natus eius voluptatum quos reiciendis, expedita accusamus?
      Corrupti officia earum, praesentium veniam repudiandae aut magnam itaque quos nihil et inventore reprehenderit eos adipisci illum nam autem! Commodi eius porro dolorem sunt unde corporis perferendis. Harum, rem recusandae.
      Delectus at maxime voluptatibus quis minus qui aut ipsam, totam deleniti mollitia porro similique doloribus doloremque vel omnis voluptatem enim iusto. Architecto impedit, modi eligendi ipsum excepturi quae maxime fugiat?
      Odio nobis cum natus praesentium assumenda nihil, itaque fuga tempore commodi! Harum commodi laboriosam iste error, distinctio aut quasi quas tenetur. Autem, repudiandae sit fugiat odio soluta pariatur perspiciatis iste.
      Delectus consectetur, nihil distinctio voluptatibus, saepe possimus recusandae, inventore quas sed ducimus error doloremque laboriosam molestiae in. Consequatur, nemo aut mollitia unde suscipit dolore dicta asperiores? Placeat ipsa ad quam.

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque iusto recusandae omnis ab odit hic corporis, at a soluta nostrum, quam deleniti vel eos repellendus optio rem mollitia quas esse.
      </p>
      <hr />
     
      <div className="button-group">
        <Button text="Learn more" to ="/learnmore" />
      </div>
    </div>
    </>

  )
}

export default Home

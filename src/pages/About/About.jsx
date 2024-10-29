import React from 'react'
import "./About.css"
import AboutPic from "../../assets/images/AboutPic.jpg"

export default function About() {
  return (
    <>
      <div className="about">
        <div className="row">
            <div className="about-img">
                <img className='imgg' src={AboutPic} alt="My Photo" height={490} width={350}/>
            </div>
            <div className='col-md-6 about-contant'>
                <h1> About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corporis a explicabo autem? Debitis natus quam accusamus dolorem odit soluta ex doloribus ipsum alias reprehenderit neque excepturi commodi cum, facilis corporis quis magni suscipit quas numquam inventore, ut labore quisquam vitae eaque! Nulla molestias provident repudiandae alias pariatur nisi tempora impedit illum rem natus asperiores odio facere ducimus quia soluta ex aperiam, corporis inventore quidem distinctio architecto culpa! Neque, molestiae? Perspiciatis consequatur natus doloribus nesciunt modi, in veritatis quam excepturi, architecto culpa atque dicta veniam neque quia voluptatum? Sapiente libero nulla dolor cumque commodi qui voluptas molestias quis iure aspernatur quibusdam temporibus enim at eos, omnis perspiciatis pariatur nostrum incidunt laboriosam voluptates fuga eaque? Expedita eos neque nemo. Itaque animi quisquam tempore. Sequi tempore est, ab aspernatur ratione quis cum laborum delectus quaerat ut ipsa quos eligendi, placeat ducimus numquam minus corrupti in perspiciatis. Suscipit error nesciunt, illum saepe ipsam reprehenderit delectus eos itaque qui aliquam enim, minima officia quaerat sed sit ipsa obcaecati voluptas esse! Cum, eos expedita voluptatem consequuntur quas at perferendis ipsam in ab beatae quo numquam ratione ullam laudantium veniam.</p>
            </div>
        </div>
      </div>
    </>
  )
}

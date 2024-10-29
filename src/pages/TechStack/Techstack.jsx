import React from 'react'
import "./Techstack.css"
import { TechstackList } from "../../utils/TechstackList";

export default function Techstack() {
  return (
    <>
      <div className='techstack-contant'>
        <h1>Technologies Stack</h1>
        <p className='tech-contant'>
            👉 including programming Languages, framworks, databases, front-end and back-end tools, and APIs
        </p>
        <div className='cards'>
            {TechstackList.map((tech) => (
                <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-contant">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className='alig-self-center'>

                                    <tech.icon className='tech-icon'/>
                                    </div>
                                    <div className="media-body">
                                        <h4>{tech.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

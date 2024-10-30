import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";



const Workexp = () => {
  return (
    <>
      <div className='education-heading' id='work'>
        <h1>Expriences</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Aug 2024 - present"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<FaNodeJs />}
  >
    <h3 className="vertical-timeline-element-title">Backend Developer</h3>
    <h5 className="vertical-timeline-element-subtitle">Digihunger(IT Services and IT Consulting)</h5>
    <p>
     Gurugram, Haryana INDIA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="jun 2020 - Aug 2024"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Persperence Envision</h4>
    <p>
    Delhi, INDIA
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Workexp

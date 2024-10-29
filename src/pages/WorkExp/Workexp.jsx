import React from 'react'
import './Workexp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

export default function Workexp() {
  return (
    <>
      <div className="container work">
        <div className="work-exp">
        <h1>Expriences</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech(CSE)</h3>
    <h5 className="vertical-timeline-element-subtitle">Polaris school of technology(Starex University)</h5>
    <p>
    Starex University, Binola, P.O.Bhorakalan, Gurugram, Haryana 122413
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate(CBSE)</h3>
    <h4 className="vertical-timeline-element-subtitle">Dr. D Ram D.A.V Public School</h4>
    <p>
    Gola Road, Danapur, Patna, Bihar 801503 INDIA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation(CBSE)</h3>
    <h4 className="vertical-timeline-element-subtitle">Dr. D Ram D.A.V Public School</h4>
    <p>
      Gola Road, Danapur, Patna, Bihar 801503 INDIA
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

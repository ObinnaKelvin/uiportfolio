import React from 'react'
import { faCode, faCodeFork, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './stats.css'
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className='stats-container'>
        <div className='stats-container-holder'>
            <div className='holder-a'>
                <FontAwesomeIcon icon={faCode} />
            </div>
            <div className='holder-b'>
                <CountUp end={10000} duration={2} enableScrollSpy={true}/>+
                {/* 10,000+ */}
            </div>
            <div className='holder-c'>
                lines of code
            </div>
        </div>
        <div className='stats-container-holder'>
            <div className='holder-a'>
                <FontAwesomeIcon icon={faCodeFork} />
            </div>
            <div className='holder-b'>
                <CountUp end={600} duration={2} enableScrollSpy={true}/>+
                {/* 600+ */}
            </div>
            <div className='holder-c'>
                Git commits
            </div>
        </div>
        <div className='stats-container-holder'>
            <div className='holder-a'>
                <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className='holder-b'>
                <CountUp end={5} duration={2} enableScrollSpy={true}/>+
                {/* 5+ */}
            </div>
            <div className='holder-c'>
                years of professional experience
            </div>
        </div>
    </div>
  )
}

export default Stats
import React from 'react'
import '../section2.css';
import '../section2mobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from './button';
const section2 = () => {
  return (
    <div className='container_sec'>
        <div className='wrapper_section2'>
            <div className='heading'>
                <h2>Up-Level Your Communication</h2>
                <div style={{height:"8px"}}></div>
                <p>Unlock Grammarly Premium’s advanced features and suggestions.</p>
            </div>
            <div className='price_div'>
                <div className='free_plan'>
                    <p className='first'>FOR CASUAL WRITING</p>
                    <div style={{height:"9px"}}></div>
                    <h3 className='free_heading'>Free</h3>
                    <div style={{height:"9px"}}></div>
                    <p className='basic'>Basic writing suggestions.</p>
                    <div style={{height:"40px"}}></div>
                    <button disabled>Included In Premium</button>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Spelling</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Grammar</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Punctuation</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Conciseness</span>
                        </li>
                    </ul>
                </div>
                <div className='premium_plan'>
                    <p className='first'>FOR WORK OR SCHOOL</p>
                    <div style={{height:"9px"}}></div>
                    <h3 className='free_heading'>Premium</h3>
                    <div style={{height:"9px"}}></div>
                    <p className='basic'>Style, tone, and clarity improvements for writing at work and school.</p>
                    <div style={{height:"14px"}}></div>
                    <Button />
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span><b>Everything in Free</b></span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Clarity-focused sentence rewrites</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Tone adjustments</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Plagiarism detection</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Word choice</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Formailty level</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Fluence</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} color="#15C39A" />
                            <span>Additional advanced suggestions</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default section2
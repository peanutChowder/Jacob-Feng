import PropTypes from 'prop-types';
import { useEffect } from 'react';

import './timeline.css'

const Timeline = ({ setMenuOpen }) => {
    

    useEffect(() => {
        const { innerWidth: width, } = window
        if (width <= 767.98) {
            setMenuOpen("close")
        }
    }, [setMenuOpen])

    return (
        <div className="timeline">
            <div id='timeline-placeholder' className='container left'>
                <div className='content'>
                </div>
            </div>
            <div className='container left fd-element fade-down'>
                <div className='date'>May 2025</div>
                <i className='icon fa fa-home'></i>
                <div className='content'>
                    <b>Graduation:</b> BSc in Computer Engineering
                </div>
            </div>
            <div id='small-container' className='container right fd-element fade-down'>
                <div className='date'>May-Dec<br></br>2024</div>
                <i className='icon fa fa-home'></i>
                <div className='content'>Internship loading...</div>
            </div>
            <div className="container left fd-element fade-down">
                <div className="date">Jan-Sep<br></br>2023</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>Wireless Systems Engineer Co-op @ Teck Resources</h2>
                    <ul>
                        <li>
                            <b>Python, IOT:</b> Freed up 800+ Senior Network Engineer hours with the development of an automated LTE/5G router stress test suite running through Raspberry Pi.
                        </li>
                        <li>
                            <b>Python, PowerBI, PowerQuery:</b> Saved $500,000+ in autonomous haul truck downtime by predicting network outages with a Python data pipeline.
                        </li>
                        <li>
                            <b>Python, Powershell:</b> Enhanced network downtime forcasting accuracy by developing an optimized data pipeline for 50+ new KPIs across jumphosts.
                        </li>
                        <li>
                            <b>Hardware configuration:</b> Co-established a $1,000,000 faraday LTE/5G Testing Chamber by configuring routers, switches, and UEs (Cisco, Fortinet, AVI, etc.).
                        </li>
                        <li>
                            <b>Leadership:</b> Gave back by organizing charity events such as volunteer kitchens across 3 offices as the Coop Volunteering Manager.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container right fd-element fade-down">
                <div className="date">May-Sep<br></br>2022</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>Data Analyst Co-op @ University of Alberta</h2>
                    <ul>
                        <li>
                            <b>Python Pandas, Matplotlib:</b> Confirmed the plausibility of underground CO2 storage by spearheading the development of a geomechanical trend analysis tool built with Python, NumPy, and Matplotlib used by many professors.
                        </li>
                        <li>
                            <b>Python Data Processing:</b> Recovered 7+ years of CO2 storage data by automating the centralization of 500+ scattered files in Python&apos;s Pandas, Openpyxl, and csv libraries.
                        </li>
                        <li>
                            <b>Google Colab:</b> Restored data integrity by implementing hourly health checks for 300+ sensors in Google Colab.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Timeline.propTypes = {
    setMenuOpen: PropTypes.func.isRequired
}

export default Timeline
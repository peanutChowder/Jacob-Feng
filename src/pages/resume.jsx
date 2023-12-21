import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import "./resume.css"

const Resume = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='resume-content'>
                <h1 className='element animated'>Professional Experience</h1>
                <div className='description-container element animated'>
                    <h2>Wireless Systems Engineer Co-op @ Teck Resources</h2>
                    <p>
                        -  Saved $500,000+ in autonomous haul truck downtime by preemptively detecting network<br></br>
                        faults through creating a Power BI Dashboard and a Python SQL data pipeline on network KPIs.
                    </p>
                    <p>
                        - Facilitated the testing of 400+ mobile broadband devices across 3 mine sites by co-establishing a<br></br>
                        $1,000,000 networks lab in configuring network firewalls, Visio documentation, and phase shifts.
                    </p>
                    <p>
                        - Freed up 800+ Senior Network Engineer hours and $90,000+ of test equipment by automating 5G router<br></br>
                        stress tests on throughput, band switching, connection loss, etc. using Python network protocol libraries<br></br>
                        on Raspberry Pi to interface with routers, phase shifters, and attenuators.
                    </p>
                    <p>
                        - Routinely eliminated software faults by integrating automated unit tests with Python unitttest (library).
                    </p>
                    <p>
                        - Developed 50+ new KPIs to enhance LTE data analytics by creating an optimized Python and PowerShell<br></br>
                        data pipeline across jump hosts that parsed and calculated KPIs from 1MB/min of parameters for 3 mine<br></br>
                        sites.
                    </p>
                    <p>
                        - Gave back by organizing charity events across 3 offices as the Coop Volunteering Manager.
                    </p>
                </div>
                <div className='description-container element animated'>
                    <h2>Data Analyst Co-op @ University of Alberta</h2>
                    <p>
                        - Confirmed the plausibility of underground CO2 storage by spearheading the development of a<br></br>
                        geomechanical trend analysis tool built with Python, NumPy, and Matplotlib used by many professors
                    </p>
                    <p>
                        - Recovered 7+ years of CO2 storage data by automating the centralization of 500+ scattered files in Python&apos;s <br></br>
                        Pandas, Openpyxl, and csv libraries.
                    </p>
                    <p>
                        - Restored data integrity by implementing hourly health checks for 300+ sensors in Google Colab.
                    </p>
                </div>
            </div>
        </div>
    )
}

Resume.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Resume
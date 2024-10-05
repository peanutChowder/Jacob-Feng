import './timeline.css'

const Timeline = () => {
    return (
        <div className="timeline">
            <div id='timeline-placeholder' className='container left'>
                <div className='content'>
                </div>
            </div>
            <div className='container left fd-element fade-down'>
                <div className='date'>Jan 2026</div>
                <i className='icon fa fa-home'></i>
                <div className='content'>
                    <b>Graduation:</b> BSc in Computer Science
                </div>
            </div>
            <div id='small-container' className='container right fd-element fade-down'>
                <div className='date'>Jan-Sep<br></br>2025</div>
                <i className='icon fa fa-home'></i>
                <div className='content'>Internship loading...</div>
            </div>
            <div className="container right fd-element fade-down">
                <div className="date">May-Sep<br></br>2024</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>Software Engineer Intern @ Apple</h2>
                    <ul>
                        <li>
                            <b>Python, Foundation Models:</b> uilt and optimized an AI workflow for triaging Apple Watch logs that uses a tuned model to generate
                            analysis for logs based on preset questions.
                            <br></br>Improved workflow reliability by 500% and speed by 400% by using defensive programming to catch all
exceptions thrown by Foundation Model and multithreaded model calls, respectively.
                        </li>
                        <li>
                            <b>C++ Internal Tooling:</b> Implemented log visualization using C++ on an internal Mac App used by 15+ teams, generating charts for
                            2GB logs in ~1 second by using file chunking. <br></br> Features custom configurations, parallel operations such as searching + generating charts, and highlighting.
                        </li>
                        <li>
                            <b>Slack API, Python:</b> Developed a DevOps Slack Bot for issue tracking updates on milestones and progress using Python, hosted
                            on internal cloud.
                        </li>
                    </ul>
                </div>
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

export default Timeline
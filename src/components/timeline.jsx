import './timeline.css'

const Timeline = () => {
    return (
        <div className="timeline">
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
            {/* <div className="container left">
                <div className="date">10 Jul</div>
                <i className="icon fa fa-user"></i>
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div className="container right">
                <div className="date">18 May</div>
                <i className="icon fa fa-running"></i>
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div className="container left">
                <div className="date">10 Feb</div>
                <i className="icon fa fa-cog"></i>
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div className="container right">
                <div className="date">01 Jan</div>
                <i className="icon fa fa-certificate"></i>
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Timeline
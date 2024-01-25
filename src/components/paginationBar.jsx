import './paginationBar.scss'

import { useEffect, useState } from 'react'

const PaginationBar = () => {
    const [currPage, setCurrPage] = useState(Math.floor((document.documentElement.scrollTop + 20) / window.innerHeight) + 1)
    const pages = [1, 2, 3, 4, 5] // TODO: temporary hardcoded solution

    useEffect(() => {
        const handleScroll = () => {
            const page = Math.floor((document.documentElement.scrollTop + 20) / window.innerHeight) + 1
            
            if (page !== currPage) {
                setCurrPage(page) 
            }          
        }
        document.addEventListener('scroll', handleScroll)

        return () => {document.removeEventListener('scroll', handleScroll)}
        })


    return (
        <>
            <div className="pagination:container">
                <div className="pagination:number arrow">
                    <svg width="18" height="18">
                        <use xlinkHref="#left" />
                    </svg>
                    <span className="arrow:text">Previous</span>
                </div>

                {pages.map((pageNum) => {
                    return (
                        <div 
                            key={pageNum}
                            className={`pagination:number ${pageNum === currPage ? 'pagination:active' : ''}`}
                            >
                            {pageNum}
                        </div>
                    )
                })}

                {/* <div className="pagination:number">
                    1
                </div>
                <div className="pagination:number">
                    2
                </div>

                <div className="pagination:number pagination:active">
                    3
                </div>

                <div className="pagination:number">
                    4
                </div>

                <div className="pagination:number">
                    540
                </div> */}

                <div className="pagination:number arrow">
                    <svg width="18" height="18">
                        <use xlinkHref="#right" />
                    </svg>
                </div>
            </div>

            <svg className="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></symbol>
            </svg>

        </>
    )
}

export default PaginationBar
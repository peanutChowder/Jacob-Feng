import './paginationBar.scss'

import { useEffect, useState } from 'react'

import projectList from '../assets/projectsList'

const PaginationBar = () => {
    const [currPage, setCurrPage] = useState(Math.floor((document.documentElement.scrollTop + 20) / window.innerHeight) + 1)

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

    const handlePaginationClick = (pageIndex) => {        
        window.scrollTo({
            top: pageIndex * window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className="pagination:container">
                {projectList.map((project, pageIndex) => {
                    return (
                        <div 
                            key={pageIndex}
                            className={`pagination:number ${(pageIndex + 1) === currPage ? 'pagination:active' : ''}`}
                            onClick={() => {handlePaginationClick(pageIndex)}}
                        >
                            {project.shortName}
                        </div>
                    )
                })}
            </div>

            <svg className="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></symbol>
            </svg>

        </>
    )
}

export default PaginationBar
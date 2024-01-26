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
                <div
                    className={`pagination:number ${currPage === 5 ? 'pagination:active' : ''}`}
                    onClick={() => {handlePaginationClick(5)}}
                >
                    More
                </div>
            </div>
        </>
    )
}

export default PaginationBar
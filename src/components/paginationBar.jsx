import './paginationBar.scss'

import { useEffect, useState, useRef } from 'react'

import projectList from '../assets/projectsList'

const PaginationBar = () => {
    const marginAndPadding = 13
    const paginationButton = useRef(null)
    const [currPageNum, setcurrPageNum] = useState(Math.floor((document.documentElement.scrollTop + 20) / window.innerHeight) + 1)
    const [translateX, setTranslateX] = useState(0)
    const [paginationButtonWidth, setPaginationButtonWidth] = useState(0)
    const [numPaginationButtonsShown, setNumPaginationButtonsShown] = useState(3)
    
    useEffect(() => {
        const handleScroll = () => {
            const page = Math.floor((document.documentElement.scrollTop + 20) / window.innerHeight) + 1
            
            if (page !== currPageNum) {
                setcurrPageNum(page) 
                setTranslateX(-paginationButtonWidth * (page - 1))
            }        
        }
        document.addEventListener('scroll', handleScroll)

        return () => {document.removeEventListener('scroll', handleScroll)}
    })

    useEffect(() => {
        if (paginationButton) {
            setPaginationButtonWidth(paginationButton.current.offsetWidth + marginAndPadding)

            const numButtonsFit = Math.floor(window.innerWidth / paginationButtonWidth)

            if (numButtonsFit >= 5) {
                setNumPaginationButtonsShown(5)
            } else if (numButtonsFit <= 3) {
                setNumPaginationButtonsShown(3)
            } else if (numButtonsFit % 2 == 0) {
                setPaginationButtonWidth(numButtonsFit - 1)
            }
            
        }
    }, [paginationButton, paginationButtonWidth])

    const handlePaginationClick = (pageIndex) => {        
        window.scrollTo({
            top: pageIndex * window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className='hidden-pagination'
                style={{width: `${paginationButtonWidth * numPaginationButtonsShown}px`}}>
                <div className="pagination:container">
                    {projectList.map((project, pageIndex) => {
                        return (
                            <div 
                                ref={paginationButton}
                                key={pageIndex}
                                className={`pagination:number ${(pageIndex + 1) === currPageNum ? 'pagination:active' : ''}`}
                                onClick={() => {handlePaginationClick(pageIndex)}}
                                style={{transform: `translate(${translateX}px)`}}>
                            {project.shortName}
                            </div>
                        )
                    })}
                    <div
                        className={`pagination:number ${currPageNum === 5 ? 'pagination:active' : ''}`}
                        onClick={() => {handlePaginationClick(5)}}
                        style={{transform: `translate(${translateX}px)`}}
                    >
                        More
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginationBar
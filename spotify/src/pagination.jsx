const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [];
    for (let i = 1; i <= nPages; i++) {
        pageNumbers.push(i);
    }



    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination'>
                <li className="page-btn">
                    <a className="page-link"
                        onClick={goToPrevPage}
                        href='#'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className={`page-btn ${currentPage == pgNumber ? 'active' : ''} `} >
                        <a onClick={() => setCurrentPage(pgNumber)}
                            className='page-link'
                            href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-btn">
                    <a className="page-link"
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
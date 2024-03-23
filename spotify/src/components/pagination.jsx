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
        <nav style={{display:"flex",}}>
            <ul style={{display:"flex", flexWrap:'wrap', listStyle: 'none'}}>
                <li style={{margin:'1.5vh'}}>
                    <a onClick={goToPrevPage} href='#'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} style={{margin:'1.5vh'}}>
                        <a onClick={() => setCurrentPage(pgNumber)}
                            href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li style={{margin:'1.5vh'}}>
                    <a onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
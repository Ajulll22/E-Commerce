import React from 'react'
import ReactPaginate from "react-paginate";

const Paginate = ({ pages, changePage }) => {
    return (
        <nav aria-label='Page navigation example' >
            <ReactPaginate
                previousLabel="< Prev"
                nextLabel="Next >"
                pageCount={Math.min(10, pages)}
                onPageChange={changePage}
                containerClassName={'pagination justify-content-center'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                activeLinkClassName={'page-item select'}
                disabledLinkClassName={'pagination-link is-disabled'}
            />
        </nav>
    )
}

export default Paginate
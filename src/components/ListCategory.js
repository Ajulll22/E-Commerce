import React from 'react'
import { Col } from 'react-bootstrap'
import { FiArrowUpRight } from 'react-icons/fi'

const ListCategory = ({ categories, onCategorySelect, categorySelect }) => {
    return (
        <Col className='bg-light mx-2' lg={3}>
            <h4 className='mt-3'><strong>Daftar Kategori</strong></h4>
            <hr />
            <ul className="list-group mb-3">
                {categories && categories.map((category) => (
                    <li onClick={() => onCategorySelect(category.id_category, category.nama_category)} key={category.id_category} className={"list-group-item mb-1 d-flex justify-content-between align-items-center list-category "}>
                        <h4>{category.nama_category}</h4>
                        <FiArrowUpRight size={35} className={"rotate " + (parseInt(categorySelect) === category.id_category && "category-select")} />
                    </li>
                ))}

            </ul>
        </Col>
    )
}

export default ListCategory
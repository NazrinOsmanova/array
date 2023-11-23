import React from 'react'
import { useState, useEffect } from 'react'

const Worker = () => {
    const [searchData, setSearchData] = useState("");
    const [product, setProduct] = useState([]);
    const [filterData, setfilterData] = useState([]);

    const search = (e) => {
        setSearchData(e.target.value.toLowerCase())
    }
    const filter = (e) => {
        setfilterData(e.target.value.toLowerCase())
    }

    useEffect(() => {
        fetch('https://655f390f879575426b44ddfa.mockapi.io/api/workers/workers')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])

    return (
        <>
            <div className="functions">
                <input type="text" placeholder='Search' onChange={search} />
                <input type="text" placeholder='Filter' onChange={filter} />
            </div>
            <div className='workers'>
                {
                    product.filter(e => e.name.toLowerCase().includes(searchData) && e.department.toLowerCase().includes(filterData)).map((m, i) => (
                        <div className="worker" key={i}>
                            <h1>Name: <span>{m.name}</span></h1>
                            <h2>Department: <span>{m.department}</span></h2>
                            <h3>Role: <span>{m.role}</span></h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Worker
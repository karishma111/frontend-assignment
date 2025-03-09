import React, { useState } from 'react'
import responseJson from '../frontend-assignment.json'

const Table = () => {
    const ITEMS_PER_PAGE = 5;
    const totalPages = Math.ceil(responseJson.length / ITEMS_PER_PAGE);
    const [currentPage,setCurrentPage] = useState(1)

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    }
    const currentData = responseJson.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    
  return (
    <div className="table-container">
      <h1>Fund Information</h1>
      <table className="project-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((response) => (
            <tr key={response["s.no"]}>
              <td>{response["s.no"]}</td>
              <td>{response["percentage.funded"]}</td>
              <td>{response["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default Table
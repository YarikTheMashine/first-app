import React from "react";

const Pagination = ({ handler, postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="row justify-content-center align-items-center" style={{ marginRight: 0 }}>
      <nav>
        <ul className="pagination text-center">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a
                href="/"
                onClick={event => {
                  event.preventDefault();
                  console.log(number);
                  handler(number);
                }}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

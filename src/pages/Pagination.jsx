import { useState } from "react";

export default function Pagination() {
  const totalPages = 274;
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState("");
  const visiblePages = 15;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (!isNaN(pageNumber)) {
      handlePageChange(pageNumber);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-1">
      <input
          type="text"
          className="border px-2 py-1 w-12 text-center rounded"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          placeholder=""
        />
        <button
          className="border px-3 py-1 rounded bg-white text-gray-400 text-[13px] hover:bg-gray-300"
          onClick={handleGoToPage}
        >
          GoTo
        </button>
        <button
          className="border px-3 py-1 rounded bg-white text-gray-400 text-[13px] hover:bg-gray-300"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          |&lt;
        </button>
        <button
          className="border px-3 py-1 rounded bg-white text-gray-400 text-[13px] hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(visiblePages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`border px-3 py-1 rounded ${
                currentPage === page ? "border-[1px]  text-black text-[13px]" : "bg-white text-[13px] hover:border-black"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="border px-3 py-1 rounded bg-white text-gray-400 text-[13px] hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <button
          className="border px-3 py-1 rounded bg-white text-gray-400 text-[13px] hover:bg-gray-300"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;|
        </button>
      </div>
      <p className="text-gray-600">
        Showing 1 to 48 of 4554 ({totalPages} Pages)
      </p>
    </div>
  );
}

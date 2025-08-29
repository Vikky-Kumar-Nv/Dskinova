import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onPrevPage,
  onNextPage,
}) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (totalItems <= itemsPerPage) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-6 pt-4 border-t border-gray-200">
      <div className="text-sm text-gray-700">
        Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
        {totalItems} articles
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 text-sm rounded-md transition-colors duration-300 ${
                currentPage === page
                  ? "bg-[#c98963] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

import React from "react";
import NewsCard from "./NewsCard.jsx";
import Pagination from "./Pagination.jsx";

export default function NewsList({
  newsList,
  currentNews,
  currentPage,
  totalPages,
  itemsPerPage,
  onAddNews,
  onEditNews,
  onDeleteNews,
  onPageChange,
  onPrevPage,
  onNextPage,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-domine font-medium text-[#b37556]">
          News Articles ({newsList.length})
        </h2>
        <button
          onClick={onAddNews}
          className="w-full sm:w-auto bg-[#c98963] hover:bg-[#be7f58] text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Add New News
        </button>
      </div>

      <div className="space-y-4">
        {currentNews.map((news) => (
          <NewsCard
            key={news.slug}
            news={news}
            onEdit={onEditNews}
            onDelete={onDeleteNews}
          />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={newsList.length}
          onPageChange={onPageChange}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />

        {newsList.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No news articles found.</p>
            <button
              onClick={onAddNews}
              className="mt-4 bg-[#c98963] hover:bg-[#be7f58] text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Add Your First News Article
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

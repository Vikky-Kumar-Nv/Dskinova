import React from "react";

export default function NewsCard({ news, onEdit, onDelete }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
          <div className="flex-shrink-0 self-center sm:self-start">
            <img
              src={news.cardImage}
              alt={news.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded border"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiAxMkM5Ljc5IDEyIDggMTAuNzkgOCA4UzEwLjc5IDQgMTIgNFMxNiA1Ljc5IDE2IDhTMTQuMjEgMTIgMTIgMTJaTTEyIDEzQzE2LjQyIDEzIDIwIDE1Ljc5IDIwIDIwVjIySDR2LTJDNSAxNS43OSA4IDEzIDEyIDEzWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2 leading-snug break-words">
              {news.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{news.date}</p>
            <p className="text-gray-700 text-sm mb-3 line-clamp-2">
              {news.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-1 sm:mb-3">
              {news.content.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {news.content.tags.length > 3 && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  +{news.content.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => onEdit(news)}
            className="w-full sm:w-auto px-3 py-2 sm:py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(news.slug)}
            className="w-full sm:w-auto px-3 py-2 sm:py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

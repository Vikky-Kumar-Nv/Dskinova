import React from "react";

export default function NewsCard({ news, onEdit, onDelete }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={news.cardImage}
            alt={news.title}
            className="w-24 h-24 object-cover rounded border"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiAxMkM5Ljc5IDEyIDggMTAuNzkgOCA4UzEwLjc5IDQgMTIgNFMxNiA1Ljc5IDE2IDhTMTQuMjEgMTIgMTIgMTJaTTEyIDEzQzE2LjQyIDEzIDIwIDE1Ljc5IDIwIDIwVjIySDR2LTJDNSAxNS43OSA4IDEzIDEyIDEzWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{news.date}</p>
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
            {news.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
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
        <div className="flex gap-2 ml-4 flex-shrink-0">
          <button
            onClick={() => onEdit(news)}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(news.slug)}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

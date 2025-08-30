import React from "react";

export default function NewsPreview({ newsForm }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-4">
        {newsForm.cardImagePreview && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Card Image Preview:
            </p>
            <img
              src={newsForm.cardImagePreview}
              alt="Card preview"
              className="w-full h-32 object-cover rounded border"
            />
          </div>
        )}
        <h4 className="font-semibold text-lg text-gray-800 mb-2">
          {newsForm.title || "News Title"}
        </h4>
        <p className="text-sm text-gray-600 mb-2">
          {newsForm.excerpt || "News excerpt will appear here..."}
        </p>
        <p className="text-sm text-gray-500">
          {newsForm.content.intro || "Content introduction will appear here..."}
        </p>
        {newsForm.content.imagePreview && (
          <div className="my-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Content Image Preview:
            </p>
            <img
              src={newsForm.content.imagePreview}
              alt="Content preview"
              className="w-full h-48 object-cover rounded border"
            />
          </div>
        )}
        {newsForm.content.paragraphs.length > 0 &&
          newsForm.content.paragraphs[0] && (
            <p className="text-sm text-gray-700 mt-2">
              {newsForm.content.paragraphs[0].substring(0, 100)}...
            </p>
          )}
        {newsForm.content.tags.length > 0 && newsForm.content.tags[0] && (
          <div className="mt-2">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {newsForm.content.tags[0]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

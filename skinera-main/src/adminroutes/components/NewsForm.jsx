import React from "react";

export default function NewsForm({
  newsForm,
  editingNews,
  onFormChange,
  onContentChange,
  onSave,
  onCancel,
  onImageUpload,
  onRemoveImage,
  onAddParagraph,
  onUpdateParagraph,
  onRemoveParagraph,
  onAddTag,
  onUpdateTag,
  onRemoveTag,
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          value={newsForm.title}
          onChange={(e) => onFormChange("title", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
          placeholder="Enter news title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Excerpt
        </label>
        <textarea
          value={newsForm.excerpt}
          onChange={(e) => onFormChange("excerpt", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
          placeholder="Short description for the news article"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hero Introduction
        </label>
        <textarea
          value={newsForm.heroIntro}
          onChange={(e) => onFormChange("heroIntro", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
          placeholder="Introduction text for the hero section"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Image (Thumbnail)
        </label>
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onImageUpload(e, "card")}
            disabled={newsForm.cardImageLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {newsForm.cardImageLoading && (
            <p className="text-sm text-blue-600">Uploading image...</p>
          )}
          {newsForm.cardImagePreview && (
            <div className="relative inline-block">
              <img
                src={newsForm.cardImagePreview}
                alt="Card preview"
                className="w-32 h-24 object-cover rounded border"
              />
              <button
                onClick={() => onRemoveImage("card")}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500">
            Upload a thumbnail image for the news card (max 5MB)
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content Introduction
        </label>
        <textarea
          value={newsForm.content.intro}
          onChange={(e) => onContentChange("intro", e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
          placeholder="Main introduction paragraph"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content Image
        </label>
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onImageUpload(e, "content")}
            disabled={newsForm.content.imageLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {newsForm.content.imageLoading && (
            <p className="text-sm text-blue-600">Uploading image...</p>
          )}
          {newsForm.content.imagePreview && (
            <div className="relative inline-block">
              <img
                src={newsForm.content.imagePreview}
                alt="Content preview"
                className="w-48 h-32 object-cover rounded border"
              />
              <button
                onClick={() => onRemoveImage("content")}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500">
            Upload the main content image for the news article (max 5MB)
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Paragraphs
        </label>
        {newsForm.content.paragraphs.map((paragraph, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <textarea
              value={paragraph}
              onChange={(e) => onUpdateParagraph(index, e.target.value)}
              rows={3}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
              placeholder={`Paragraph ${index + 1}`}
            />
            {newsForm.content.paragraphs.length > 1 && (
              <button
                onClick={() => onRemoveParagraph(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          onClick={onAddParagraph}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Paragraph
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        {newsForm.content.tags.map((tag, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={tag}
              onChange={(e) => onUpdateTag(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
              placeholder={`Tag ${index + 1}`}
            />
            {newsForm.content.tags.length > 1 && (
              <button
                onClick={() => onRemoveTag(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          onClick={onAddTag}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Tag
        </button>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onSave}
          className="px-6 py-2 bg-[#c98963] text-white rounded-md hover:bg-[#be7f58] transition-colors duration-300"
        >
          {editingNews ? "Update News" : "Save News"}
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

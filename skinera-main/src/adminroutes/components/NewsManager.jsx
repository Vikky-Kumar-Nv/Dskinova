import React from "react";
import NewsForm from "./NewsForm.jsx";
import NewsPreview from "./NewsPreview.jsx";

export default function NewsManager({
  newsForm,
  editingNews,
  onClose,
  onFormChange,
  onContentChange,
  onSave,
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
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-domine font-medium text-[#b37556]">
          {editingNews ? "Edit News Article" : "Add New News Article"}
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* News Form */}
        <NewsForm
          newsForm={newsForm}
          editingNews={editingNews}
          onFormChange={onFormChange}
          onContentChange={onContentChange}
          onSave={onSave}
          onCancel={onClose}
          onImageUpload={onImageUpload}
          onRemoveImage={onRemoveImage}
          onAddParagraph={onAddParagraph}
          onUpdateParagraph={onUpdateParagraph}
          onRemoveParagraph={onRemoveParagraph}
          onAddTag={onAddTag}
          onUpdateTag={onUpdateTag}
          onRemoveTag={onRemoveTag}
        />

        {/* News Preview */}
        <NewsPreview newsForm={newsForm} />
      </div>
    </div>
  );
}

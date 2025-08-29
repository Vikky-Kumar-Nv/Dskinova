import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { newsItems } from "../../data/mockednews";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNewsManager, setShowNewsManager] = useState(false);
  const [newsList, setNewsList] = useState(newsItems);
  const [editingNews, setEditingNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [newsForm, setNewsForm] = useState({
    title: "",
    excerpt: "",
    heroIntro: "",
    cardImage: null,
    cardImagePreview: "",
    cardImageLoading: false,
    content: {
      intro: "",
      image: null,
      imagePreview: "",
      imageLoading: false,
      paragraphs: [""],
      tags: [""],
    },
    popular: [],
  });

  useEffect(() => {
    // Check if user is authenticated (you can replace this with proper auth logic)
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (!authStatus) {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  // Handle page adjustment when news list changes
  useEffect(() => {
    const maxPage = Math.ceil(newsList.length / itemsPerPage);
    if (currentPage > maxPage && maxPage > 0) {
      setCurrentPage(maxPage);
    } else if (newsList.length === 0) {
      setCurrentPage(1);
    }
  }, [newsList.length, currentPage, itemsPerPage]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin-login");
  };

  const handleManageNews = () => {
    setShowNewsManager(true);
  };

  const handleAddNews = () => {
    setEditingNews(null);
    setNewsForm({
      title: "",
      excerpt: "",
      heroIntro: "",
      cardImage: null,
      cardImagePreview: "",
      cardImageLoading: false,
      content: {
        intro: "",
        paragraphs: [""],
        tags: [""],
        image: null,
        imagePreview: "",
        imageLoading: false,
      },
      popular: [],
    });
    setShowNewsManager(true);
  };

  const handleEditNews = (news) => {
    setEditingNews(news);
    setNewsForm({
      title: news.title,
      excerpt: news.excerpt,
      heroIntro: news.heroIntro,
      cardImage: null, // Will be set from existing image
      cardImagePreview: news.cardImage,
      content: {
        intro: news.content.intro,
        paragraphs: [...news.content.paragraphs],
        tags: [...news.content.tags],
        image: null, // Will be set from existing image
        imagePreview: news.content.image,
      },
      popular: [...news.popular],
    });
    setShowNewsManager(true);
  };

  const handleDeleteNews = (slug) => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      setNewsList(newsList.filter((item) => item.slug !== slug));
      setCurrentPage(1); // Reset to first page when deleting news
    }
  };

  const handleSaveNews = () => {
    const slug = newsForm.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newNews = {
      slug,
      title: newsForm.title,
      date: currentDate,
      excerpt: newsForm.excerpt,
      cardImage: newsForm.cardImagePreview || "/placeholder-image.jpg",
      heroIntro: newsForm.heroIntro,
      content: {
        intro: newsForm.content.intro,
        image: newsForm.content.imagePreview || "/placeholder-image.jpg",
        paragraphs: newsForm.content.paragraphs.filter((p) => p.trim() !== ""),
        tags: newsForm.content.tags.filter((t) => t.trim() !== ""),
      },
      popular: newsForm.popular,
    };

    if (editingNews) {
      setNewsList(
        newsList.map((item) =>
          item.slug === editingNews.slug ? newNews : item
        )
      );
    } else {
      setNewsList([...newsList, newNews]);
    }

    setShowNewsManager(false);
    setEditingNews(null);
    setCurrentPage(1); // Reset to first page when adding/editing news
  };

  const handleFormChange = (field, value) => {
    setNewsForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContentChange = (field, value) => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: value,
      },
    }));
  };

  const addParagraph = () => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        paragraphs: [...prev.content.paragraphs, ""],
      },
    }));
  };

  const updateParagraph = (index, value) => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        paragraphs: prev.content.paragraphs.map((p, i) =>
          i === index ? value : p
        ),
      },
    }));
  };

  const removeParagraph = (index) => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        paragraphs: prev.content.paragraphs.filter((_, i) => i !== index),
      },
    }));
  };

  const addTag = () => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        tags: [...prev.content.tags, ""],
      },
    }));
  };

  const updateTag = (index, value) => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        tags: prev.content.tags.map((t, i) => (i === index ? value : t)),
      },
    }));
  };

  const removeTag = (index) => {
    setNewsForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        tags: prev.content.tags.filter((_, i) => i !== index),
      },
    }));
  };

  // Pagination logic
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      // Set loading state
      if (type === "card") {
        setNewsForm((prev) => ({ ...prev, cardImageLoading: true }));
      } else if (type === "content") {
        setNewsForm((prev) => ({
          ...prev,
          content: { ...prev.content, imageLoading: true },
        }));
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "card") {
          setNewsForm((prev) => ({
            ...prev,
            cardImage: file,
            cardImagePreview: e.target.result,
            cardImageLoading: false,
          }));
        } else if (type === "content") {
          setNewsForm((prev) => ({
            ...prev,
            content: {
              ...prev.content,
              image: file,
              imagePreview: e.target.result,
              imageLoading: false,
            },
          }));
        }
      };
      reader.onerror = () => {
        alert("Error reading file");
        if (type === "card") {
          setNewsForm((prev) => ({ ...prev, cardImageLoading: false }));
        } else if (type === "content") {
          setNewsForm((prev) => ({
            ...prev,
            content: { ...prev.content, imageLoading: false },
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (type) => {
    if (type === "card") {
      setNewsForm((prev) => ({
        ...prev,
        cardImage: null,
        cardImagePreview: "",
        cardImageLoading: false,
      }));
    } else if (type === "content") {
      setNewsForm((prev) => ({
        ...prev,
        content: {
          ...prev.content,
          image: null,
          imagePreview: "",
          imageLoading: false,
        },
      }));
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-domine font-medium text-[#b37556] mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">Welcome to DSkinova Admin Panel</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* News Management */}
          {showNewsManager && (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-domine font-medium text-[#b37556]">
                  {editingNews ? "Edit News Article" : "Add New News Article"}
                </h2>
                <button
                  onClick={() => setShowNewsManager(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* News Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newsForm.title}
                      onChange={(e) =>
                        handleFormChange("title", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleFormChange("excerpt", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleFormChange("heroIntro", e.target.value)
                      }
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
                        onChange={(e) => handleImageUpload(e, "card")}
                        disabled={newsForm.cardImageLoading}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      {newsForm.cardImageLoading && (
                        <p className="text-sm text-blue-600">
                          Uploading image...
                        </p>
                      )}
                      {newsForm.cardImagePreview && (
                        <div className="relative inline-block">
                          <img
                            src={newsForm.cardImagePreview}
                            alt="Card preview"
                            className="w-32 h-24 object-cover rounded border"
                          />
                          <button
                            onClick={() => removeImage("card")}
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
                      onChange={(e) =>
                        handleContentChange("intro", e.target.value)
                      }
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
                        onChange={(e) => handleImageUpload(e, "content")}
                        disabled={newsForm.content.imageLoading}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      {newsForm.content.imageLoading && (
                        <p className="text-sm text-blue-600">
                          Uploading image...
                        </p>
                      )}
                      {newsForm.content.imagePreview && (
                        <div className="relative inline-block">
                          <img
                            src={newsForm.content.imagePreview}
                            alt="Content preview"
                            className="w-48 h-32 object-cover rounded border"
                          />
                          <button
                            onClick={() => removeImage("content")}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      )}
                      <p className="text-xs text-gray-500">
                        Upload the main content image for the news article (max
                        5MB)
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
                          onChange={(e) =>
                            updateParagraph(index, e.target.value)
                          }
                          rows={3}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                          placeholder={`Paragraph ${index + 1}`}
                        />
                        {newsForm.content.paragraphs.length > 1 && (
                          <button
                            onClick={() => removeParagraph(index)}
                            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addParagraph}
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
                          onChange={(e) => updateTag(index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                          placeholder={`Tag ${index + 1}`}
                        />
                        {newsForm.content.tags.length > 1 && (
                          <button
                            onClick={() => removeTag(index)}
                            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addTag}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Add Tag
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleSaveNews}
                      className="px-6 py-2 bg-[#c98963] text-white rounded-md hover:bg-[#be7f58] transition-colors duration-300"
                    >
                      {editingNews ? "Update News" : "Save News"}
                    </button>
                    <button
                      onClick={() => setShowNewsManager(false)}
                      className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* News Preview */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Preview
                  </h3>
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
                      {newsForm.content.intro ||
                        "Content introduction will appear here..."}
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
                    {newsForm.content.tags.length > 0 &&
                      newsForm.content.tags[0] && (
                        <div className="mt-2">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {newsForm.content.tags[0]}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News List Management */}
          {!showNewsManager && (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-domine font-medium text-[#b37556]">
                  News Articles ({newsList.length})
                </h2>
                <button
                  onClick={handleAddNews}
                  className="bg-[#c98963] hover:bg-[#be7f58] text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Add New News
                </button>
              </div>

              <div className="space-y-4">
                {currentNews.map((news) => (
                  <div
                    key={news.slug}
                    className="border border-gray-200 rounded-lg p-4"
                  >
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
                        <p className="text-sm text-gray-600 mb-2">
                          {news.date}
                        </p>
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
                          onClick={() => handleEditNews(news)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteNews(news.slug)}
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination Controls */}
                {newsList.length > itemsPerPage && (
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-700">
                      Showing {startIndex + 1} to{" "}
                      {Math.min(endIndex, newsList.length)} of {newsList.length}{" "}
                      articles
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                      >
                        Previous
                      </button>

                      {/* Page Numbers */}
                      <div className="flex space-x-1">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
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
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {newsList.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No news articles found.</p>
                    <button
                      onClick={handleAddNews}
                      className="mt-4 bg-[#c98963] hover:bg-[#be7f58] text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      Add Your First News Article
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* News List Management */}
        </div>
      </main>
      <Footer />
    </>
  );
}

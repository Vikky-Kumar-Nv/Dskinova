import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import DashboardHeader from "../components/DashboardHeader.jsx";
import AccountManagerModal from "../components/AccountManagerModal.jsx";
import NewsManager from "../components/NewsManager.jsx";
import NewsList from "../components/NewsList.jsx";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNewsManager, setShowNewsManager] = useState(false);
  const [showAccountManager, setShowAccountManager] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState(null);
  const [newsList, setNewsList] = useState([]);
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
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (!authStatus) {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    // Load news from backend
    async function loadNews() {
      try {
        const res = await fetch(import.meta.env.VITE_SERVER_URL + "/api/news");
        const data = await res.json();
        if (data?.success) {
          setNewsList(data.items || []);
          setCurrentPage(1);
        }
      } catch (e) {
        // ignore; keep list as-is
      }
    }
    loadNews();
  }, []);

  useEffect(() => {
    const maxPage = Math.ceil(newsList.length / itemsPerPage);
    if (currentPage > maxPage && maxPage > 0) {
      setCurrentPage(maxPage);
    } else if (newsList.length === 0) {
      setCurrentPage(1);
    }
  }, [newsList.length, currentPage, itemsPerPage]);

  const handleLogout = async () => {
    try {
      await fetch(import.meta.env.VITE_SERVER_URL + "/api/admin-logout", {
        method: "POST",
      });
    } catch {}
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin-login");
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
      cardImage: null,
      cardImagePreview: news.cardImage,
      content: {
        intro: news.content.intro,
        paragraphs: [...news.content.paragraphs],
        tags: [...news.content.tags],
        image: null,
        imagePreview: news.content.image,
      },
      popular: [...news.popular],
    });
    setShowNewsManager(true);
  };

  const handleDeleteNews = (slug) => {
    // Prevent duplicate confirmations
    if (deletingSlug === slug) return;

    // Dismiss any existing toasts first
    toast.dismiss();

    setDeletingSlug(slug);
    toast(
      (t) => (
        <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm">
          <p className="font-medium text-gray-900">Delete News Article</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Are you sure? This action cannot be undone.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={async () => {
                try {
                  const res = await fetch(
                    `${import.meta.env.VITE_SERVER_URL}/api/news/${slug}`,
                    { method: "DELETE" }
                  );
                  const data = await res.json();
                  if (!res.ok || !data?.success)
                    throw new Error(data?.message || "Failed to delete");
                  // Refresh list
                  try {
                    const listRes = await fetch(
                      import.meta.env.VITE_SERVER_URL + "/api/news"
                    );
                    const listData = await listRes.json();
                    if (listData?.success) setNewsList(listData.items || []);
                  } catch {}
                  setCurrentPage(1);
                  toast.success("News article deleted successfully");
                } catch (e) {
                  toast.error(e?.message || "Delete failed");
                } finally {
                  setDeletingSlug(null);
                  toast.dismiss(t.id);
                }
              }}
              className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setDeletingSlug(null);
                toast.dismiss(t.id);
              }}
              className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        style: {
          padding: "16px",
          minWidth: "280px",
          maxWidth: "400px",
        },
      }
    );
  };

  const handleSaveNews = async () => {
    const fd = new FormData();
    fd.append("title", newsForm.title || "");
    fd.append("excerpt", newsForm.excerpt || "");
    fd.append("heroIntro", newsForm.heroIntro || "");
    fd.append("contentIntro", newsForm.content.intro || "");
    fd.append(
      "paragraphs",
      JSON.stringify(
        (newsForm.content.paragraphs || []).filter((p) => p.trim() !== "")
      )
    );
    fd.append(
      "tags",
      JSON.stringify(
        (newsForm.content.tags || []).filter((t) => t.trim() !== "")
      )
    );
    fd.append("popular", JSON.stringify(newsForm.popular || []));
    if (newsForm.cardImage) fd.append("cardImage", newsForm.cardImage);
    if (newsForm.content.image)
      fd.append("contentImage", newsForm.content.image);

    try {
      let url = import.meta.env.VITE_SERVER_URL + "/api/news";
      let method = "POST";
      if (editingNews?.slug) {
        url = `${import.meta.env.VITE_SERVER_URL}/api/news/${editingNews.slug}`;
        method = "PUT";
      }
      const res = await fetch(url, { method, body: fd });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || "");
      toast.success(
        editingNews
          ? "News article updated successfully"
          : "News article added successfully"
      );
      setShowNewsManager(false);
      setEditingNews(null);
      // Refresh list
      try {
        const listRes = await fetch(
          import.meta.env.VITE_SERVER_URL + "/api/news"
        );
        const listData = await listRes.json();
        if (listData?.success) setNewsList(listData.items || []);
      } catch {}
      setCurrentPage(1);
    } catch (e) {
      toast.error(
        (editingNews ? "Failed to update news: " : "Failed to add news: ") +
          (e?.message || "")
      );
    }
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
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

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
        toast.error("Error reading file");
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
          <DashboardHeader
            onLogout={handleLogout}
            onManage={() => setShowAccountManager(true)}
          />

          {/* News Management */}
          {showNewsManager && (
            <NewsManager
              newsForm={newsForm}
              editingNews={editingNews}
              onClose={() => setShowNewsManager(false)}
              onFormChange={handleFormChange}
              onContentChange={handleContentChange}
              onSave={handleSaveNews}
              onImageUpload={handleImageUpload}
              onRemoveImage={removeImage}
              onAddParagraph={addParagraph}
              onUpdateParagraph={updateParagraph}
              onRemoveParagraph={removeParagraph}
              onAddTag={addTag}
              onUpdateTag={updateTag}
              onRemoveTag={removeTag}
            />
          )}

          {/* News List Management */}
          {!showNewsManager && (
            <NewsList
              newsList={newsList}
              currentNews={currentNews}
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              onAddNews={handleAddNews}
              onEditNews={handleEditNews}
              onDeleteNews={handleDeleteNews}
              onPageChange={handlePageChange}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
            />
          )}
        </div>
      </main>
      <Footer />
      <AccountManagerModal
        isOpen={showAccountManager}
        onClose={() => setShowAccountManager(false)}
      />
    </>
  );
}

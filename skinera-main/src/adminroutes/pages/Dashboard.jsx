import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import DashboardHeader from "../components/DashboardHeader.jsx";
import AccountManagerModal from "../components/AccountManagerModal.jsx";
import NewsManager from "../components/NewsManager.jsx";
import NewsList from "../components/NewsList.jsx";
import { newsItems } from "../../data/mockednews";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNewsManager, setShowNewsManager] = useState(false);
  const [showAccountManager, setShowAccountManager] = useState(false);
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
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (!authStatus) {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

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
    if (window.confirm("Are you sure you want to delete this news article?")) {
      setNewsList(newsList.filter((item) => item.slug !== slug));
      setCurrentPage(1);
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
    setCurrentPage(1);
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
        alert("Please select a valid image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
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

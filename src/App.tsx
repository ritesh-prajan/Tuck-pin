import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyBookBar from './components/StickyBookBar';
import ErrorBoundary from './components/ErrorBoundary';
import SilkShimmer from './components/SilkShimmer';
import SkeletonPage from './components/SkeletonLoader';

// Page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ClassesPage from './pages/ClassesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import BookPage from './pages/BookPage';
import BookClassPage from './pages/BookClassPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

const pageNames: Record<PageView, string> = {
  home: 'Home',
  services: 'Saree Pleating Services',
  classes: 'Draping Academy Classes',
  'how-it-works': 'How It Works Guide',
  book: 'Saree Pleating Booking Form',
  'book-class': 'Academy Registration Form',
  reviews: 'Client Reviews',
  contact: 'Contact Us & Find Us Location',
  faq: 'Frequently Asked Questions',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeFormService, setActiveFormService] = useState<string>('');
  const [activeClassTier, setActiveClassTier] = useState<string>('');
  
  // Transition state to avoid jarring instant page swaps
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isShimmering, setIsShimmering] = useState(false);
  const [displayPage, setDisplayPage] = useState<PageView>('home');
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Trigger a subtle animated page-load delay to display high-fidelity modern skeleton loaders
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [displayPage]);

  // Suffixed hashtag routing detection for browser navigation consistency
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      if (['home', 'services', 'classes', 'how-it-works', 'reviews', 'book', 'book-class', 'contact', 'faq'].includes(hash)) {
        setCurrentPage(hash);
        setDisplayPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic page titles for absolute elite SEO feedback
  useEffect(() => {
    let subtitle = 'Saree Pleating & Academy';
    switch (currentPage) {
      case 'home':
        subtitle = 'Effortless Saree Pre-Pleating';
        break;
      case 'services':
        subtitle = 'Professional Box, Hanger & Bridal Pleating Services';
        break;
      case 'classes':
        subtitle = 'Draping Academy Classes & Seminars';
        break;
      case 'how-it-works':
        subtitle = 'Instruction Guides & Operations';
        break;
      case 'book':
        subtitle = 'Place Chennai Pleating Booking';
        break;
      case 'book-class':
        subtitle = 'Register for Academy Styling Class';
        break;
      case 'reviews':
        subtitle = '100% Zero-Damage Client Reviews';
        break;
      case 'contact':
        subtitle = 'Studio Map Location, Hours & Address';
        break;
      case 'faq':
        subtitle = 'Detailed Knowledge Base FAQs';
        break;
    }
    document.title = `Tuck & Pin — ${subtitle}`;
  }, [currentPage]);

  const navigateTo = (page: PageView) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setIsPageLoading(true); // Trigger skeleton loaders immediately on navigation
    setIsShimmering(true);
    
    // Smooth transition timeout to allow fine visual fade and loading bar progress
    setTimeout(() => {
      window.location.hash = page;
      setCurrentPage(page);
      setDisplayPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 175);

    setTimeout(() => {
      setIsShimmering(false);
    }, 420);
  };

  const handleBookService = (serviceId: string) => {
    setActiveFormService(serviceId);
    navigateTo('book');
  };

  const handleEnquireClass = (classTierName: string) => {
    setActiveClassTier(classTierName);
    navigateTo('book-class');
  };

  return (
    <div className="min-h-screen bg-[#FDFBFC] text-neutral-dark flex flex-col justify-between relative w-full overflow-x-hidden">
      {/* Visually hidden screen reader status for page navigation */}
      <div className="sr-only" aria-live="polite" role="status">
        Navigated to {pageNames[currentPage] || currentPage} page
      </div>

      {/* Silk shimmer fires on every page navigation */}
      <SilkShimmer isActive={isShimmering} />

      {/* Dynamic top micro progress loading bar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-1 bg-brand-rose z-[9999] transition-all duration-300 pointer-events-none ${
          isTransitioning ? 'w-3/4 opacity-100 animate-pulse' : 'w-full opacity-0'
        }`}
      />

      {/* Dynamic Nav Header */}
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />

      {/* Global Floating Actions */}
      <FloatingWhatsApp />
      <StickyBookBar currentPage={currentPage} navigateTo={navigateTo} />

      {/* Core Main View Engine wrapped inside an ErrorBoundary */}
      <main className="flex-1 pb-24 md:pb-12">
        <ErrorBoundary key={currentPage} fallbackTitle={`An error occurred in the ${currentPage} view`}>
          {isPageLoading ? (
            <SkeletonPage page={displayPage} />
          ) : (
            <>
              {displayPage === 'home' && (
                <HomePage navigateTo={navigateTo} />
              )}
              {displayPage === 'services' && (
                <ServicesPage navigateTo={navigateTo} onBookService={handleBookService} />
              )}
              {displayPage === 'classes' && (
                <ClassesPage onEnquireClass={handleEnquireClass} />
              )}
              {displayPage === 'how-it-works' && (
                <HowItWorksPage />
              )}
              {displayPage === 'book' && (
                <BookPage
                  activeFormService={activeFormService}
                  setActiveFormService={setActiveFormService}
                />
              )}
              {displayPage === 'book-class' && (
                <BookClassPage
                  activeClassTier={activeClassTier}
                  setActiveClassTier={setActiveClassTier}
                />
              )}
              {displayPage === 'reviews' && (
                <ReviewsPage />
              )}
              {displayPage === 'contact' && (
                <ContactPage />
              )}
              {displayPage === 'faq' && (
                <FAQPage />
              )}
            </>
          )}
        </ErrorBoundary>
      </main>

      {/* Global Footer element */}
      <Footer setCurrentPage={navigateTo} />
    </div>
  );
}

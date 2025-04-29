/**
 * Image Modal System for UV-Protected Wearable
 * Features:
 * - Responsive image display
 * - Touch/mobile friendly
 * - Accessible (keyboard nav + ARIA)
 * - Performance optimized
 */

// Configuration
if (window.location.hostname === 'digitalkp.github.io') {
    // Load gtag.js asynchronously
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9YT9ECV7D8';
    document.head.appendChild(gaScript);
  
    // Initialize Data Layer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    // Configure GA4 with enhanced settings
    gtag('config', 'G-9YT9ECV7D8', {
      debug_mode: false,
      send_page_view: true,
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname
    });
  }
const modalConfig = {
    maxWidth: '90%',    // Maximum width relative to viewport
    maxHeight: '90vh',  // Maximum height relative to viewport
    animationDuration: 300, // ms
    closeButtonColor: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0.9)'
  };
  
  // DOM Elements
  let modal;
  let modalImg;
  let closeBtn;
  
  // Initialize Modal System
  function initImageModal() {
    // Create modal elements
    modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    
    modal.innerHTML = `
      <span class="modal-close" tabindex="0" aria-label="Close">&times;</span>
      <img class="modal-content" alt="Enlarged product view">
      <div class="modal-caption"></div>
    `;
  
    document.body.appendChild(modal);
    
    // Cache elements
    modalImg = modal.querySelector('.modal-content');
    closeBtn = modal.querySelector('.modal-close');
    
    // Style dynamically to avoid FOUC
    applyModalStyles();
    setupEventListeners();
  }
  
  // Apply CSS styles programmatically
  function applyModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .image-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: ${modalConfig.backgroundColor};
        opacity: 0;
        transition: opacity ${modalConfig.animationDuration}ms ease;
      }
      
      .image-modal.active {
        display: block;
        opacity: 1;
      }
      
      .modal-content {
        margin: auto;
        display: block;
        max-width: ${modalConfig.maxWidth};
        max-height: ${modalConfig.maxHeight};
        object-fit: contain;
        animation: modalFadeIn ${modalConfig.animationDuration}ms;
      }
      
      .modal-close {
        position: absolute;
        top: 25px;
        right: 35px;
        color: ${modalConfig.closeButtonColor};
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }
      
      .modal-close:hover,
      .modal-close:focus {
        color: #ccc;
        text-decoration: none;
      }
      
      @keyframes modalFadeIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      @media (max-width: 768px) {
        .modal-close {
          top: 15px;
          right: 15px;
          font-size: 30px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Event Handlers
  function setupEventListeners() {
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (modal.classList.contains('active')) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateImages(-1);
        if (e.key === 'ArrowRight') navigateImages(1);
      }
    });
  }
  
  // Modal Actions
  function openModal(imgSrc, altText = '') {
    modalImg.src = imgSrc;
    modalImg.alt = altText;
    
    const caption = modal.querySelector('.modal-caption');
    caption.textContent = altText;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  
    if (typeof gtag === 'function') {
        gtag('event', 'view_item', {
          'items': [{
            'item_name': altText,
            'item_id': imgSrc,
            'item_category': 'UV Clothing'
          }]
        });
      }
    }
  
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Reset for next open
    setTimeout(() => {
      modalImg.src = '';
      modalImg.alt = '';
    }, modalConfig.animationDuration);
  }
  
  // Image Navigation (optional)
  function navigateImages(direction) {
    // Implement if you want gallery functionality
    console.log('Image navigation:', direction);
  }
  
  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initImageModal();
    
    // Attach to all buy buttons
    document.querySelectorAll('[data-modal-image]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = btn.dataset.modalImage;
        const altText = btn.dataset.modalAlt || btn.alt || 'Product image';
        
        if (imgSrc) {
          openModal(imgSrc, altText);
          if (typeof gtag === 'function') {
            gtag('event', 'select_item', {
              'item_list_name': 'Product Gallery',
              'items': [{
                'item_name': altText,
                'item_id': imgSrc
              }]
            });
          }
        }
      });
    });
  });
  
  
  // Export for module systems (if needed)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      openModal,
      closeModal
    }
    }
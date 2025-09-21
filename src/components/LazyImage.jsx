import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({
  src,
  optimizedSrc,
  alt,
  className = '',
  placeholder = null,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  // Use optimized version if available, fallback to original
  const imageSrc = optimizedSrc || src;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Default placeholder with loading animation
  const defaultPlaceholder = (
    <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
      <div className="text-gray-400 text-sm">Loading...</div>
    </div>
  );

  return (
    <>
      <div ref={imgRef} className={`${className}`}>
        {/* Show placeholder until image loads */}
        {!isLoaded && (placeholder || defaultPlaceholder)}

        {/* Load image only when in view */}
        {isInView && (
          <img
            src={hasError ? src : imageSrc} // Fallback to original if optimized fails
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`${className} transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        )}

        {/* Error state */}
        {hasError && isLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image unavailable</span>
          </div>
        )}
      </div>
    </>
  );
};

export default LazyImage;
import React from 'react';

interface CoffeeDoodleArtProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

const CoffeeDoodleArt: React.FC<CoffeeDoodleArtProps> = ({ 
  className = '',
  density = 'medium'
}) => {
  // Determine number of elements based on density
  const elementCount = density === 'high' ? 25 : density === 'medium' ? 15 : 8;
  
  // Doodle elements data
  const doodleElements = [
    // Coffee mugs
    { type: 'mug', path: 'M12 2C8.134 2 5 5.134 5 9v10c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V9c0-3.866-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5v1H7V9c0-2.761 2.239-5 5-5z' },
    // Coffee beans
    { type: 'bean', path: 'M12 4c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z' },
    // Swirls
    { type: 'swirl', path: 'M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.384 0 4.552-.926 6.121-2.438-.391-.013-.784-.062-1.174-.149-1.349 1.119-3.117 1.587-4.947 1.587-3.866 0-7-3.134-7-7s3.134-7 7-7c1.83 0 3.598.468 4.947 1.587.39-.087.783-.136 1.174-.149-1.569-1.512-3.737-2.438-6.121-2.438z' },
    // Desserts (croissant)
    { type: 'dessert', path: 'M12 2c-1.103 0-2 .897-2 2 0 .763.432 1.424 1.062 1.758-.179.358-.287.762-.287 1.196 0 1.103.897 2 2 2s2-.897 2-2c0-.434-.108-.838-.287-1.196.63-.334 1.062-.995 1.062-1.758 0-1.103-.897-2-2-2s-2 .897-2 2c0 .179.027.352.072.521-.271.143-.506.342-.691.584-.338-.179-.716-.283-1.109-.283-.939 0-1.755.523-2.197 1.295-.442-.772-1.258-1.295-2.197-1.295-.939 0-1.755.523-2.197 1.295-.442-.772-1.258-1.295-2.197-1.295-.447 0-.875.103-1.259.287.185-.242.42-.441.691-.584.045-.169.072-.342.072-.521 0-1.103-.897-2-2-2s-2 .897-2 2c0 .763.432 1.424 1.062 1.758-.179.358-.287.762-.287 1.196 0 1.103.897 2 2 2s2-.897 2-2c0-.434-.108-.838-.287-1.196.63-.334 1.062-.995 1.062-1.758 0-1.103-.897-2-2-2zm0 16c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z' },
    // Plants (leaf)
    { type: 'plant', path: 'M12 2c-5.348 0-8 4.157-8 9.5 0 5.343 2.652 9.5 8 9.5s8-4.157 8-9.5c0-5.343-2.652-9.5-8-9.5zm0 17c-3.309 0-5-3.157-5-7.5s1.691-7.5 5-7.5 5 3.157 5 7.5-1.691 7.5-5 7.5z' }
  ];

  // Generate random positions and rotations
  const generateElements = () => {
    return Array.from({ length: elementCount }, (_, i) => {
      const element = doodleElements[Math.floor(Math.random() * doodleElements.length)];
      const size = 30 + Math.random() * 40;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const rotation = Math.random() * 360;
      
      return {
        id: i,
        element,
        size,
        left: `${left}%`,
        top: `${top}%`,
        rotation
      };
    });
  };

  const elements = generateElements();
  // Add a timestamp to ensure elements are regenerated on each render
  const timestamp = Date.now();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {elements.map(({ id, element, size, left, top, rotation }) => (
        <div
          key={`${id}-${timestamp}`}
          className="absolute text-gold-300 opacity-40"
          style={{
            left,
            top,
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            width="100%" 
            height="100%"
          >
            <path d={element.path} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CoffeeDoodleArt;
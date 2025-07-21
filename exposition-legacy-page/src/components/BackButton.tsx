import React from 'react';

const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
    >
      Back
    </button>
  );
};

export default BackButton;
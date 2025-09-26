import React from 'react'

export default function loading() {
 return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#76ba1b] border-t-transparent"></div>
    </div>
  );
}

"use client"
import Image from 'next/image';
import { useState } from 'react';
import Copy from "@/public/icons/copy-01.png"

export default function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  const address = 'rLWCx7obzMRbFfreNR6eScPz6GWj4xbr4v';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-green-100 border border-green-300 rounded-lg shadow-lg">
      {/* Address Text */}
      <span className="text-[#2E7D32] font-fredoka font-semibold text-xs md:text-sm">
        CA: {address}
      </span>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-10 h-10 bg-yellow-400 text-[#2E7D32] rounded-r-lg hover:bg-yellow-500 transition-all"
        aria-label="Copy to clipboard"
      >
        <Image src={Copy} alt="" className='w-5 h-5' />
      </button>

      {/* Copy Confirmation */}
      {copied && (
        <span className="ml-2 text-sm text-green-600 font-medium">Copied!</span>
      )}
    </div>
  );
}

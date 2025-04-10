"use client";

import { useState, useEffect } from "react";

interface InternalNotesProps {
  orderId: number;
}

export default function InternalNotes({ orderId }: InternalNotesProps) {
  const [note, setNote] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    // Load saved note from localStorage when component mounts
    const savedNote = localStorage.getItem(`note_order_${orderId}`);
    if (savedNote) {
      setNote(savedNote);
    }
  }, [orderId]);

  const handleSave = () => {
    // Save note to localStorage
    localStorage.setItem(`note_order_${orderId}`, note);

    // Show saved message
    setShowSaved(true);

    // Hide message after 2 seconds
    setTimeout(() => {
      setShowSaved(false);
    }, 2000);
  };

  return (
    <>
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Internal Notes
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          my private notes about this order
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="space-y-4">
          <textarea
            rows={4}
            className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md p-2"
            placeholder="Add notes about this order..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Note
            </button>
            {showSaved && (
              <span className="text-green-600 text-sm font-medium">
                Note saved!
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

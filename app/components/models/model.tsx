"use client";

import { useCallback, useState, useEffect } from "react";
interface ModelProps {
  label: string;
  content: React.ReactElement;
  isOpen: Boolean;
  close: () => void;
}

const Model: React.FC<ModelProps> = ({ label, content, isOpen, close }) => {
  const [showModel, setShowModel] = useState(isOpen);

  useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModel(false);

    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="flex items-center justify-center fixed inset-0 z-40 bg-black/60">
        <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
          <div
            className={`translate duration-600 h-full ${
              showModel ? "translate-y-0" : "translate-full"
            } opacity-100 `}
          >
            <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
              <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                <div
                  onClick={handleClose}
                  className=" p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold ">{label}</h2>
              </header>
              <section className="p-6">{content}</section>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Model;

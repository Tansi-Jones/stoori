"use client";

import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon,
  HandThumbUpIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { CommentLayout } from "../comments/CommentLayout";
import { useState } from "react";

export const Interactions = () => {
  const [open, setOpen] = useState(false);

  const handleCommentButton = () => {
    setOpen(!open);
  };

  return (
    <section className="mb-5">
      <hr className="border-white/5" />

      <div className="flex items-center justify-between py-3">
        <div className="flex items-center space-x-5">
          <button className="flex items-center space-x-2 group transition-all">
            <HandThumbUpIcon className="h-6 w-6 group-hover:text-white text-white/70" />
            <span className="group-hover:text-white text-white/70 font-light">
              0
            </span>
          </button>
          <button
            onClick={handleCommentButton}
            className="flex items-center space-x-2 group transition-all"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 group-hover:text-white text-white/70" />
            <span className="group-hover:text-white text-white/70 font-light">
              0
            </span>
          </button>
        </div>
        <div className="flex items-center space-x-5">
          <button className="group transition-all">
            <BookmarkIcon className="h-6 w-6 group-hover:text-white text-white/70" />
          </button>
          <button className="group transition-all">
            <ShareIcon className="h-6 w-6 group-hover:text-white text-white/70" />
          </button>
        </div>
      </div>

      <CommentLayout sidebarBehavoir={handleCommentButton} openSidebar={open} />
    </section>
  );
};

"use client";

import { StoryEditor } from "@/components/Editor/StoryEditor";

export default function Write() {
  const content = "";

  return (
    <main>
      <StoryEditor onChange={() => {}} initialContent={content} />
    </main>
  );
}

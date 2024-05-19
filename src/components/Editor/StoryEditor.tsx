"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/react/style.css";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const StoryEditor = ({ onChange, initialContent }: EditorProps) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  );
};

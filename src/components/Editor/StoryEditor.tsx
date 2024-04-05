"use client";

import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";

export const StoryEditor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS | null>(null);

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",

        tools: {
          header: {
            class: Header,
            inlineToolbar: ["marker", "link"],
            config: {
              placeholder: "Header",
            },
            shortcut: "CMD+SHIFT+H",
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
          ref.current = null;
        }
      };
    }
  }, [isMounted]);

  const handleSave = async () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log({ outputData });
        alert(JSON.stringify(outputData, null, 2));
      });
    }
  };

  return (
    <section id="editorjs" className="max-w-full min-h-screen text-black">
      StoryEditor
    </section>
  );
};

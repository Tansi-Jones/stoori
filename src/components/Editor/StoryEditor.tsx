"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EditorJS from "@editorjs/editorjs";

import TextareaAutosize from "react-textarea-autosize";

import "@/styles/editor.css";

export const StoryEditor = () => {
  const ref = React.useRef<EditorJS>();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // const Header = (await import("@editorjs/header")).default;
    // const Embed = (await import("@editorjs/embed")).default;
    // const Table = (await import("@editorjs/table")).default;
    // const List = (await import("@editorjs/list")).default;
    // const Code = (await import("@editorjs/code")).default;
    // const LinkTool = (await import("@editorjs/link")).default;
    // const InlineCode = (await import("@editorjs/inline-code")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        // data: body.content,
        // tools: {
        //   header: Header,
        //   linkTool: LinkTool,
        //   list: List,
        //   code: Code,
        //   inlineCode: InlineCode,
        //   table: Table,
        //   embed: Embed,
        // },
      });
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  if (!isMounted) {
    return null;
  }

  return (
    <form>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/dashboard">
              <>Back</>
            </Link>
            <p className="text-sm text-muted-foreground">Draft</p>
          </div>
          <button type="submit">
            <span>Save</span>
          </button>
        </div>
        <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue="Hello"
            placeholder="Post title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use{" "}
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
};

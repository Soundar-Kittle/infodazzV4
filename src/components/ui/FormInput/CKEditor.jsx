import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";
import {
  Alignment,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageEditing,
  ImageUtils,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  Paragraph,
  PlainTableOutput,
  RemoveFormat,
  SourceEditing,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableLayout,
  TableProperties,
  TableToolbar,
  TodoList,
  Underline,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

const LICENSE_KEY = "GPL"; // or your actual key

// ✅ Accept props from react-hook-form
export default function ResponsiveCKEditor({ value = "", onChange, onBlur }) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const getToolbarItems = () => {
    if (windowWidth < 600) {
      return [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "sourceEditing",
      ];
    } else if (windowWidth < 900) {
      return [
        "sourceEditing",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertTable",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "alignment",
      ];
    } else {
      return [
        "sourceEditing",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "horizontalLine",
        "link",
        "insertTable",
        "insertTableLayout",
        "highlight",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
      ];
    }
  };

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) return {};

    return {
      editorConfig: {
        toolbar: {
          items: getToolbarItems(),
          shouldNotGroupWhenFull: windowWidth > 900,
        },
        plugins: [
          Alignment,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          Code,
          CodeBlock,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          GeneralHtmlSupport,
          Heading,
          Highlight,
          HorizontalLine,
          HtmlComment,
          HtmlEmbed,
          ImageEditing,
          ImageUtils,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          ListProperties,
          Paragraph,
          PlainTableOutput,
          RemoveFormat,
          SourceEditing,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableLayout,
          TableProperties,
          TableToolbar,
          TodoList,
          Underline,
        ],
        balloonToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "|",
          "bulletedList",
          "numberedList",
        ],
        blockToolbar:
          windowWidth > 600
            ? [
                "fontSize",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "bold",
                "italic",
                "|",
                "link",
                "insertTable",
                "insertTableLayout",
                "|",
                "bulletedList",
                "numberedList",
                "outdent",
                "indent",
              ]
            : [
                "bold",
                "italic",
                "|",
                "link",
                "|",
                "bulletedList",
                "numberedList",
              ],
        fontFamily: { supportAllValues: true },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22],
          supportAllValues: true,
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            { name: /^.*$/, styles: true, attributes: true, classes: true },
          ],
        },
        initialData: "", // no need to set manually, react-hook-form handles it
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: { download: "file" },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [isLayoutReady, windowWidth]);

  const handleEditorReady = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="main-container">
      <div
        className={`editor-container editor-container--responsive ${
          windowWidth < 600 ? "editor-container--mobile" : ""
        }`}
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div className="editor-wrapper" ref={editorRef}>
            {editorConfig && (
              <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                onReady={handleEditorReady}
                data={value} // ✅ controlled input
                onChange={(event, editor) => onChange(editor.getData())} // ✅ return data to RHF
                onBlur={onBlur} // ✅ notify RHF of blur (for touched state)
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

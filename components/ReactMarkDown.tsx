import ReactMarkdown from "react-markdown";
import Link from "next/link";

const MyReactMarkDown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link legacyBehavior href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MyReactMarkDown;

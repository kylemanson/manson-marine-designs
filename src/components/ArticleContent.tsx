interface ArticleContentProps {
  content: string;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-semibold text-foreground pt-4"
            >
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }

        if (block.startsWith("- ")) {
          const items = block.split("\n").map((l) => l.replace(/^-\s+/, ""));
          return (
            <ul key={i} className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
              {items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {block}
          </p>
        );
      })}
    </div>
  );
};

export default ArticleContent;
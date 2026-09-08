// Renders one or more JSON-LD structured-data blocks. React 19 hoists the
// <script> into <head>. Content is build-time constant, so this is safe as
// a server component with dangerouslySetInnerHTML.
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

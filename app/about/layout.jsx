export default function AboutLayout({ children }) {
  return (
    <html
      lang="en" 
    >
      <body className="min-h-full flex flex-col">
        <h1>About Layout</h1>
        {children}
        </body>
    </html>
  );
}
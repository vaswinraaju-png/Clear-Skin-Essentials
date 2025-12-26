export const metadata = {
  title: "Clear Skin Essentials",
  description: "Honest skincare education. Ingredient-first. No selling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

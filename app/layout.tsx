export const metadata = {
  title: "Vineria Stradella — Enoteca, Stradella (PV)",
  description:
    "Vineria Stradella: enoteca, wine bar e aperitivi nel centro di Stradella (PV). Selezione vini, taglieri e atmosfera conviviale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

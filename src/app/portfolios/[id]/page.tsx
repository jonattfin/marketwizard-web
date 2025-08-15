import PortfolioContainer from "./_components/portfolio-container";

export default async function PortfolioPage({params}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const {id} = await params;

  if (!id) {
    return;
  }

  return (
    <PortfolioContainer {...{id}} />
  )
}
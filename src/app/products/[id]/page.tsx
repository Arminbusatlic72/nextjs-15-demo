export default async function Products({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="flex justify-center min-h-screen">
      <h1>Products : {id} </h1>;
    </div>
  );
}

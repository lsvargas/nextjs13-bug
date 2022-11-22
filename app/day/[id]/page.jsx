export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]
}

export const revalidate = 5

async function Day({ params }) {
  const { id } = params

  console.log("id: ", id)

  return (
    <div>
      <h1>Component</h1>
    </div>
  );
}

export default Day
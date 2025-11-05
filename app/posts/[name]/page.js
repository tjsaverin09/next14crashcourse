async function page({params}) {
  const { name } = await params;
  return (
    <div>
      This is Post: {name}
    </div>
  )
}

export default page

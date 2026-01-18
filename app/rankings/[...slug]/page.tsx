

export default async function Page({ params }: { params: { slug: string[] } }) {
    const parmesan = await params
    console.log(parmesan)
    return <div>RANKINGS Yo{
        parmesan.slug}</div>
}
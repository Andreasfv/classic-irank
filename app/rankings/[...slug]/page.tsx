

export default async function Page({ params }: { params: { slug: string[] } }) {
    const parmesan = await params
    return <div>RANKINGS Yo</div>
}
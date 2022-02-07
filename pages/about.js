import Layout from '../components/layout'
import Link from "next/link";

export default function Page() {
    return <div>
        <h1>About us</h1>
        <p> is ironical NFT art studio.
            Based in South Korea, Seoul.</p>
        <ol>
            <li><p>Jungmin Ha / Graphic artist</p></li>
            <li><p>Younggun Park / Engineer</p></li>
            <li><p>Jungmu Kim / Graphic artist</p></li>
        </ol>

        <h4>
            <Link href="/">
                <a>Home</a>
            </Link>
        </h4>
    </div>
}

Page.getLayout = function getLayout(page) {
    return (
        <Layout>

            {page}

        </Layout>
    )
}
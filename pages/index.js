import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			{/* <Head>
				<title>My Profile</title>
			</Head> */}
			<section className={utilStyles.headingMd}>
				<p>I am Annu.Junior web developer @TrustyBytes</p>
			</section>
		</Layout>
	);
}

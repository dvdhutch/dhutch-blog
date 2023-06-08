import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> 👋 Hi, I'm David </p>
        <p> 📍 I'm in <b>London, England</b></p>
        <p> 📚 Currently, I'm reading: <i>How to Hide an Empire: A Short History of the Greater United States</i> and <i>Greenlights</i></p>
        <p> <b> What important truth do very few people agree with you on? Or, to the entrepreneur, what valuable company is nobody building? <a href="https://en.wikipedia.org/wiki/Zero_to_One">(<i>Thiel</i>)</a> </b> </p>
        <p> Without fail, this question leads me to ponder, as I try to understand and piece together solutions to problems. Outwardly people describe me as calm and affable but inwardly I can't sit still and am always trying to figure out what comes next.</p>
        <p> Some of the things I'm most interested in include education technology, and in particular, the role of <a href="https://www.ted.com/talks/sal_khan_the_amazing_ai_super_tutor_for_students_and_teachers/c">artificial intelligence</a> in the future of education, the <a href="http://paulgraham.com/cities.html">stories</a> cities tell, <a href="https://ourworldindata.org/">visualizing</a> human geography, particularly in the context of highlighting the <a href="https://www.segregationbydesign.com/">failure of urban renewal projects</a> and advocating for continued investment in large, sustainable <a href="https://www.noahpinion.blog/p/interview-patrick-collison-co-founder">infrastructure projects</a> in America, and by extension the world. </p>
        <p> I work as a Product Manager at <a href="https://www.liveohana.ai">Ohana</a> and am an incoming teacher at the <a href="https://www.goprojectnyc.org">GO Project</a> in New York. </p>
        <p> Previously, I started a startup, <a href="https://www.suoni.co">Suoni</a>, where I worked on making AI-generated lesson plans for teachers -- and learned a lot along the way.</p>
        <p> I am a student in the <a href="https://www.shc.psu.edu">Penn State Schreyer Honors College</a> and a fellow in the <a href="https://www.academy.psu.edu">Presidential Leadership Academy at Penn State</a>.
        </p>
        <p> <a class='button' href="https://twitter.com/dvdhutch">Twitter</a></p>
        <p> <a class='button' href="mailto:davidmhutchinson@hotmail.com">Email</a></p>
        <p> <a class='button' href="https://drive.google.com/file/d/1k3JSrN3WBgRfVW_7n5N2oYpYJyrzM0oG/view?usp=sharing">Resume</a></p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Essays</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => ( 
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/posts/${id}`}>
               <a>{title}</a>
              </Link>
              <br />
             <small className={utilStyles.lightText}>
               <Date dateString={date} />
             </small>
           </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
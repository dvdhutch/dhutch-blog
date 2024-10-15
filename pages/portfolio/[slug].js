// pages/portfolio/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/layout';
import { useEffect } from 'react';

const projectData = {
  subway: {
    title: 'NYC\'s Underserved Neighborhoods',
    description: 'A deep-dive into New York neighborhoods that are underserved by the New York City Subway.',
    imageUrl: '/images/subway.jpg',
    externalUrl: 'https://storymaps.arcgis.com/stories/3b06e62cea54424eb239c3719842386c', // External URL for this project
  },
  uni: {
    title: 'A Brief History of the University',
    description: 'A scoping account of the university, including its contribution to Western values such as liberalism and democracy, and the changing nature of the university in response to demographic and economic trends.',
    imageUrl: 'https://www.uni-wittenberg.de/wp-content/uploads/image/jpeg/Leuorea_1644_Ausschnitt.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/11/03/a-brief-history-of-the-university/',
  },
  williamsport: {
    title: 'Tales of water and mountains',
    description: 'Geography is deterministic. For some, geography is destiny. For others, geography is fate. For Williamsport,a moderately large city situated on the West Branch of the Susquehanna River, as well as the principal cultural, economical, and commercial node of Central Pennsylvania, geography tells the story of of how and why a modest village became the wealthiest place in the world.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6VA6d2Qd4dsPoS7kCXeAyqaXZVBBZWVQj83AYia51Tj-Nso-naTeo-BUotriI_HZ1lZfUrj9C90BM0Dzy-U_pGuotiLBE7B05zP9TXvKQlBSSBFpnrTJ-MDzmRifvmJCUo_oF24ioMfeACC7bRpJdN5haerID8gZQIEFKK9FjpKjfQBgdyy0cHlzFRg/s1000/labeled%20williamsport.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/12/03/tales-of-water-and-mountains/',
  },
  thesis: {
    title: 'Student Perceptions of Digital Learning Technology: A Cross-Cultural Analysis of Music Students',
    description: '',
    imageUrl: 'https://media.architecturaldigest.com/photos/563000c2bf2db2f83856e12c/16:9/w_3040,h_1710,c_limit/harry-potter-sets-christ-church-college-oxford15.jpg',
    content: (
      <>
        <p>This project was advised by <a href="https://arts.psu.edu/directory/jacob-holster" target="_blank">Dr. Jacob Holster</a>.</p>
        <p>I presented this project at the New York State School Music Association Winter Conference (Rochester, NY) and the Penn State Undergraduate Expo (University Park, PA), as well as the Texas Music Educators Association/Technology In Music Education Conference (San Antonio, TX).</p>
        <p>In 2024 I won the Pennsylvania Music Educators Association Award for Excellence in Research.</p>
        <h2>Objective & Hypotheses</h2>
        <ul>
          <li>Investigate the similarities and differences American and British music students have with digital learning technology</li>
          <li>Identify the way students’ use of technology has changed from before the onset of the COVID-19 pandemic to after COVID-19​</li>
          <li>To explore how cultural and institutional differences might influence these perceptions.</li>
          <li>Consider the practical implications of various modes of digital learning technology for music teachers based on student input​</li>
        </ul>
        <h2>Population</h2>
        <ul>
          <li>Invitation distributed to students at Penn State School of Music and University of Oxford, Faculty of Music via email Listserv​</li>
          <li>Participants complete ~ 20 minute interview protocol generated by the researcher​</li>
          <l1>Open to undergraduate and graduate students in a music course of study (degree program)​</l1>
        </ul>
        <h2>Sample Interview Protocol</h2>
        <ul>
          <li>What percent of class time do you use technology in your courses at [institution name]? For example, I use a tuner app in symphonic band 40% of the time.​</li>
          <li>Briefly explain how your use of technology has changed before and after the outbreak of COVID-19 in March 2020. Do you find yourself using technology more, less, or about the same?​</li>
          <li>Are you looking to use technology more, less, or about the same amount in your future course work?​</li>
        </ul>
        <img src="https://lh4.googleusercontent.com/4VP2hO4ML80TVPDVmtKklDQmTAnJ1j8UTcTLVU-YgwtnKaRNGbREQHD0PrwsZS5N-Dw4O583yWEsQ9RrSDBwZrk9HU93i9yjiIw0WyRxivSBWQYsfFEv_HCJHcBjAVSVAQ=w1280" alt="Presenting in Rochester, NY" style={{ display: 'block', margin: '0 auto' }}/>
      </>
    ),
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectData[slug];

  // Redirect to external URL if it exists and then go back to /portfolio
  useEffect(() => {
    if (project?.externalUrl) {
      window.open(project.externalUrl, '_blank');
      router.push('/portfolio'); // Redirect back to the portfolio page
    }
  }, [project]);

  if (!project) {
    return <p>Project not found.</p>;
  }

  // If there's an external URL, don't render the page content
  if (project.externalUrl) {
    return null; // Prevent rendering if redirecting
  }

  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {project.content}
    </Layout>
  );
}

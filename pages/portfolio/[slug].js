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
    tabTitle: 'NYC\'s Underserved Subways', // Custom tab title
  },
  uni: {
    title: 'A Brief History of the University',
    description: 'A scoping account of the university, including its contribution to Western values such as liberalism and democracy, and the changing nature of the university in response to demographic and economic trends.',
    imageUrl: 'https://www.uni-wittenberg.de/wp-content/uploads/image/jpeg/Leuorea_1644_Ausschnitt.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/11/03/a-brief-history-of-the-university/',
    tabTitle: 'University History', // Custom tab title
  },
  williamsport: {
    title: 'Tales of water and mountains',
    description: 'Geography is deterministic. For some, geography is destiny. For others, geography is fate. For Williamsport,a moderately large city situated on the West Branch of the Susquehanna River, as well as the principal cultural, economical, and commercial node of Central Pennsylvania, geography tells the story of of how and why a modest village became the wealthiest place in the world.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6VA6d2Qd4dsPoS7kCXeAyqaXZVBBZWVQj83AYia51Tj-Nso-naTeo-BUotriI_HZ1lZfUrj9C90BM0Dzy-U_pGuotiLBE7B05zP9TXvKQlBSSBFpnrTJ-MDzmRifvmJCUo_oF24ioMfeACC7bRpJdN5haerID8gZQIEFKK9FjpKjfQBgdyy0cHlzFRg/s1000/labeled%20williamsport.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/12/03/tales-of-water-and-mountains/',
    tabTitle: 'Williamsport', // Custom tab title
  },
  thesis: {
    title: '',
    description: '',
    imageUrl: '',
    content: (
      <>
        <h1>Student Perceptions of Digital Learning Technology: A Cross-Cultural Analysis of Music Students</h1>
        <p><i>This project was advised by <a href="https://arts.psu.edu/directory/jacob-holster" target="_blank">Dr. Jacob Holster</a>.</i></p>
        <p><i>I presented this project at the <a href="https://www.nyssma.org/" target="_blank">New York State School Music Association</a> Winter Conference (Rochester, NY), the <a href="https://urfm.psu.edu/programs/undergraduate-exhibition" target="_blank">Penn State Undergraduate Expo</a> (University Park, PA), and the <a href="https://www.tmea.org/" target="_blank">Texas Music Educators Association</a>/<a href="https://ti-me.org/" target="_blank">Technology In Music Education</a> Conference (San Antonio, TX). In 2024 I won the <a href="https://www.pmea.net/" target="_blank">Pennsylvania Music Educators Association</a> Award for Excellence in Research.</i></p>
        <p><i>This is the presentation-ready version of a full-length research paper. Read the whole thing <a href="https://honors.libraries.psu.edu/catalog/9008dmh6286" target="_blank">here</a>!</i></p>
        <h2>Objective & Hypotheses</h2>
        <ul>
          <li>Investigate the similarities and differences American and British music students have with digital learning technology</li>
          <li>Identify the way students' use of technology has changed from before the onset of the COVID-19 pandemic to after COVID-19​</li>
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
        <img src="/images/gpt-analysis.png" alt="GPT-4 Analysis" style={{ display: 'block', margin: '0 auto', padding: '10px', width: '100%', maxWidth: '1000px' }}/>
        <h2>Results: Narrative</h2>
        <ul>
          <li>“TD emphasized the importance of his iPad, not just as a tool for engagement during lessons, but as an essential device for note-taking and music reading, stating “I use it 100% of the time in my lesson.” He spotlighted the applications OneNote and ForScore as integral to his learning process, with ForScore being lauded for its user-friendly interface and ease of use.”​</li>
          <li>“The outbreak of COVID-19 led to a significant increase in technology use among students. A.W. noted a shift to digital meetings and online music resources. S.F. experienced a temporary spike in technology use due to the transition to online classes. B.H. adapted to reading music digitally, a practice he had previously been skeptical about.”​</li>
        </ul>
        <h2>Results: Topic Model</h2>
        <img src="/images/topic-model-1.png" alt="Topic Model" style={{ display: 'block', margin: '0 auto'}}/>
        <img src="/images/topic-model-2.png" alt="Topic Model" style={{ display: 'block', margin: '0 auto'}}/>
        <h2>Discussion</h2>
        <ul>
          <li>Recommendations for teachers​
            <ul>
              <li>Student-centric planning</li>
              <li>How easy is it for students to learn how to use the technology?​</li>
              <li>UI/UX</li>
            </ul>
          </li>
          <li>Suggestions for future research​
          <ul>
              <li>Larger, more diverse sample​</li>
              <li>Focus on access in PK-12​​</li>
            </ul>
          </li>
          <li>Personal impact
          <ul>
              <li>Approached and designed the study with novel research methods​</li>
              <li>Developed an interest in user experirence research and best practices for learning design​</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    tabTitle: 'Student Perceptions of Digital Learning Technology', // Custom tab title
  },
  ohana_blog: {
    title: '',
    description: '',
    imageUrl: '',
    content: (
      <>
        <h1>Ohana Corporate Blog</h1>
        <h3>Stack</h3>
        <ul>
          <li><a href="https://www.goodnotes.com" target="_blank">Goodnotes</a> (sketching)</li>
          <li><a href="https://www.figma.com" target="_blank">Figma</a> (prototyping)</li>
          <li><a href="https://www.bubble.io" target="_blank">Bubble</a> (interaction design, front-end development)</li>
        </ul>
        <p>I developed this project as an intern and the first product hire at Ohana, an NYC-based startup building the Airbnb of subleasing. One of the first initiatives I took up as an intern was to sketch, prototype, and build Ohana's blog. The primary reason for this was to publicize Ohana’s recent pre-seed round with Neo, a startup incubator backed by industry figures like Ali Partovi, Emily Cohen, and others.</p>
        <h2>References and Sketches</h2>
        <p>The aim was to design a corporate blog, for external use, that was simple and concise, all while meeting our SEO goals. <a href="https://www.apple.com/newsroom/" target="blank">Apple's Newsroom</a> served as a primary source of inspiration. Its plain, sleek look keeps the focus on the content and away from other bells and whistles, reserved for the product.</p>
        <img src="/images/apple reference.png" alt="Apple Newsroom" style={{ display: 'block', margin: '0 auto'}}></img>
        <p>I started by making some rough sketches of how I wanted the blog to look and be styled. To begin, I sketched the blog's landing page, housing all of the posts on the site.</p>
        <img src="/images/Blog homepage sketch-3.jpg" alt="Ohana blog homepage sketch" style={{ display: 'block', margin: '0 auto'}}></img>
        <p>I also sketched the design for the blog posts.</p>
        <img src="/images/Blog page sketch-4.jpg" alt="Ohana blog post sketch" style={{ display: 'block', margin: '0 auto'}}></img>
        <h2>Prototyping</h2>
        <p>Next, I refined my sketches into full prototpyes in Figma. The goal here was to have renders for desktop and mobile devices before beginning to build.</p>
        <img src="/images/Ohana blog - desktop.svg" alt="Ohana blog desktop prototype" style={{ display: 'block', margin: '0 auto'}}></img>
        <img src="/images/Ohana blog - mobile.svg" alt="Ohana blog mobile prototype" style={{ display: 'block', margin: '0 auto'}}></img>
        <h2>Production</h2>
        <p>The <a href="https://liveohana.ai/blog_home" target="_blank">blog</a> was pushed to production in mid-2023 and has housed Ohana's corporate updates since that time.</p>
        <img src="/images/Ohana blog homepage final.png" alt="Ohana blog homepage final" style={{ display: 'block', margin: '0 auto'}}></img>
        <p></p>
        <img src="/images/Ohana blog page final.png" alt="Ohana blog post final" style={{ display: 'block', margin: '0 auto'}}></img>
      </>
    ),
    tabTitle: 'Ohana Corporate Blog', // Custom tab title
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

  const pageTitle = project?.tabTitle || project?.title || 'Project Page';

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {project.content}
    </Layout>
  );
}

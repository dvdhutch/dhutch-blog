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
        <p>I developed this project as an intern and the first product hire at <a href="https://liveohana.ai" target="_blank">Ohana</a>, an NYC-based startup building the Airbnb of subleasing. One of the first initiatives I took up as an intern was to sketch, prototype, and build Ohana's blog. The primary reason for this was to publicize Ohana’s recent pre-seed round with Neo, a startup incubator backed by industry figures like Ali Partovi, Emily Cohen, and others.</p>
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
        <p>Thanks for reading! Another project I did as an intern was <a href="https://www.dhutch.fyi/portfolio/ohana_neighborhood">Ohana's Neighborhood Information tool</a>.</p>
      </>
    ),
    tabTitle: 'Ohana Corporate Blog', // Custom tab title
  },
  ohana_neighborhood: {
    title: '',
    description: '',
    imageUrl: '',
    content: (
      <>
        <h1>Ohana Neighborhood Information Tool</h1>
        <h3>Stack</h3>
        <ul>
          <li><a href="https://www.goodnotes.com" target="_blank">Goodnotes</a> (sketching)</li>
          <li><a href="https://www.figma.com" target="_blank">Figma</a> (prototyping)</li>
          <li><a href="https://www.bubble.io" target="_blank">Bubble</a> (interaction design, front-end development)</li>
          <li><a href="https://www.hotjar.com/" target="_blank">Hotjar</a> (usability testing)</li>
        </ul>
        <p>I developed this project as an intern and the first product hire at <a href="https://liveohana.ai" target="_blank">Ohana</a>, an NYC-based startup building the Airbnb of subleasing. This project combined my first exposure to usability testing in a formal context and designing user interactions for Ohana's product.</p>
        <h2>The Problem</h2>
        <p>Users, particularly young users (our target demographic), really wanted to know where things are happening, and where listings are in relation to those happenings.</p>
        <p>We employed Hotjar as a tool for analyzing user behavior and watching session replays. Concurrently, the very first iteration of Ohana's product was launched, featuring an interactive map to browse listings. As soon as there was a map for users to visualize listings, they wanted to see the neighborhood the listing was located in. This could be tracked by observing users increasing detail on nearby POIs and searching for various happenings in those neighborhoods, such as its walkability, proximity to transit, and live events.</p>
        <p>Addressing the gaps in the customer journey via usability testing was an important first step in this project, and I reported directly to the co-founder/CTO with my data to consider how to implement any necessary changes in the service. My goal was to build out a new way for users to look at listings by locale, enabling them to visualize amenities available in a certain geographical area while still maintaing the ease of searching for listings interactively on a map.</p>
        <h2>References and Sketches</h2>
        <p>Google Maps does a good job displaying important information for a tourist in a neighborhood, but lacks the depth and bespoke information an apartment hunter would be looking for in a neighborhood overview. Conversely, Wikipedia offers a user tons of information, but can be overbearing for the purposes of apartment hunting. Also, it was important for myself and the Ohana team to tailor content for our user demographic, which skews young. Users mentioned that they wanted to see things like upcoming events and transit access—things that younger users would place a higher value on—and things that would be important to include  for transplants moving the cities that they have limited experience in.</p>
        <img src="/images/Google maps example.png" alt="Google Maps example" style={{ display: 'block', margin: '0 auto'}}></img>
        <h3>Neighborhood Homepage</h3>
        <p>The first step was to go to the (figurative) drawing board and sketch out how the user would interact with the many neighborhoods Ohana listings were located in.</p>
        <p>Often times the simplest path is the the best path, particularly for a more complex user interaction like selecting a neighborhood (considering that most users aren't familiar with the details of the neighborhood). With this in mind, the overall structure of the neighborhoods on the site were to be split into cities, with cards for each neighborhood in the specified city.</p>
        <img src="/images/NYC homepage sketch-5.jpg" alt="NYC neighborhood homepage sketch" style={{ display: 'block', margin: '0 auto'}}></img>
        <p>An additional feature you might notice in this early sketch are upcoming events-another feature geared towards a young demographic.</p>
        <h3>Detailed Neighborhood Page</h3>
        <p>The detailed page sketch includes relevant info for the user such as a brief overview of the neighborhood, transit, walking, and biking options, and a display of clicklable listings located in that neighborhood.</p>
        <img src="/images/Hell’s Kitchen page sketch-6.jpg" alt="Detailed neighborhood page sketch" style={{ display: 'block', margin: '0 auto'}}></img>
        <h2>Prototyping</h2>
        <p>The two prototypes for this project were for the neighborhood homepage (New York City) and a detailed neighborhood page (Hell's Kitchen).</p>
        <img src="/images/Neighborhood landing page.jpg" alt="NYC neighborhood landing page prototype" style={{ display: 'block', margin: '0 auto'}}></img>
        <img src="/images/Neighborhood detailed view.jpg" alt="NYC neighborhood detaild page prototype" style={{ display: 'block', margin: '0 auto'}}></img>
        <p>The focus of these prototypes was engagement, while keeping a sleek and simple look. The eyes should be driven to listings, which is the ultimate goal of the tool.</p>
        <h2>Production</h2>
        <h3>Neighborhood Homepage</h3>
        <p>The city landing page for New York was pushed to production in mid-2023, which features an interactive map of listing city-wide.</p>
        <img src="/images/Ohana neighborhood homepage final 1.png" alt="NYC neighborhood landing page final" style={{ display: 'block', margin: '0 auto'}}></img>
        <p>Below that, there are clickable cards tailored to specific city neighborhoods.</p>
        <img src="/images/Ohana neighborhood homepage final 2.png" alt="NYC neighborhood landing page final" style={{ display: 'block', margin: '0 auto'}}></img>
        <h3>Detailed Neighborhood Page</h3>
        <p>The detailed neighborhood page features the same detail as the prototype, including transportation accessability, and importantly, an interactive map of live listings.</p>
        <img src="/images/Hell's Kitchen page final.png" alt="Hell's kitchen page final" style={{ display: 'block', margin: '0 auto'}}></img>
        <h2>Check it out!</h2>
        <p>Are you looking for a place to sublease in a new city? Want to sublet your place? <a href="https://liveohana.ai/sublet/new-york-city" target="_blank">Check out the Ohana Neighborhood Information Tool</a>.</p>
        <h2>What I Would Change</h2>
        <p>If I were still involved on this project, I would like to conduct a follow-up study with users to get a better sense of how this solution solves their pain points, and evaluate if there are any omissions from our initial usability study. This would have provided an opportunity to validate the design with users.</p>
      </>
    ),
    tabTitle: 'Ohana Neighborhood Information Tool', // Custom tab title
  },
  academic_wagers: {
    title: 'Academic Wagers',
    description: 'Polymarket-style wagers on academic outcomes. Making learning engaging, fun, and rewarding. MSTU 5003 (Programming I) final project with Daniel Barth at Teachers College, Columbia University.',
    imageUrl: '/images/academic_wagers_img.png',
    externalUrl: 'https://dvdhutch.github.io/Academic-Wagers/',
    tabTitle: 'Academic Wagers', // Custom tab title
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

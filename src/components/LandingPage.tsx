import React from 'react';
import { Button } from "./ui/button"


import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
{/* Hero Section */}
<section className="relative h-screen flex items-center justify-center bg-black">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/images/weeknd-image.jpg"
      alt="The Weeknd"
      className="w-full h-full object-cover"
    />
    {/* Monochromatic overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-45"></div>
  </div>

  <div className="relative z-10 text-white p-8 w-full max-w-5xl md:pl-16 md:text-left text-left">
    <h1 className="text-6xl md:text-8xl font-bold mb-4 font-syne uppercase text-red-600">
      The Weeknd
    </h1>
    <p className="text-3xl md:text-5xl mb-4 uppercase tracking-widest text-red-500">
      Starboy. King of the Fall.
    </p>
    <p className="text-lg md:text-2xl mb-8 font-extrabold text-gray-300">
      Dive into the electrifying world of The Weeknd, the Grammy-winning artist who has captivated audiences worldwide. Experience his unique blend of R&B, pop, and synth-wave through his iconic tracks and mesmerizing performances.
    </p>
    <div className="flex justify-start space-x-6 mt-4">
      {/* Social Media Icons */}
<div className="flex justify-center space-x-4 mt-4">
  <a href="https://www.instagram.com/theweeknd/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-gray-400">
    <i className="fab fa-instagram fa-2x"></i>
  </a>
  <a href="https://twitter.com/theweeknd" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-gray-400">
    <i className="fab fa-twitter fa-2x"></i>
  </a>
  <a href="https://open.spotify.com/artist/1vC4n5wXGZK1L0K6O4fG8A" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-gray-400">
    <i className="fab fa-spotify fa-2x"></i>
  </a>
  <a href="https://www.youtube.com/user/TheWeekndVEVO" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-gray-400">
    <i className="fab fa-youtube fa-2x"></i>
  </a>
</div>
    </div>
  </div>
</section>

{/* Biography Section */}
<section id="biography" className="py-8 bg-black text-white">
  <div className="container mx-auto flex flex-col md:flex-row px-12"> 
    
    {/* Left Div - Text Content */}
    <div className="md:w-1/2 flex flex-col justify-center items-start pr-8"> 
      <h2 className="text-3xl font-bold font-syne mb-4 text-left">  
        Early Life + Rise to Fame
      </h2>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left"> 
        <span className="text-red-500">Abel Tesfaye</span>, born and raised in Toronto, Canada, dropped out of high school and began creating music as "<span className="text-red-500">The Weeknd</span>."
      </p>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left"> 
        Released his first mixtape <em>House of Balloons</em> in 2011, which gained massive attention on the internet, catapulting him to underground fame.
      </p>
      <p className="mb-4 text-lg font-inter leading-relaxed text-left"> 
        <span className="text-red-500">The Weeknd</span>'s Ethiopian heritage and love for artists like <span className="text-red-500">Michael Jackson</span> heavily influenced his unique sound and style.
      </p>
    </div>

    {/* Right Div - House of Balloons Image with Caption */}
    <div className="md:w-1/2 flex flex-col justify-start items-center mt-4 md:mt-0">
      <img
        src="/images/houseofballoons.jpg"
        alt="House of Balloons"
        className="w-full md:w-3/4 h-auto object-cover"
      />
      <p className="text-sm text-gray-400 mt-2 font-inter italic text-center"> {/* Centered caption */}
        The Weeknd's iconic <em>House of Balloons</em> album cover
      </p>
    </div>
  </div>
</section>
{/* Breakthrough Section */}
<section id="breakthrough" className="py-8 bg-black-900 text-white">
  <div className="container mx-auto flex flex-col md:flex-row px-12">

    {/* Left Div - Trilogy Image with Caption */}
    <div className="md:w-1/2 flex flex-col justify-start items-center mb-4 md:mb-0">
      <img
        src="/images/trilogy1.jpg" 
        alt="Trilogy"
        className="w-full md:w-2/3 h-auto object-cover" // Adjusted width to be smaller
      />
      <p className="text-sm text-gray-400 mt-2 font-inter italic text-center"> {/* Centered caption */}
        The Weeknd's iconic <em>Trilogy</em> album cover
      </p>
    </div>

    {/* Right Div - Text Content */}
    <div className="md:w-1/2 flex flex-col justify-center items-start pl-8"> 
      <h2 className="text-3xl font-bold font-syne mb-4 text-left">
        <span style={{ color: '#98FF98' }}>Kiss Land</span> + <span style={{ color: '#FFFF' }}>Trilogy</span>
      </h2>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left">
        <span className="text-red-500">The Weeknd</span>'s early trilogy of mixtapes: <span className="text-red-500">House of Balloons</span>, <span className="text-red-500">Thursday</span>, and <span className="text-red-500">Echoes of Silence</span> defined his unique sound of dark R&B.
      </p>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left">
        His debut album <span className="text-red-500">Kiss Land</span> in 2013 marked a critical moment for his transition to mainstream success.
      </p>
    </div>
  </div>
</section>

 {/* Superstardom Section */}
<section id="superstardom" className="py-8 bg-black text-white">
  <div className="container mx-auto flex flex-col md:flex-row px-12">
        {/* Right Div - Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center items-start pl-8"> 
      <h2 className="text-3xl font-bold mb-4 font-syne">Beauty Behind the Madness & <span style={{ color: '#FFA500' }}>My Dear Melancholy</span></h2>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left">
      <span className="text-red-500">Beauty Behind the Madness</span> (2015) featured hits like "Can't Feel My Face" and "The Hills," solidifying The Weeknd as a global star.
      </p>
      <p className="mb-3 text-lg font-inter leading-relaxed text-left">
        His EP <span className="text-red-500">My Dear Melancholy*</span> (2018) showcased a return to his darker roots, with deeply personal themes and a sonic exploration of heartbreak.
      </p>
    </div>
    {/* Left Div - Beauty Behind the Madness Image with Caption */}
    <div className="md:w-1/2 flex flex-col justify-start items-center mb-4 md:mb-0">
      <img
        src="/images/beautybehind.jpg" // Replace with the actual image path
        alt="Beauty Behind the Madness"
        className="w-full md:w-3/4 h-auto object-cover"
      />
      <p className="text-sm text-gray-400 mt-2 font-inter italic text-center"> {/* Centered caption */}
        The Weeknd's <em>My Dear Melancholy</em> album cover
      </p>
    </div>
  </div>
</section>
{/* Starboy Section */}
<section id="starboy" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
      style={{ objectFit: 'cover' }} 
    >
      <source src="/videos/starboy.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Monochromatic overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-65"></div>
  </div>

  <div className="relative z-10 text-white p-8 w-full max-w-5xl md:pl-16 md:text-left text-left">
    <h1 className="text-6xl md:text-8xl font-bold mb-4 font-syne uppercase text-red-400">
      Starboy
    </h1>
    <p className="text-3xl md:text-5xl mb-4 uppercase tracking-widest text-red-500">
      The Weeknd's Evolution
    </p>
    <p className="text-lg md:text-2xl mb-8 font-bold text-gray-300">
      Welcome to the era of <i><b>Starboy</b></i>, where The Weeknd reached new heights of fame and artistic expression. With chart-topping hits like <span className="text-orange-500">"Starboy"</span>, <span className="text-orange-500">"I Feel It Coming"</span>, and <span className="text-orange-500">"Party Monster"</span>, he redefined modern music and captivated fans worldwide.
    </p>
  </div>
</section>
{/* After Hours Section */}
<section id="afterhours" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
      style={{ objectFit: 'cover' }} 
    >
      <source src="/videos/after-hours.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Monochromatic overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>

  <div className="relative z-10 text-white p-8 w-full max-w-5xl md:pl-16 md:text-left text-left">
    <h1 className="text-6xl md:text-8xl font-bold mb-4 font-syne uppercase text-red-600">
      After Hours
    </h1>
    <p className="text-3xl md:text-5xl mb-4 uppercase tracking-widest text-red-500">
      A Journey into Darkness
    </p>
    <p className="text-lg md:text-2xl mb-8 font-bold text-gray-300">
  In the <i><b>After Hours</b></i> era, The Weeknd really opened up about heartbreak and self-reflection. Songs like <span className="text-orange-500">"Blinding Lights"</span>, <span className="text-orange-500">"Heartless"</span>, and <span className="text-orange-500">"Save Your Tears"</span> not only topped the charts but also showcased his evolution as an artist, mixing catchy hooks with deeper themes. It’s a fascinating blend of pop and R&B that redefined his sound, reminding us why he remains a standout in today's music landscape.
</p>

  </div>
</section>

{/* Dawn FM Section */}
<section id="dawnfm" className="relative h-screen flex items-center justify-center bg-black overflow-hidden m-0 p-0">
  <div className="absolute inset-0 overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
      style={{ objectFit: 'cover' }} // Ensures the video covers the entire section
    >
      <source src="/videos/dawn-fm.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Monochromatic overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-65"></div>
  </div>

  <div className="relative z-10 text-white p-8 w-full max-w-5xl md:pl-16 md:text-left text-left">
    <h1 className="text-6xl md:text-8xl font-bold mb-4 font-syne uppercase text-blue-400">
      Dawn FM
    </h1>
    <p className="text-3xl md:text-5xl mb-4 uppercase tracking-widest text-white">
      A New Sound
    </p>
    <p className="text-lg md:text-2xl mb-8 font-bold text-gray-300">
  With <i><b>Dawn FM</b></i>, The Weeknd invites us into an intriguing exploration of the twilight of the mind with tracks like <span className="text-blue-600">"Take My Breath"</span>, <span className="text-blue-600">"Sacrifice"</span>, and <span className="text-blue-600">"Out of Time"</span>.
  The 80s synthwave influences are evident, and while they nod to the past, they also show how The Weeknd continues to evolve as an artist. <i><b>Dawn FM</b></i> feels like more than just an album; it’s a well-crafted journey that showcases his willingness to take risks and push the boundaries of contemporary music.
</p>

  </div>
</section>
{/* Footer */}
<footer id="footer" className="bg-black py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <h3 className="text-xl font-bold font-syne text-red-500 uppercase">
          ABOUT THIS PROJECT
        </h3>
      </div>
      <p className="text-center text-gray-300 font-dm-sans text-lg">
        This is a React, Tailwind CSS, and TypeScript project created by  
        <a 
          href="https://github.com/himanshumahesh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-red-400"
        >
           @himanshumahesh
        </a> as a documentation of the different eras of The Weeknd, exploring his evolution as an artist.
      </p>
    </div>
    <div className="mt-8 text-center text-sm text-gray-400 font-dm-sans">
      <p>&copy; {new Date().getFullYear()} The Weeknd. All rights reserved.</p>
      <p className="mt-2">
        <Button variant="link" className="text-gray-400 hover:text-red-500">Terms of Service</Button>
        {' | '}
        <Button variant="link" className="text-gray-400 hover:text-red-500">Privacy Policy</Button>
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;

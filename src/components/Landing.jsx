import React from "react";
import '../css/Landing.css';
import { Link } from 'react-router-dom';
import assetImage from '../data/assets/asset 0.svg';
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useRef, useState } from 'react';
import Splide from '@splidejs/splide';




const EventItem = ({ href, date, title, dateRange, location }) => (
  <a href={href} className="event-item">
    <div className="event-item-date">
      <div className="event-item-date-day">{date.day}</div>
      <div className="event-item-date-month">{date.month}</div>
    </div>
    <div className="event-item-content">
      <h3 className="event-item-title">{title}</h3>
      <div className="event-item-details">
        <div className="event-item-daterange">
          <div className="event-item-daterange-start">{dateRange.start}</div>
          <div className="event-item-daterange-separator"> - </div>
          <div className="event-item-daterange-end">{dateRange.end}</div>
        </div>
        {location && <div className="event-item-location">{location}</div>}
      </div>
    </div>
    <div className="event-item-button-wrapper">
      <div className="event-item-button-large">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white" />
          <path d="M8 12L16 12M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="event-item-button-small">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white" />
          <path d="M8 12L16 12M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </a>
);

const events = [
  {
    href: '/event/immune-thrombocytopenia-itp-awareness-month-2',
    date: { day: '1', month: 'Sep' },
    title: 'Immune thrombocytopenia (ITP) Awareness Month',
    dateRange: { start: 'September 1, 2024', end: 'September 30, 2024' }
  },
  {
    href: '/event/76th-bleeding-disorders-conference',
    date: { day: '12', month: 'Sep' },
    title: '76th Bleeding Disorders Conference',
    dateRange: { start: 'September 12, 2024', end: 'September 14, 2024' },
    location: 'Atlanta, Georgia'
  },
  {
    href: '/event/21st-biennial-meeting-of-the-european-society-for-immunodeficiencies-esid',
    date: { day: '16', month: 'Oct' },
    title: '21st Biennial Meeting of the European Society for Immunodeficiencies (ESID)',
    dateRange: { start: 'October 16, 2024', end: 'October 19, 2024' },
    location: 'Marseille, France'
  }
];
const Landing = () => {
  const splideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; 

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: 'loop',
      perPage: 1,
      heightRatio: 0.5,
      pagination: false,
      arrows: true,
    }).mount();

    splide.on('moved', (index) => setCurrentSlide(index + 1));

    return () => splide.destroy(); // Cleanup on unmount
  }, []);


  return (
    <div className="container">



      <div className="top">
        <img src={assetImage} alt="Description of the image" />
        <div className="btn">
          <button>Donate Now</button>
          <button>About PPTA</button>
        </div>
      </div>





      <div className="middle">


        <div className="home-hero_slide">
          <div className="home-hero_slide-left">
            <div className="home-hero_slide-tag">
              <div className="text-size-large">Blog Posts</div>
            </div>
            <div className="home-hero_slide-content">
              <div className="text-size-large">June 21, 2024</div>
              <a href="#" className="text-size-large">Sharing the Power of Plasma on Capitol Hill</a>
            </div>
          </div>
          <div className="home-hero_slide-right">
            <div className="text-size-large">
              <a href="#" aria-label="Previous slide">&lt;</a>
            </div>
            <div className="text-size-large">1</div>
            <div className="text-size-large">of</div>
            <div className="text-size-large">3</div>
            <div className="text-size-large">
              <a href="#" aria-label="Next slide">&gt;</a>
            </div>
          </div>
        </div>



        <section id="about-section" className="section_home-about">
          <div className="container-large _01">
            <h2 className="heading-large">
              <div className="word-line">about</div>
              <div className="word-line">PPTA</div>
            </h2>
            <div className="content_wrapper _658">
              <p className="text-size-large">
                The Plasma Protein Therapeutics Association (PPTA) is a key player in the plasma industry, with an extensive network of human plasma collection centers and manufacturers. Collaborating with numerous key stakeholders and policymakers to establish rightful standards and programs for donors and patients is at the core of our work.
              </p>
              <Link to="/about-ppta" className="button">
                <div className="button-text">Learn more about PPTA</div>
              </Link>
            </div>
          </div>
        </section>




        <section className="section_why-donate" id="plasmadonation-section">
          <div className="container-large _02">
            <div className="content_wrapper _second">
              <h2 className="heading-large">
                <span className="word-line">Why you</span> <br /><span>should</span> <br /><span >donate</span> <br /><span >plasma</span>
              </h2>

              <p className="text-size-large max-width-548">
                Plasma-derived medicines are often the only therapies for many rare and chronic diseases. By becoming a donor, you increase the chances of regular access to plasma medicines for those in need, contributing to the improvement of health outcomes for patients.
              </p>
              <Link to="/donate" className="button">
                <div className="button-text">Donate now</div>
              </Link>
            </div>
            <div className="home-why-slide_wrapper">
              <div className="splide" ref={splideRef}>
                <div className="splide__track">
                  <div className="splide__list">
                    {[
                      { to: "/videos/pollys-story-ppta", src: "https://cdn.prod.website-files.com/638f893112c6eac0e46ac576/6410b10a950cc365617bbe3e_WYSDO-image1.webp", alt: "A girl in red hat." },
                      { to: "/videos/how-is-your-day", src: "https://cdn.prod.website-files.com/638f893112c6eac0e46ac576/6410b10accd1ca90b8f43180_WYSDO-image2.webp", alt: "A man giving an interview." },
                      { to: "/videos/meet-amber-a-teacher-and-dedicated-plasma-donor", src: "https://cdn.prod.website-files.com/638f893112c6eac0e46ac576/6410b101ded6126053d55b22_WYSDO-image3.webp", alt: "A lady giving an interview." }
                    ].map((slide, index) => (
                      <div className="splide__slide" key={index}>
                        <div className="donate-plasma_slide_wrapper">
                          <Link to={slide.to} className="donate-plasma_slide_video">
                            <img className="full-width-image" src={slide.src} alt={slide.alt}  />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="why-donate_splide-pagination_wrapper">
                <span className="text-block">{currentSlide}</span>
                <span className="text-block">|</span>
                <span className="text-block">{totalSlides}</span>
              </div>
            </div>

          </div>
        </section>


        <section>
          <div className="content_wrapper _third">
            <h2 className="heading-large ">
              <div className="word-line ">
                <div className="word">Resource centER</div>
              </div>
            </h2>
            <p className="text-size-large">
              Learn more about our work through the material in our resource center.
            </p>
            <a href="/resources" className="button">
              <div className="button-text">See all resources</div>
              <div className="button_arrows-holder">
                <div className="svg-align-center arrow-container">
                  <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
                    <path d="M0 6.49932H9.5H19M19 6.49932L13 1M19 6.49932L12.9991 12" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                </div>
              </div>
            </a>

          </div>
        </section>



        <section id="events-section" className="section_home-events">
          <div className="home-events_wrapper">
            <div className="content_wrapper _570">
              <h2 className="heading-large">
                <span className="word">Events</span>
              </h2>
            </div>
            <div className="events-list_wrapper">
              {events.map((event, index) => (
                <EventItem key={index} {...event} />
              ))}
            </div>
            <a href="/news-media-and-events#calendar" className="button">
              <div className="button-text">See more</div>
              <div className="button_arrows-holder">
                <div className="svg-align-center">
                  <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.49932H9.5H19M19 6.49932L13 1M19 6.49932L12.9991 12" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>



        <section>
          <div className="home-join_wrapper">
            <div className="content_wrapper _570">
              <h2 className="heading-large">
                <div className="word-line">
                  <span className="word">Join</span>
                  <span className="word">PPTA</span>
                </div>
              </h2>
              <p className="text-size-large">
                Become a member of PPTA! PPTA engages with stakeholders to establish and improve regulations and policies that affect the sector.
                <br /><br />
                By being a member of our industry-leading association, you can work closely with influential partners, enjoy numerous benefits, and access useful resources.
              </p>
              <a href="/join-ppta" className="button w-inline-block" data-delay="400" data-a-type="slide-in-from-bottom">
                <div className="button-text">Join now</div>
                <div className="button_arrows-holder">
                  <div className="svg-align-center w-embed">
                    <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6.5H9.5H19M19 6.5L13 1M19 6.5L13 12" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <div className="button_elipse w-embed" style={{ transform: 'translate3d(8px, 0px, 0px)', opacity: 0 }}>
                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.92 9.796C1.88 6.95 3.787 4.529 6.314 2.946 8.841 1.363 11.832 0.716 14.777 1.115 17.723 1.513 20.441 2.933 22.468 5.133 24.495 7.332 25.706 10.175 25.894 13.176 26.082 16.178 25.237 19.153 23.501 21.594 21.765 24.035 19.247 25.791 16.374 26.564 13.502 27.336 10.454 27.077 7.75 25.83 5.045 24.584 2.852 22.426 1.543 19.726" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="home-join_points" style={{ opacity: 1 }}>
              <div className="home-join_item">
                <div className="home-join_item-image">
                  <div className="svg-align-center w-embed">
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M58 42.889c0 1.925-0.673 3.438-2.019 4.539-1.005 0.825-2.327 1.238-3.965 1.238H49.038c-0.016 0-0.033 0-0.05-0.002H48.244V48.662H29.454c-0.251 0-0.455-0.203-0.455-0.453v-0.905c0-0.251 0.203-0.454 0.455-0.454h18.79V31.011c0-10.587-8.632-19.201-19.243-19.201s-19.243 8.614-19.243 19.201v17.203c0 0.251-0.203 0.454-0.454 0.454H5.985c-1.639 0-3.007-0.825-4.017-1.651-1.357-1.112-2.019-2.731-2.019-4.656 0-1.925 0.73-3.544 2.189-4.661 0.975-0.746 2.28-1.118 3.895-1.118H7.944V31.011c0-11.585 9.447-21.01 21.057-21.01s21.057 9.426 21.057 21.01V37.11h1.957c1.556 0 2.82 0.374 3.746 1.118 1.458 1.117 2.189 2.736 2.189 4.661z" fill="#023460"></path>
                      <path d="M41.198 29.643v0.905c0 0.251-0.203 0.453-0.454 0.453H31.158c-0.354 0.838-1.186 1.427-2.156 1.427-1.291 0-2.338-1.044-2.338-2.333 0-1.969 1.56-3.8 3.4-4.154V18.41c0-0.251 0.203-0.454 0.454-0.454h0.908c0.251 0 0.454 0.203 0.454 0.454v10.327c0 0.251 0.203 0.453 0.454 0.453h10.383c0.251 0 0.454-0.203 0.454-0.453v-0.905c0-0.251-0.203-0.453-0.454-0.453z" fill="#023460"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-join_item-content">
                  <div className="text-size-large">24-hour crisis management assistance</div>
                </div>
              </div>
              <div className="home-join_item">
                <div className="home-join_item-image">
                  <div className="svg-align-center w-embed">
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_97_2229)">
                        <path d="M47.739 3H10.421C9.197 3 8.202 3.965 8.202 5.151v47.391c0 1.187 0.995 2.152 2.219 2.152h37.318c1.223 0 2.22-0.965 2.22-2.152V5.151c0-1.187-0.997-2.151-2.22-2.151zm-35.099 2.151h32.88v11.9H12.64V5.151zm32.88 45.241H12.64v-31.115h32.88v31.115z" fill="#023460"></path>
                        <path d="M35.373 24.63H23.581c-0.251 0-0.454 0.203-0.454 0.453v8.046c0 0.251 0.203 0.453 0.454 0.453h11.791c0.251 0 0.454-0.203 0.454-0.453v-8.046c0-0.251-0.203-0.453-0.454-0.453z" fill="#023460"></path>
                      </g>
                      <div>
                      </div>
                    </svg>
                  </div>
                </div>
                <div className="home-join_item-content">
                  <div className="text-size-large">Education and training programs</div>
                </div>
              </div>
              <div className="home-join_item">
                <div className="home-join_item-image">
                  <div className="svg-align-center w-embed">
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29 1C15.764 1 5 11.764 5 25c0 13.236 10.764 24 24 24 13.236 0 24-10.764 24-24C53 11.764 42.236 1 29 1zm0 43c-10.398 0-19-8.601-19-19 0-10.398 8.602-19 19-19 10.398 0 19 8.602 19 19 0 10.398-8.602 19-19 19z" fill="#023460"></path>
                      <path d="M29 15c-2.486 0-4.5 2.015-4.5 4.5 0 2.486 2.014 4.5 4.5 4.5 2.486 0 4.5-2.014 4.5-4.5 0-2.485-2.014-4.5-4.5-4.5z" fill="#023460"></path>
                      <path d="M29 29.5c-5.417 0-10 2.354-10 4.75v1h20v-1c0-2.396-4.583-4.75-10-4.75z" fill="#023460"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-join_item-content">
                  <div className="text-size-large">Professional networking opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Landing;

import { graphql, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";
import { CenteredText, Layout, PreviewCompatibleImage, SEO, PillButton, Testimonial, FAQ } from "../components";

const ColorContainer = styled.div<{ backgroundColor?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
`;

const CenteredButton = ({ text }: { text: string }) => (
  <CenteredText margin="1rem 0">
    <PillButton onClick={() => navigate("/book/root-to-rise/")}>{text}</PillButton>
  </CenteredText>
);

export const RootToRiseTemplate = ({ faqs, frontmatter }) => {
  const testimonials = [...frontmatter.testimonials];
  const firstTestimonial = testimonials.shift();

  return (
    <section>
      <h1>Root To Rise: Transformational Coaching Program</h1>
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne",
          childImageSharp: frontmatter.featuredImage.childImageSharp,
        }}
        loading="eager"
        title="Sheila standing tall in her power at Garden Of The Gods"
      />
      <h2>Root into your power</h2>
      <h2>Rise into the most badass version of you</h2>
      <h2>You know you're made for more & I'm going to help you make it happen</h2>

      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <p>
          Are you a high-achiever that has hustled, built connections, and accomplished goals but you feel something is
          missing? Do you daydream about taking more risks and racing toward new heights ... but you haven't taken
          action? Are you wondering <strong>what's next?</strong> Welcome. You're in just the right place.
        </p>
        <br />
        <p>
          Through your journey thus far, there’s been a little something missing — that something that will help you
          pause, deeply connect, and set intentional goals toward your next adventure. That’s where I come in.
        </p>
        <br />
        Why? Because for you it’s easy to make lists, check off action items, and let your busy brain lead the way.
        That’s your jam! When it comes to slowing down and doing the inner work, you’d rather be productive and perfect
        each piece of yourself.
      </ColorContainer>
      <CenteredButton text="Tap To Book Your Free Call!" />
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne, shown writing in her office",
          childImageSharp: frontmatter.secondImage.childImageSharp,
        }}
        title="Sheila using the power of reflection to gather her thoughts"
      />
      <br />
      <p>
        I created the Root to Rise program because I know that you are ready for <i>real</i> change, which can only come
        with sure-fire stratey and dedicated effort. Just like in a yoga sequence, each session will build upon the
        previous — you will root down to establish a solid base of values & intentions, and rise up to make big waves in
        your career, relationships, and lifestyle.
      </p>
      <ColorContainer backgroundColor={Constants.Colors.lightestBlue}>
        <h2>Root to Rise will enable you to:</h2>
        <ul>
          <li>
            <b>B</b>e curious — discover all that makes you, you. Get clear on your values, goals, and potential
            obstacles so you can quickly start bringing awareness to change-making.
          </li>
          <li>
            <b>L</b>everage your unique strengths — your expertise & background are one of a kind! Explore how to
            leverage your strengths so you can confidently create easy flowing success.
          </li>
          <li>
            <b>O</b>vercome your stories — we'll address doubts, fears, and imposter syndrome head on! This is where the
            power of coaching is vital — it's time to break up with your old behaviors and beliefs.
          </li>
          <li>
            <b>S</b>implify your lifestyle — hone in on what is helping you to optimize your growth and what is holding
            you back. We work on creating a resilient mindset & cutting out the noise (perhaps in the form of
            self-judgement, bad relationships, annoying managers 💁‍♀️). You'll have more space and energy left to
            cultivate positive change.
          </li>
          <li>
            <b>S</b>tart living more courageously — no more waiting for the "perfect time" to shine your light, redesign
            your life, and tackle your goals. The time to level up is now!
          </li>
          <li>
            <b>O</b>pen your imagination to possibilities — can you imagine pathways emerging that you never considered?
            That's what will happen as you start to shift — and I'm here to help you see blind spots as well as killer
            opportunities.
          </li>
          <li>
            <b>M</b>aximize your momentum — once you've build the foundation, developed clarity around your future, and
            connected to your whole self — your potential is limitless. We will ensure you maximize your positive
            momentum & keep cranking.
          </li>
        </ul>
      </ColorContainer>
      <Testimonial testimonials={[firstTestimonial]} />
      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <h2>Here's What You Can Expect:</h2>
        <ul>
          <li>
            <b>Step One</b>: Apply for a call with me to enroll in the program 🍾.
          </li>
          <li>
            <b>Step Two</b>: Receive your welcome packet, including the intensive Self-Discovery Assessment.
          </li>
          <li>
            <b>Step Three</b>: We begin the work!
          </li>
        </ul>
        <CenteredButton text="Reserve your intro call now!" />
        <h2>What this 3 month program includes</h2>
        <ul>
          <li>Self-Discovery Deep Dive (with me)!</li>
          <li>
            8 <b>BLOSSOM</b> Coaching Sessions
          </li>
          <li>BLOSSOM Book, which includes follow-up homework, exercises and action items</li>
        </ul>
        <h3>Bonuses!</h3>
        <ul>
          <li>Email support throughout the 3 months</li>
          <li>One personalized recorded meditation</li>
        </ul>
      </ColorContainer>
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne, this time in the Alps",
          childImageSharp: frontmatter.thirdImage.childImageSharp,
        }}
        title="Sheila standing tall in her power, this time in the Alps"
      />
      <h2>Why Work With Me?</h2>
      <p>
        I am a Whole Person Certified Coach who has helped dozens of women to level up their lives and find “what’s
        next.” I blend my professional coach training, yoga background, killer focus to bring you into a space that you
        can feel grounded, safe, and totally resourced to step into the career, relationships, and life you deserve.
      </p>
      <p>
        This isn’t just a process I facilitate: this is personal, as I struggled for years feeling that life wasn’t
        exactly how I wanted it to be, but when it came to making a shift, I didn’t know where to start.
      </p>
      <p>
        It wasn’t until my mom passed that I set myself free. Inspired by her radiant energy, I started digging deeper
        into discovering who “Sheila” really was, what she truly wanted, and what I needed to do to make it happen. My
        world exploded with opportunity.
      </p>
      <p>
        My mission is to ensure that you don’t waste one more day wondering what’s next, how you’ll get there, or if you
        deserve it. Your time is now 🚀!
      </p>
      <h2>Here’s how much I believe in us …</h2>
      <p>
        I offer a <b>money-back guarantee!</b> If after our initial Self-Discovery Deep Dive, if you are totally{" "}
        <i>not</i> vibing with the energy, I’ll cancel your spot and return your investment.
      </p>
      <h2>Let’s go!</h2>
      <p>Ok — enough chit chat — jump into action & apply below!</p>
      <CenteredButton text="Apply now!" />
      <h2>Still feeling unsure?</h2>
      <p>
        Try-me-out in a <a href="/book/ground-to-grow/">Ground To Grow Accelerator</a>,{" "}
        <a href="/about/">learn more about my story</a> or check out the <a href="/working-together#faq">FAQs</a>!
      </p>
      <hr />
      <Testimonial testimonials={testimonials} />
      <hr />
      <FAQ faq={faqs} />
    </section>
  );
};

const RootToRise = ({
  data: {
    markdownRemark: { frontmatter },
    site: {
      siteMetadata: { faqs },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      image={frontmatter.featuredImage.publicURL}
      description={frontmatter.pageDescription}
      imageAlt={frontmatter.bannerImageHeadline}
      location={location}
      title={frontmatter.pageTitle}
    />
    <RootToRiseTemplate frontmatter={frontmatter} faqs={faqs} />
  </Layout>
);

export default RootToRise;

export const pageQuery = graphql`
  query RootToRisePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        secondImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thirdImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pageDescription
        pageTitle
        testimonials {
          title
          imageAlt
          imageSrc {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          text
        }
      }
    }
    site {
      siteMetadata {
        faqs {
          answer
          question
        }
      }
    }
  }
`;

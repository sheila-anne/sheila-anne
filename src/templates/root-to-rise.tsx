import { graphql, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";
import {
  CenteredText,
  Layout,
  PreviewCompatibleImage,
  SEO,
  SquareButton,
  Testimonial,
} from "../components";

const ColorContainer = styled.div<{ backgroundColor?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
`;

const CenteredButton = ({ text }: { text: string }) => (
  <CenteredText margin="1rem 0">
    <SquareButton onClick={() => navigate("/book/exploration/")}>
      {text}
    </SquareButton>
  </CenteredText>
);

export const RootToRiseTemplate = ({ frontmatter }) => {
  const testimonials = [...frontmatter.testimonials];
  const firstTestimonial = testimonials.shift();

  return (
    <section>
      <h1>Root To Rise</h1>
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne",
          childImageSharp: frontmatter.featuredImage.childImageSharp,
        }}
      />
      <h2>Get Grounded, Find Balance, Live Aligned</h2>
      <h3>
        Are you seeking a career change? Ready to feel less stuck in your job or
        routine? Looking to come home to yourself and your unique purpose?
        Welcome, you’re in just the right place.
      </h3>
      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <h4>Is This You?</h4>
        <p>
          Are you a driven, free-spirit that has an endless list of things to
          do, places to see, and goals to achieve? Do you question your purpose
          and connection to your work? Do you crave a life and career that you
          love? Cultivating a life that is fulfilling and balanced does not come
          naturally in a world with so many things to do and ways to fill time!
        </p>
        <br />
        <p>
          Let me take a guess — You’ve probably tried various routines,
          self-help books, and have attended conferences and networking events.
          Perhaps you’ve gotten involved in a fitness community or started a
          book club. Maybe you’ve considered changing career paths or taking a
          leap of faith but something has held you back. Despite these attempts,
          something feels incomplete. You think to yourself{" "}
          <i>there must be something more</i> ...
        </p>
        <br />
        Why? Because for you it’s easy to make lists, check off action items,
        and let your busy brain lead the way. That’s your jam! When it comes to
        slowing down and doing the inner work, you’d rather be productive and
        perfect each piece of yourself. Through your journey thus far, there’s
        been a little something missing — that something that will help you
        pause, deeply connect, and set intentional goals toward your dream
        future. That’s where I come in.
      </ColorContainer>
      <CenteredButton text="Tap To Book Your Free Call!" />
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne, shown writing in her office",
          childImageSharp: frontmatter.secondImage.childImageSharp,
        }}
      />
      <br />
      <p>
        I created the Root to Rise program because I know that free spirits like
        you are ready for <i>sustainable</i> change, which can only come with
        dedicated time and effort.
      </p>
      <ColorContainer backgroundColor={Constants.Colors.lightestBlue}>
        <h2>Root to Rise will enable you to:</h2>
        <ul>
          <li>
            <b>Explore</b> all that makes you, you — Through journaling,
            visualizations, and assessments you’ll gain deep self awareness and
            purpose.
          </li>
          <li>
            <b>Discover</b> your core values and make all future decisions from
            a place of intention — Let’s take the guessing out of decision
            making & create easy-flowing success.
          </li>
          <li>
            <b>Simplify</b> your life & infuse joy — We’ll talk about mindful
            rituals, minimalism, prioritization, and celebrating things that
            matter. Simplicity is a core principle of my coaching because I
            believe your life can be simple and full!
          </li>
          <li>
            <b>Cultivate</b> a mind-body connection that will help you
            prioritize your well being and make lasting change. Set aside your
            expectations for needing how-to guides and expensive wellness
            trends, we’re taking things a little deeper here! Here you’ll face
            your inner monologue and self-sabotaging stories. We’ll talk about
            how to develop a fresh mindset that is more aligned with the
            confidence and fulfillment you hope to create.
          </li>
          <li>
            <b>Create</b> an inspiring future — Once you’ve built the
            foundation, developed clarity around your future, and connected to
            your whole self — your potential is limitless. You establish goals
            and action steps to get you there and have me as your accountability
            partner & cheerleader as you root and rise.
          </li>
        </ul>
      </ColorContainer>
      <Testimonial testimonials={[firstTestimonial]} />
      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <h2>Here's What You Can Expect:</h2>
        <p>
          Once you’re officially enrolled in the program🍾, I’ll send you a
          discovery form, so you can start deepening your self awareness, and I
          can start learning alllll the good things that make you, you!
          Moreover, this form will help us create a baseline, where we will
          begin to root down and rise up throughout the three months. We will
          meet three times per month, for a total of nine sessions. In each
          session we will work together to break down challenges, explore
          opportunities, and come up with an action plan to get you your desired
          results. Think of each session as your safe space to breathe, tap in,
          and bloom.
        </p>
        <br />
        <p>Are you ready to Root & Rise?</p>
        <CenteredButton text="Reserve your intro call now!" />
        <h2>What This Program Includes</h2>
        <ul>
          <li>90 Minute Ground & Grow Session (deep dive)</li>
          <li>8 Coaching sessions (60 min)</li>
          <li>Follow up homework, exercises & action items</li>
        </ul>
        <h3>Bonuses!</h3>
        <ul>
          <li>Email support throughout 3 months</li>
          <li>One virtual 1:1 yoga session personalized for you</li>
        </ul>
      </ColorContainer>
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Root To Rise with Sheila Anne, this time in the Alps",
          childImageSharp: frontmatter.thirdImage.childImageSharp,
        }}
      />
      <h2>Why Work With Me?</h2>
      <p>
        Not only am I a Certified Professional Coach, I am also a recovering
        overachiever and life-long free spirit. I struggled for years feeling
        overwhelmed by everything I wanted to accomplish, learn, and experience.
        I wanted to do it all, while appearing totally in control and grounded.
        This led me toward perfectionist tendencies, an obsession with wellness,
        and emotional numbing. It wasn’t until my mom passed that I really set
        myself free. Inspired by her radiant energy, I started digging deeper
        into discovering who “Sheila” really was, what she truly wanted, and
        what I needed to do to make it happen. The secret - very little of it
        was external. It wasn’t a promotion, validation, or a new fitness
        routine. I left my life in Boston, traveled for 5 months with my
        partner, and came home to myself in a way I never imagined possible. Now
        I’ve created a path to help other free-spirited achievers to explore,
        discover, and transform into the most alive version of themselves 💙. I
        blend my yoga background and killer focus to bring you into a space that
        you can feel grounded, safe, and totally resourced to carve your next
        path.
      </p>
      <h2>Here’s how much I believe in us …</h2>
      <p>
        I offer a money-back guarantee! If after our initial 90 minute session
        you are totally not vibing with the energy, I’ll cancel your spot and
        return your investment.
      </p>
      <h2>Let’s go!</h2>
      <p>
        Ok — enough chit chat — Let’s get started with your first phone call and
        see if Root to Rise is right for you!
      </p>
      <CenteredButton text="Book A Call!" />
      <h2>Still feeling unsure?</h2>
      <p>
        Try-me-out in a{" "}
        <a href="/book/ground-to-grow/">Ground To Grow Accelerator</a>,{" "}
        <a href="/about/">learn more about my story here</a> or check out the{" "}
        <a href="/working-together#faq">FAQs</a>!
      </p>
      <h2>What People Are Saying About Root-To-Rise:</h2>
      <Testimonial testimonials={testimonials} />
    </section>
  );
};

const RootToRise = ({
  data: {
    markdownRemark: { frontmatter },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      image={frontmatter.featuredImage.childImageSharp.original.src}
      description={frontmatter.pageDescription}
      imageAlt={frontmatter.bannerImageHeadline}
      location={location}
      title={frontmatter.pageTitle}
    />
    <RootToRiseTemplate frontmatter={frontmatter} />
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
            original {
              src
            }
          }
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
  }
`;

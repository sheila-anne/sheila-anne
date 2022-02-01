import { graphql, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";
import {
  CenteredText,
  ContentBreak,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  Layout,
  PreviewCompatibleImage,
  SEO,
  PillButton,
  Testimonial,
  FAQ,
} from "../components";

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

const SmallSecondHeader = styled.h2`
  font-size: 1.5rem;
`;

export const RootToRiseTemplate = ({ faqs, frontmatter }) => {
  const testimonials = [...frontmatter.testimonials];
  const firstTestimonial = testimonials.shift();

  return (
    <section>
      <h1>Root To Rise: Transformational Coaching Program</h1>
      <FlexContainer justifyContent="center" margin="1rem 0">
        <HalfColumn>
          <FlexColSplitImage>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "Root To Rise with Sheila Anne",
                childImageSharp: frontmatter.featuredImage.childImageSharp,
              }}
              loading="eager"
              title="Sheila's signature Root To Rise transformational program has helped strong, powerful women create deep long-lasting change"
            />
          </FlexColSplitImage>
        </HalfColumn>
        <HalfColumn>
          <SmallSecondHeader>Root into your power</SmallSecondHeader>
          <SmallSecondHeader>Rise into the most badass version of you</SmallSecondHeader>
          <SmallSecondHeader>You know you're made for more & I'm going to help you make it happen</SmallSecondHeader>
        </HalfColumn>
      </FlexContainer>
      <CenteredButton text="Book your free intro call with Sheila" />

      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <p>
          Are you a high-achiever that consistently hustles, builds connections, and accomplishes goals but you still
          feel like something is missing? Do you daydream about taking bigger risks, racing toward new heights, while
          feeling totally in flow and balanced?
        </p>
        <br />
        <p>
          Are you wondering: <i>“Is that even possible for me?”</i>
        </p>
        <br />
        <p>
          <b>Welcome. You're in just the right place.</b>
        </p>
        <br />
        <p>
          Through your journey thus far, there’s been a little something missing — that something that will help you
          pause, deeply connect, and set intentional goals toward your next adventure. That’s where I come in.
        </p>
        <br />
        <p>
          Why? Because for you it’s easy to make lists, check off action items, and let your busy brain lead the way.
          That’s your jam! When it comes to slowing down and doing the inner work, you’d rather be productive and
          perfect each piece of yourself.
        </p>
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
        with sure-fire strategy and dedicated effort. Just like in a yoga sequence, each session will build upon the
        previous — you will root down to establish a solid base of values & intentions, and rise up to make big waves in
        your career, relationships, and lifestyle.
      </p>
      <ColorContainer backgroundColor={Constants.Colors.lightestBlue}>
        <h2>Root to Rise will enable you to:</h2>
        <ul>
          <li>
            <b>Root into your power of being present</b>. You may take your first deep breath in a while during our work
            together. We’ll dive into what helps to stay rooted and mindful amidst the obligations and activities of
            your fast-paced life.
          </li>
          <li>
            <b>Step into the driver’s seat of your life</b>. Clarify your values, goals, and obstacles so you can make
            big, intentional changes.
          </li>
          <li>
            <b>Holistically care for your well-being</b>. We’re talkin’ less stress, more flow. Nourish your inner fire,
            introduce healthy habits, and let go of things that are inhibiting your growth.
          </li>
          <li>
            <b>Realign with what makes you, you</b>. Feel more yourself and show up more authentically, courageously,
            and radiantly in your relationships, career, and daily life.
          </li>
          <li>
            <b>Level up your mindset</b>. Are you desiring financial wealth, a new home, more joy, deeper self trust?
            Nothing is off limits when we work together to cultivate an abundance mindset.
          </li>
          <li>
            <b>Take courageous action</b>. Launch a business, negotiate a raise, strategize next steps, go on dates,
            write a book - all of this is possible for you.
          </li>
          <li>
            <b>Rise into the most badass version of you</b>. Bringing your A game to each adventure you tackle... but in
            a cool and confident way.
          </li>
        </ul>
      </ColorContainer>
      <Testimonial testimonials={[firstTestimonial]} />
      <ColorContainer backgroundColor={Constants.Colors.theGroveGreenGray}>
        <h2>What To Expect:</h2>
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
        <p>
          The Root to Rise Program will give you the tools and support you need to radiate confidence, align with an
          inspiring lifestyle and career, eliminate daily stress patterns, and take courageous action toward the future
          you deserve.
        </p>
        <p>
          When you enroll in the program, you will gain access to on-demand support from me and the BLOSSOM resource
          pack, which is chock-full of practices and journaling prompts.
        </p>
        <p>
          The benefit of working with me 1:1 is that YOU get to be in the driver’s seat, bringing to the table what
          feels most vital to explore and strategize. Be it taming the inner critic, designing your killer career plan,
          improving your money mindset, or spending half the session on a guided meditation -- BLOSSOM sessions offer
          the ultimate time to learn and grow in the way you need most!
        </p>
        <h2>What's Included</h2>
        <ul>
          <li>
            <b>A Certified Coach and unwavering supporter</b> who is not afraid to push you outside of your comfort
            zone, is passionate about your growth, and will cheer for you every single step of the way. That’s me 👋
          </li>
          <li>
            <b>Self-Discovery Assessment + Deep Dive</b>: When is the last time you took 90 minutes to take inventory of
            your life and set specific goals for yourself in areas like career, wellbeing, and enjoyment? You may not
            have done this before but guess what - you deserve it! In your first BLOSSOM session we take a dive into
            your Self Discovery Assessment. This session alone will provide you with “ah-ha”s and action steps to start
            moving the needle in your life.
          </li>
          <li>
            <b>3 BLOSSOM Sessions Each Month</b>: To support you in stepping purposefully into an aligned and inspiring
            future, we’ll meet three times each month and make sure you’re always pushing yourself out of your comfort
            zone and into the zone of courageous change and aligned living.
          </li>
          <li>
            <b>BLOSSOM Resources</b>: Strategic journaling prompts to unearth your purpose, behaviors, and desired life
            path.
          </li>
          <li>
            <b>Text, Voice & Email Support</b>: Unlimited access to me via email and texting, for support on action
            items, reflections, and strategy between sessions.
          </li>
          <li>
            <b>An invitation</b>: to continue on with me following the initial four or six month commitment.
          </li>
        </ul>
        <ContentBreak />
        <p>
          Note: I treat my clients like absolute queens 👑 and to deliver this high-quality experience, I cap the number
          of 1:1 clients I take on. You can rest assured that during the time we work together, I will be 100% there for
          all your questions and celebration moments!
        </p>
      </ColorContainer>
      <PreviewCompatibleImage
        imageInfo={{
          alt: "Sheila hard at work!",
          childImageSharp: frontmatter.thirdImage.childImageSharp,
        }}
        title="Sheila hard at work!"
      />
      <h2>Why Work With Me?</h2>
      <p>
        I am a Whole Person Certified & ICF Associate Certified Coach who has helped dozens of ambitious women to create
        more success, flow, and change in their lives. I blend my professional coach training, yoga background, killer
        focus to bring you into a space that you can feel grounded, safe, and totally resourced to step into the career,
        relationships, and life you deserve.
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
        Try-me-out in a <a href="/book/exploration-call/">Exploration Call</a>,{" "}
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

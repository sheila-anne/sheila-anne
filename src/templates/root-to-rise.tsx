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
      <h1>Private Coaching with Sheila Anne</h1>
      <FlexContainer justifyContent="center" margin="1rem 0">
        <HalfColumn>
          <FlexColSplitImage>
            <PreviewCompatibleImage
              imageAlt="Private Coaching with Sheila Anne"
              imageInfo={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              loading="eager"
              title="Sheila's private coaching program will help you awaken your joy, self-worth, and bold aspirations"
            />
          </FlexColSplitImage>
        </HalfColumn>
        <HalfColumn>
          <SmallSecondHeader>Take a deep breath</SmallSecondHeader>
          <SmallSecondHeader>You’re ready for your next uplevel</SmallSecondHeader>
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
        imageAlt="Sheila Anne, shown writing in her office"
        imageInfo={frontmatter.secondImage.childImageSharp.gatsbyImageData}
        title="Sheila using the power of reflection to gather her thoughts"
      />
      <br />
      <p>
        I created a private coaching program because I know that you are ready for <i>real</i> change, which can only
        come with sure-fire strategy and dedicated effort. Just like in a yoga sequence, each session will build upon
        the previous — you will root down to establish a solid base of values & intentions, and rise up to make big
        waves in your career, relationships, and lifestyle.
      </p>
      <ColorContainer backgroundColor={Constants.Colors.lightestBlue}>
        <h2>Private Coaching with Sheila will enable you to:</h2>
        <ul>
          <li>
            <b>Reclaim a sense of presence</b>. You may take your first deep breath in a while during our work
            together. We’ll dive into what helps to stay rooted and mindful amidst the obligations and activities of
            your fast-paced life.
          </li>
          <li>
            <b>Intentionally Illuminate Your Path </b>. Clarify your values, goals, and obstacles so you can make
            big, aligned changes.
          </li>
          <li>
            <b>Holistically care for your well-being</b>. We’re talkin’ less stress, more flow. Nourish your inner fire,
            introduce healthy rituals, and let go of beliefs and habits that are inhibiting your growth.
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
            <b>Rise into the best version of you</b>. Walk forward with a clear sense of direction, vibrant energy, and the tools to live a life that truly reflects your aspirations. 
      
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
          Private coaching will give you the tools and support you need to radiate confidence, align with an inspiring
          lifestyle and career, eliminate daily stress patterns, and take courageous action toward the future you
          deserve.
        </p>
        <p>
          When you enroll in the program, you will gain access to on-demand support from me and a coaching workbook, which is chock-full of practices and journaling prompts.
        </p>
        <p>
          The benefit of working with me 1:1 is that you get to be in the driver’s seat, bringing to the table what
          feels most vital to explore and strategize. Be it taming the inner critic, designing your killer career plan,
          improving your mindset, or spending half the session on a guided meditation -- private coaching sessions offer
          the ultimate time to learn and grow in the way you need most!
        </p>
        <h2>What's Included</h2>
        <ul>
          <li>
            <b>A Professional Coach and unwavering supporter</b> who is not afraid to push you outside of your comfort
            zone, is passionate about your growth, and will cheer for you every single step of the way. That’s me 👋
          </li>
          <li>
            <b>Self-Discovery Assessment + Deep Dive</b>: When is the last time you took 90 minutes to take inventory of
            your life and set specific goals for yourself in areas like career, wellbeing, and enjoyment? You may not
            have done this before but guess what - you deserve it! In your first session we take a dive into your Self
            Discovery Assessment. This session alone will provide you with “ah-ha”s and action steps to start moving the
            needle in your life.
          </li>
          <li>
            <b>1:1 Coaching Sessions</b>: We'll personalize a meeting cadence (typically weekly or bi-weekly) that will
            work best for your unique needs and vision. Each session will look different and you get to decide what
            challenge we are workshopping or opportunity you want to create. I will consistently support you in stepping
            purposefully into an aligned and inspiring future.
          </li>
          <li>
            <b>Coaching Workbook</b>: Strategic journaling prompts to unearth your purpose, behaviors, and desired life
            path.
          </li>
          <li>
            <b>Text, Voice & Email Support</b>: Unlimited access to me via email and texting, for support on action
            items, reflections, and strategy between sessions.
          </li>
          <li>
            <b>Welcome Gift</b>: The details are a surprise. Why? Because you deserve all that is good in this world,
            love!
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
        imageAlt="Sheila sitting on a stool"
        imageInfo={frontmatter.thirdImage.childImageSharp.gatsbyImageData}
        title="Sheila is an ICF Professional Certified Coach, ready to help"
      />
      <h2>Why Work With Me?</h2>
      <p>
        I am an ICF Professional Certified Coach, Whole Person Certified Coach, Trauma-Informed Coach, Reiki Practioner, and Yoga
        Instructor who has helped dozens of ambitious women to create more success, flow, and change in their lives. I
        blend my professional coach training, yoga background, embodiment expertise, and intuition to help you feel
        grounded, safe, and totally resourced to step into the career, relationships, and life you deserve.
      </p>
      <p>
        This isn’t just a process I facilitate: this is personal, as I struggled for years feeling that life wasn’t
        exactly how I wanted it to be, but when it came to making a shift, I didn’t know where to start.
      </p>
      <p>
        It wasn’t until my mom passed that I set myself free. Inspired by her magnetic energy, I started digging deeper
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
        <i>not</i> vibing with the energy, I’ll cancel your spot and return your monthly investment.
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
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
          publicURL
        }
        secondImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        thirdImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        pageDescription
        pageTitle
        testimonials {
          title
          imageAlt
          imageSrc {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
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

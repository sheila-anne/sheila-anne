import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";
import {
  LinkButton,
  BreakOutImage,
  CenteredText,
  ContentBreak,
  FAQ,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  Layout,
  PreviewCompatibleImage,
  SEO,
  Timeline,
} from "../components";

const ColorContainer = styled.div.withConfig<{ backgroundColor?: string; marginBottom?: string; padding?: string }>({
  shouldForwardProp: prop => prop !== "backgroundColor" && prop !== "marginBottom" && prop !== "padding",
})`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-top: 1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "1rem")};
  padding: ${({ padding }) => (padding ? padding : "1rem 2rem")};
`;

const RoundedImage = styled(PreviewCompatibleImage)`
  border-radius: 1rem;
`;

const SpacedOutText = styled.div<{ padding?: string }>`
  margin: 1rem 0;
  ${({ padding }) => !!padding && `padding: ${padding}`}
`;

const SmallerHeadline = styled.h2`
  margin-top: 1rem;
`;

const StyledQuote = styled.blockquote`
  padding: 1rem;
`;

const faqs = [
  {
    question: "Will I get access to all the material after the program?",
    answer:
      "Unlike most programs out there, you have lifetime access to all material. You'll be able to download all materials and calls right after they're posted",
  },
  {
    question: "How much time will I need to dedicate for this?",
    answer:
      "We'll have one live 90 minute session together every other week (plus a few pop-up opportunities). You'll also be motivated to take time daily to practice nourishing rituals and journaling prompts. The amount of time you decide to take is up to you!",
  },
  {
    question: "Will I get personal coaching from you?",
    answer:
      "Every group session I will offer an opportunity for hot seat coaching and community building. If you want to maximize your growth and this opportunity, I highly recommend Nourish +. Nourish + not only includes one private mindset session each month but also private messaging with me throughout the duration of the program. You'll have me in your back pocket at all times!",
  },
  {
    question: "What if I miss a session?",
    answer:
      "You won't want to and we also understand that life happens! We record every single call, so you'll be able to catch the replay. The on-demand community (off social media) will help hold you accountable",
  },
  {
    question: "When do we meet?",
    answer: "Meetings will take place on Mondays, and the exact time will be set by group, depending on schedules",
  },
];

const NourishApplyButton = ({ margin = "2rem 0" }) => (
  <CenteredText margin={margin}>
    <LinkButton backgroundColor={Constants.Colors.redRocksRed} to="/nourish-form">
      Sign up for the waitlist!
    </LinkButton>
  </CenteredText>
);

export const NourishTemplate = ({ frontmatter }) => {
  return (
    <section>
      <BreakOutImage
        imageInfo={frontmatter.bannerImage.childImageSharp.gatsbyImageData}
        title="Nourish whole person coaching program"
      />
      <h1 style={{ display: "none" }}>Nourish: A Whole-Person Coaching Program</h1>
      <CenteredText fontSize="1.5rem" fontWeight="800" margin="2rem 0">
        Nourish is currently in session! Sign up for the waitlist to be the first to know about next round details.
      </CenteredText>
      <NourishApplyButton margin="2rem 0" />
      <PreviewCompatibleImage
        imageInfo={frontmatter.subBanner.childImageSharp.gatsbyImageData}
        title="Nourish montage image"
      />
      <ColorContainer backgroundColor={Constants.Colors.nourishGray} padding="0 0 0 2rem">
        <StyledQuote>
          “I have tried out different therapists, read self-help books, signed up for online modules, in search of
          something healing that was really worth investing time, energy and money into. Up until Nourish, most of these
          endeavors fell somewhere between waste of time and pretty good. Nourish on the other hand surpassed all of my
          expectations and added so much value in the dedicated 4 month timeframe.” - Charlotte
        </StyledQuote>
      </ColorContainer>
      <NourishApplyButton />
      <div>
        <h2>Are you ...</h2>
        <SpacedOutText>
          <strong>So over</strong> battling self doubt and your inner critic
        </SpacedOutText>
        <SpacedOutText>
          <strong>Tired</strong> of always hustling and never feeling like you'll get to where you want to go
        </SpacedOutText>
        <SpacedOutText>
          <strong>Craving</strong> unwavering confidence and decisive action
        </SpacedOutText>
        <SpacedOutText>
          <strong>Seeking</strong> for the self connection and self love you know you're capable of
        </SpacedOutText>
        <SpacedOutText>
          <strong>Excited</strong> to find what's <i>next</i> in your relationships, lifestyle, and career path
        </SpacedOutText>
        <SpacedOutText>
          <strong>Ready</strong> to stop trying to do it all on your own, and find a supportive and inspiring community
        </SpacedOutText>
      </div>
      <div>
        <h2>What if ...</h2>
        <SpacedOutText>
          You were able to <strong>change</strong> the behaviors blocking you from playing bigger and bolder in your
          life
        </SpacedOutText>
        <SpacedOutText>
          There was a <strong>community</strong> waiting to support you, grow with you, and inspire you to be 100%
          yourself
        </SpacedOutText>
        <SpacedOutText>
          You could feel <strong>present</strong>, in <strong>flow</strong>, and an inner <strong>glow</strong> in your
          daily life
        </SpacedOutText>
        <SpacedOutText>
          You were <strong>confident</strong> in yourself, because you understood <strong>exactly who you were</strong>{" "}
          and how to nourish your <strong>body, mind, and soul</strong>.
        </SpacedOutText>
      </div>
      <div>
        <h2>Welcome home to you. Welcome home to Nourish</h2>
        <PreviewCompatibleImage
          imageInfo={frontmatter.welcomeToNourish.childImageSharp.gatsbyImageData}
          title="Welcome home to Nourish"
        />
      </div>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown}>
          <div>
            Nourish is a <strong>14-week group coaching program</strong> that will give you the key building blocks,
            supportive community, and unshakable confidence you need to curate the life and career that lights you up.
            You can expect transformational coaching, immersive training, community connection, and
            get-out-of-your-comfort-zone experiences. This is unlike anything you've done before. This is what your
            next-level self has been waiting for.
          </div>
        </CenteredText>
      </ColorContainer>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown}>
          <div>
            The intentionally intimate community will foster your growth - be it personal or professional - and hold you
            accountable to playing big in your life. What do you want to achieve by the end of 2023? What would it be
            like to finally prioritize yourself and actually make it happen, and make lifelong friendships along the
            way?
          </div>
        </CenteredText>
      </ColorContainer>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown}>
          <div>
            The tools and learnings you acquire within the program are lifelong (just ask the alumni who are still
            referring back to their Nourish notebook 2 years later!). We welcome you, whether you are chasing a new
            career dream, craving self confidence, or looking for “what's next” after burnout and big life changes.
          </div>
        </CenteredText>
      </ColorContainer>
      <NourishApplyButton />
      <div>
        <h2>The Nourish program consists of three pillars: Body, Mind, Soul.</h2>
        <Timeline
          timelines={[
            { text: "Launch Party 🍾" },
            { text: "Body 🌼", isBold: true },
            { text: "Mind 🌼", isBold: true },
            { text: "Soul 🌼", isBold: true },
            { text: "Closing Celebration 🎉" },
          ]}
        />
        <SpacedOutText>
          Training & coaching calls will help you to hone-in, learn, practice, and transform. Between our calls you will
          be working through the Nourish Notebook, integrating learnings, and connecting with the Nourish community via
          our messaging platform. You'll constantly be supported, held, and cheered on.
        </SpacedOutText>
        <SpacedOutText>
          If you are an ambitious, adventurous woman who wants to be her own unique powerhouse, this program is for you!
        </SpacedOutText>
        <StyledQuote>
          "Nourish transformed my life, in the way I speak, react and manifest. Coming into this program I was always
          rushing myself to be the best and my internal voice was chaotic. I am now more still and savoring moments. I'm
          creating clear boundaries, saying yes to only things that light me up, I'm decisive, more in control and
          because I am now clear the world around me is clearer too. This program helped me develop a true sense of self
          worth that I now get to shine as a light into the world around me." - Jordan
        </StyledQuote>
        <ColorContainer backgroundColor={Constants.Colors.nourishNeutral}>
          <CenteredText>
            <SmallerHeadline>The Nourish Experience 🌼</SmallerHeadline>
            <h3>2 Virtual Retreats</h3>
            <SpacedOutText>
              Including a kick-off party to build meaningful relationships, and a closing celebration to commemorate the
              incredible journey.{" "}
            </SpacedOutText>
            <h3>Intentionally Paced Calls</h3>
            <SpacedOutText>
              90 minute sessions every other week for intensive training and personalized support. We meet bi-weekly
              with an integration / "off" week before moving to the next module. Expect a blend of learning, coaching,
              and community conversation. Each call will be recorded so you can revisit it whenever you choose.{" "}
              <strong>Nourish +</strong> women will meet with me once per month during an integration week.
            </SpacedOutText>
            <h3>Nourish Notebook</h3>
            <SpacedOutText>
              Meet the digital notebook that you'll be referring to for years to come - just ask the Nourish alumni! The
              Nourish Notebook is chock-full of resources, journaling prompts, and exercises that will support your
              Body, Mind, and Soul. Delivered to you in parts along the Nourish journey, so you know exactly what to
              focus on to be successful.
            </SpacedOutText>
            <h3>Community</h3>
            <SpacedOutText>
              You will have constant access to your community (off social media) so that you can deepen your knowledge,
              ask questions, and share stories. Sheila will be in this community as well, available to answer questions
              and cheer you on always.
            </SpacedOutText>
            <h3>Monthly Meditations</h3>
            <SpacedOutText>
              A downloadable meditation related to Body, Mind, and Soul, that you can listen to wherever and whenever.
            </SpacedOutText>
            <h3>Lifetime Access!</h3>
            <SpacedOutText>
              Like materials you can download, print, and replay? Me too! That's why I will be giving you{" "}
              <strong>lifetime</strong> access to the trainings, notebook, and call recordings. No anxiety about
              disappearing resources here!
            </SpacedOutText>
          </CenteredText>
        </ColorContainer>
        <FlexContainer
          backgroundColor={Constants.Colors.nourishGray}
          justifyContent="center"
          margin="1rem 0"
          padding="1rem 0"
        >
          <HalfColumn>
            <FlexColSplitImage>
              <RoundedImage
                imageAlt="Sheila holding her yoga mat"
                imageInfo={frontmatter.sideBySide.childImageSharp.gatsbyImageData}
                title="Nourish details"
              />
            </FlexColSplitImage>
          </HalfColumn>
          <HalfColumn>
            <h3>Hi. I'm Sheila.</h3>
            <SpacedOutText>
              I know that you want to feel present, alive, and fulfilled each day, and that's what I wanted too! I spent
              years of my life focused on checking boxes, so sucked into the hyper achiever grind that I lost the magic
              of connecting to myself and my purpose.
            </SpacedOutText>
          </HalfColumn>
          <FlexContainer justifyContent="center" backgroundColor={Constants.Colors.nourishGray}>
            <SpacedOutText padding="1rem">
              Through the tragic loss of my mother, pivoting my career (again and again), leaving the corporate world,
              falling in love, and uprooting my life countless times, I've learned that anything is possible when you
              are connected to the pillars of body, mind, and soul. I created Nourish to support women like you to
              integrate tools for life so that, no matter what season you're in, you can always come home to yourself
              and cultivate a deeply meaningful life. Why a group coaching experience? Growing individually, within
              community, is one of the best things we can do for ourselves. Imagine the positive impact of being seen,
              heard, and celebrated by other ambitious women every step of your journey. I am a professionally certified
              and trauma-informed coach with over 500 hours of coaching women to step into their desired lives. I am
              also a yoga instructor and have expertise in embodiment, nervous system regulation, and mindfulness. This
              program is a work of my soul and I am beyond grateful to be able to share it with you.
            </SpacedOutText>
          </FlexContainer>
        </FlexContainer>
      </div>
      <div>
        <h2>Nourish is for you if ...</h2>
        <ul>
          <li>
            You are the <i>doing, planning, career-crushing</i> friend that always tries to fill her life to the brim
          </li>
          <li>You have big dreams but often get stuck in the “how” and “what if” stage</li>
          <li>You appear confident but get stuck in loops of self doubt</li>
          <li>You're a girlboss turned burnout girl</li>
          <li>
            You are certain that you have unique <strong>light</strong> to share with the world
          </li>
          <li>
            You are not afraid to get messy, open up to community, for the sake of transformational growth and deep
            connection
          </li>
          <li>You are excited by the idea of living with more flow and peace in life</li>
          <li>You are in a season of healing, seeking, rediscovering, growing through grief, or craving purpose</li>
          <li>
            You will be committed to showing up, practicing learnings, working through the notebook, and supporting
            other women.
          </li>
        </ul>
      </div>
      <NourishApplyButton />
      <ColorContainer backgroundColor={Constants.Colors.nourishNeutral}>
        {/* SmallerHeadline is an h2.. */}
        <SmallerHeadline>A deeper look at what you'll learn:</SmallerHeadline>
        <h3>Body</h3>
        <div>
          When you can listen (really listen) to your body, you're able to feel more at home with yourself versus
          reacting to the world around you. No more searching outside of yourself when you need to make a decision. No
          more rollercoaster ride of how you treat your body. This foundational step is vital in the success of
          absolutely everything else in your life. Speak your bodys language
        </div>
        <div>
          <strong>Module 1: Pause</strong>
          <ul>
            <li>
              Get to know the subtle cues of your body that have a big impact on your confidence and how you show up in
              the world.{" "}
            </li>
            <li>
              Learn practices that will promote well-being and vibrance - you know that glow that makes you feel like{" "}
              <i>“dang I feel good!”</i>
            </li>
          </ul>
        </div>
        <div>
          <strong>Module 2: Play</strong>
          <ul>
            <li>
              Explore how movement and body position can transform your physical, mental, emotional, and soulful self
            </li>
            <li>
              Reclaim your wild woman self - that part of you that has been pushed way down after years of being
              squished into an easy to understand job title, predictable habits, and identity.
            </li>
          </ul>
        </div>
        <h3>Mind</h3>
        <div>
          Our minds help us do incredible things like solving problems, dreamstorming our futures, remembering how to
          make others feel special, etc. However, our minds can also lead us down familiar paths - mental traps that
          tell us we're not good enough and need to play smaller in our lives and careers. We all have the ability to
          empower ourselves through mindset work, I'll show you exactly how to do it!
        </div>
        <div>
          <strong>Module 3: Befriend the voice that hurts</strong>
          <ul>
            <li>Develop a clear sense of who the inner critic is, what sets her off, and how to befriend her</li>
            <li>
              Rewrite the stories that run on loop for you so you can experience more joy and fulfillment every day.
            </li>
          </ul>
        </div>
        <div>
          <strong>Module 4: Amplify the voice that heals</strong>
          <ul>
            <li>Leverage the power of a positive mindset and become the confident leader you're meant to be! </li>
            <li>
              Create a unique-to-you resource to use whenever you need extra boost - be it before leading an event, a
              tough decision in your life, effective communication with your partner, etc.{" "}
            </li>
          </ul>
        </div>
        <h3>Soul</h3>
        <div>
          I know you want to feel more anchored to your sense of self and your purpose. When we get lost or worry about
          “what's next,” it's an indication that we are detached from our unique light and how to shine it out into the
          world. I'm going to help you reignite your zest for life and step into the most magnetic version of you.{" "}
        </div>
        <div>
          <strong>Module 5: Connect to your purpose</strong>
          <ul>
            <li>
              Clarify your core values that will make you more aligned, intentional, and impactful in your work and
              personal life.
            </li>
            <li>
              Create a mission statement, so you can step into action and positively impact communities around you along
              the way.
            </li>
          </ul>
        </div>
        <div>
          <strong>Module 6: Become your magnetic self </strong>
          <ul>
            <li>
              Play with energy and neural manifestation, so you can create big results in your life, career, and
              relationships!
            </li>
            <li>
              Learn about the science behind intention-setting and manifestation and integrate daily magnetic practices.
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2>What's new in 2023? Three BIG Bonuses </h2>
            <ul>
              <li>Free admission to a live community class with a registered dietitian.</li>
              <li>Free pass to Wild Woman community movement class with Sheila Anne </li>
              <li>On-demand values assessment workshop</li>
            </ul>
          </div>
        </div>
      </ColorContainer>
      <div>
        <CenteredText>
          <h2>Program Options</h2>
          <SpacedOutText>Early Enrollment investment starting at $1,300 🎉</SpacedOutText>
          <h3>Nourish </h3>
          <SpacedOutText>Payments plans available, from 3 months to 12 months</SpacedOutText>
          <SpacedOutText>
            All trainings, retreats, curriculum, community, meditations, notebook, and support:
          </SpacedOutText>
          <h3>Nourish+</h3>
          <SpacedOutText>
            <i>For the woman ready to be intimately supported and expedite her transformational growth.</i>
            <SpacedOutText>Everything included in Nourish</SpacedOutText>
            <SpacedOutText>One 1:1 call/ month with Sheila </SpacedOutText>
            <SpacedOutText>Private messaging with Sheila </SpacedOutText>
          </SpacedOutText>
          <NourishApplyButton />
        </CenteredText>
      </div>
      <PreviewCompatibleImage
        imageInfo={frontmatter.coachingImage.childImageSharp.gatsbyImageData}
        title="Sheila coaching in person"
      />
      <ColorContainer backgroundColor={Constants.Colors.nourishGray} padding="0 0 0 2rem">
        <h2>What people are saying about the Nourish experience</h2>
        <StyledQuote>
          “Nourish is a life changing program that provides a safe space for a supportive community filled with mutual
          growth, experiential learning and emotional connection. While the group functions well as a whole, the
          individual progress and growth is undeniable. You are guided in one collective direction while having a slew
          of personalized options for building your journey for what suits you at that moment. I sought out Nourish as
          an intimate way to unite the compartmentalized parts of my being and I am leaving it with a new community, the
          tools to infinitely build on my beautiful base self and a sense of union with myself and my once divided
          life.” - Emma
        </StyledQuote>
        <StyledQuote>
          “This program was unlike anything I've ever done before. When I first started my stress and anxiety were at an
          all time high. Not only was the program mentally restorative for me it was incredibly transformative. I
          cultivated some long lasting friendships, dug deeper into myself than I ever have, and took chances I wouldn't
          have been strong enough to without the support of Sheila and the women in the Nourish community.” - Jenna
        </StyledQuote>
        <StyledQuote>
          “Nourish helped me claim back my power to make aligned decisions for a more fulfilling life. Coming into the
          program, I was struggling with anxiety and felt like an empty vessel. I now feel like I have new tools to
          magnetize what is truly meant for me--guilt free.” - Elaina
        </StyledQuote>
        <StyledQuote>
          “I joined Nourish because I wanted to make lasting changes within myself. When I started my Nourish journey, I
          was living my life at an unsustainable pace marked by anxious thoughts, indecision, and shallow breaths.
          Working through this program with Sheila and the amazing first cohort of Nourish women helped me to transform
          in ways I could not have imagined four months ago. A few examples of the impact of Nourish: Slower internal
          pace; Increased confidence in my ability to make aligned choices; Deeper, conscious breath. I am so grateful
          for Sheila and the support of all my fellow Nourish women.” - Carolyn
        </StyledQuote>
      </ColorContainer>
      <ContentBreak />
      <FAQ faq={faqs}></FAQ>
      <PreviewCompatibleImage
        imageInfo={frontmatter.thirdImage.childImageSharp.gatsbyImageData}
        title="Nourish teaser photo"
      />
    </section>
  );
};

const Nourish = ({
  data: {
    markdownRemark: { frontmatter },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      image={frontmatter.bannerImage.publicURL}
      description={frontmatter.pageDescription}
      imageAlt={frontmatter.bannerImageHeadline}
      location={location}
      title={frontmatter.pageTitle}
    />
    <NourishTemplate frontmatter={frontmatter} />
  </Layout>
);

export default Nourish;

export const pageQuery = graphql`
  query NourishPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
          publicURL
        }
        montage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
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
        sideBySide {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        coachingImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        subBanner {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        welcomeToNourish {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;

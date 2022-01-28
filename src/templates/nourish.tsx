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

const ColorContainer = styled.div<{ backgroundColor?: string; marginBottom?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-top: 1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "1rem")};
  padding: 1rem 2rem;
`;

const DesktopImage = styled(BreakOutImage)`
  @media (max-width: ${Constants.mobileWidth}) {
    display: none;
  }
`;

const MobileImage = styled(BreakOutImage)`
  display: none;

  @media (max-width: ${Constants.mobileWidth}) {
    display: inherit;
  }
`;

const ColorContainerMobile = styled(ColorContainer)`
  margin-top: 0.25rem;
  display: none;

  @media (max-width: ${Constants.mobileWidth}) {
    display: inherit;
  }
`;

const InlineBrownText = styled.p`
  color: ${Constants.Colors.nourishBrown};
  display: inline;
  margin-left: 2px;
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
  padding: 2rem;
`;

const faqs = [
  {
    question: "What if I miss a session?",
    answer:
      "We will miss having you but the calls are always recorded and will be available for you on-demand throughout the entirety of the program!",
  },
  {
    question: "Will I get personal coaching from Sheila?",
    answer:
      "There will be an opportunity for you to receive individual coaching during our bi-weekly group sessions. If you desire a more personalized experience, I encourage you to invest in NOURISH VIP. Each month we will have one 60 minute session, and you will have unlimited access to Sheila via voice and text support.",
  },
  {
    question: "How do I know if I’m ready for NOURISH?",
    answer:
      "If you read through and resonate with everything on this page - it’s likely that you are ready! Keep in mind that once you apply, we will hop on a call to confirm that it’s the right fit for you.Listen to your heart and see if this program is calling you.",
  },
  { question: "What isn’t NOURISH?", answer: "NOURISH is not a replacement for mental health counseling" },
  {
    question: "What is the timeline for NOURISH?",
    answer: "The program kicks off in mid-September 2021 and will run until mid-December 2021 (14 weeks)",
  },
];

const NourishApplyButton = () => (
  <CenteredText margin="2rem 0">
    <LinkButton backgroundColor={Constants.Colors.redRocksRed} to="/nourish-form">
      Apply now
    </LinkButton>
  </CenteredText>
);

export const NourishTemplate = ({ frontmatter }) => {
  return (
    <section>
      <DesktopImage imageInfo={frontmatter.bannerImage} title="Nourish whole person coaching program" />
      <MobileImage imageInfo={frontmatter.bannerImageMobile} title="Nourish whole person coaching program" />
      <PreviewCompatibleImage imageInfo={frontmatter.montage} title="Nourish montage" />
      <h1 style={{ display: "none" }}>Nourish: A Whole-Person Coaching Program</h1>
      <ColorContainerMobile backgroundColor={Constants.Colors.nourishNeutral}>
        <CenteredText fontWeight="800" color={"#FFF"}>
          <div>a whole-person coaching program</div>
          <div>to cultivate well-being</div>
          <div>foster community</div>
          <div>
            and let your natural self
            <InlineBrownText> thrive</InlineBrownText>
          </div>
        </CenteredText>
      </ColorContainerMobile>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray} marginBottom="0">
        <h2>Blossom with NOURISH in Spring 2022!</h2>
        <StyledQuote>
          “<b>Nourish is a life-changing program</b> that provides a safe space for a supportive community filled with
          mutual growth, experiential learning and emotional connection.” - Emma, NOURISH graduate
        </StyledQuote>
        <NourishApplyButton />
      </ColorContainer>
      <CenteredText
        backgroundColor={Constants.Colors.nourishNeutral}
        color={Constants.Colors.nourishBrown}
        padding="1rem"
        fontSize="2rem"
        margin="1rem 0"
      >
        <div>
          FOR THE <b>AMBITIOUS WOMAN</b>
        </div>
        <div>
          WHO IS <b>READY</b>
        </div>
        <div>
          TO FULLY <b>NOURISH</b>
        </div>
        <div>
          HER <b>UNIQUE POWER</b>
        </div>
        <div>
          AND SAY <b>YES</b> TO
        </div>
        <div>
          THE <b>WILDLY BEAUTIFUL</b> LIFE
        </div>
        <div>
          <b>SHE KNOWS</b> SHE IS
        </div>
        <div>
          CAPABLE OF <b>CREATING</b>.
        </div>
      </CenteredText>
      <NourishApplyButton />

      <div>
        <h2>Are you ...</h2>
        <SpacedOutText>SO OVER battling self doubt and your inner critic</SpacedOutText>
        <SpacedOutText>
          TIRED of always hustling and never feeling like you’ll get to where you want to go
        </SpacedOutText>
        <SpacedOutText>CRAVING unwavering confidence and decisive action</SpacedOutText>
        <SpacedOutText>SEEKING for the self connection and self love you know you're capable of</SpacedOutText>
        <SpacedOutText>EXCITED to find what's next in your relationships, lifestyle, and career path</SpacedOutText>
        <SpacedOutText>
          READY to stop trying to do it all on your own, and find a supportive and inspiring community
        </SpacedOutText>
      </div>
      <div>
        <h2>What if ...</h2>
        <SpacedOutText>
          You were able to <b>change</b> the behaviors and beliefs blocking you from playing bigger and bolder in your
          life
        </SpacedOutText>
        <SpacedOutText>
          There was a <b>community</b> waiting to support you, grow with you, and inspire you to be 100% yourself
        </SpacedOutText>
        <SpacedOutText>
          You could feel <b>present</b>, in <b>flow</b>, and an inner <b>glow</b> in your daily life
        </SpacedOutText>
        <SpacedOutText>
          You were <b>confident</b> in your unique power, because you understood <b>exactly who you were</b> and how to
          nourish your <b>body, mind, and soul</b>.
        </SpacedOutText>
      </div>
      <div>
        <h2>Welcome home to you. Welcome home to NOURISH</h2>
        <PreviewCompatibleImage imageInfo={frontmatter.welcomeToNourish} title="Welcome home to NOURISH" />
      </div>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown} fontSize="1.5rem">
          <div>
            NOURISH is a 14-week group coaching program for the <b>driven woman</b> who is <b>ready to thrive</b> in her
            body, mind, and soul. You can expect transformational coaching, immersive training, community connection,
            and get-out-of-your-comfort-zone experiences. This is unlike anything you’ve done before. This is what your
            next-level self has been waiting for.
          </div>
        </CenteredText>
      </ColorContainer>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown} fontSize="1.5rem">
          <div>
            This program is thoughtfully designed to help you achieve your goals from a place of alignment and
            abundance. The tools and learnings you acquire within the program are lifelong, whether you are chasing a
            new career dream, craving self confidence, or looking for “what’s next” after burnout or grief or big life
            changes.
          </div>
        </CenteredText>
      </ColorContainer>
      <NourishApplyButton />
      <div>
        <h2>The NOURISH transformation consists of three pillars: Body, Mind, Soul.</h2>
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
          Bi-weekly training & coaching calls will help you to hone-in, learn, practice, and transform. Between our
          calls you will be working through the NOURISH Notebook, integrating learnings, and connecting with the NOURISH
          community via our messaging platform. You’ll constantly be supported, held, and cheered on.
        </SpacedOutText>

        <SpacedOutText>
          If you are an ambitious, adventurous woman who wants to be her own unique powerhouse, this program is for you!
        </SpacedOutText>
        <ColorContainer backgroundColor={Constants.Colors.nourishNeutral}>
          <CenteredText>
            <SmallerHeadline>The NOURISH Experience 🌼</SmallerHeadline>
            <h3>2 Virtual Retreats</h3>
            <SpacedOutText>
              Including a kick-off party to build meaningful relationships, and a closing celebration to commemorate the
              incredible journey.{" "}
            </SpacedOutText>
            <h3>Bi - Weekly Calls</h3>
            <SpacedOutText>
              For intensive training and personalized support. Each call will have a specific focus, connected to that
              month’s theme. A blend of learning, coaching, and community conversation. Each call will be recorded so
              you can revisit it whenever you choose.
            </SpacedOutText>
            <h3>NOURISH Notebook</h3>
            <SpacedOutText>
              A digital journal chock-full of journaling prompts and exercises. Delivered in three parts along the
              NOURISH journey.
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
            <h3>Surprises!</h3>
            <SpacedOutText>Obviously, ‘cause you deserve it!</SpacedOutText>
          </CenteredText>
        </ColorContainer>
        <h2>I’m dedicated to helping you thrive</h2>
        <FlexContainer justifyContent="center" margin="1rem 0" backgroundColor={Constants.Colors.nourishGray}>
          <HalfColumn>
            <FlexColSplitImage>
              <RoundedImage
                imageInfo={{
                  alt: "Sheila smiling in a chair",
                  childImageSharp: frontmatter.sideBySide.childImageSharp,
                }}
                title="Nourish details"
              />
            </FlexColSplitImage>
          </HalfColumn>
          <HalfColumn>
            <h3>Hi. I'm Sheila.</h3>
            <SpacedOutText>
              I am a recovering overachiever / perfectionist and I know what it’s like to be so busy checking all the
              boxes, that you lose the magic of self-connection and empowered action. I created NOURISH because I
              believe that when we come home to ourselves, we can transform our lives.
            </SpacedOutText>
          </HalfColumn>
          <FlexContainer justifyContent="center" backgroundColor={Constants.Colors.nourishGray}>
            <SpacedOutText padding="1rem">
              I know that you want to feel present, alive, and fulfilled each day, and that’s what I wanted too! Through
              the tragic loss of my mother, pivoting my career (again and again) , leaving the corporate world, falling
              in love, and uprooting my life countless times, I’ve learned that our power and our adaptability don't
              exist in isolation. This program is truly a work of my soul, and I am beyond grateful to be able to share
              it with you.
            </SpacedOutText>
          </FlexContainer>
        </FlexContainer>
      </div>
      <div>
        <h2>NOURISH is for you if ...</h2>
        <ul>
          <li>You are the doing, planning, career-crushing friend that always tries to fill her life to the brim</li>
          <li>You have big dreams but often get stuck in the “how” and “what if” stage</li>
          <li>You appear confident but get stuck in loops of self doubt</li>
          <li>You are certain that you have unique power to share with the world</li>
          <li>You often wonder what your greater purpose is</li>
          <li>
            You are not afraid to get messy, open up to community, for the sake of transformational growth and deep
            connection
          </li>
          <li>You are excited by the idea of living with more flow and peace in life</li>
          <li>
            You are in a season of healing, seeking, rediscovering, growing through grief, or craving deeper self
            connection
          </li>
          <li>
            You will be committed to showing up, practicing learnings, working through the notebook, and supporting
            other women.
          </li>
        </ul>
      </div>
      <NourishApplyButton />
      <ColorContainer backgroundColor={Constants.Colors.nourishNeutral}>
        <SmallerHeadline>A deeper look at what you’ll learn:</SmallerHeadline>
        <h3>BODY</h3>
        <div>
          <b>Pause</b>: Get to know how to build somatic awareness and mindfulness to transform your life, and how to
          disconnect from the constant need to “do” so you can commit to greater well-being
        </div>
        <div>
          <b>Play</b>: Explore how you interact with the world, your career, your pleasure, your relationships
        </div>
        <h3>MIND</h3>
        <div>
          <b>Inner Critic</b>: Develop a clear sense of who the inner critic is, what they are triggered by, what they
          want, how to turn down the volume so that you can build resilience and take aligned action
        </div>
        <div>
          <b>Inner Mentor</b>: Walk away with a killer resource to tune into when you need an extra boost of confidence,
          to get in touch with your authenticity, or make tough decisions
        </div>
        <h3>SOUL</h3>
        <div>
          <b>Purpose</b>: Step into a deep knowing of how you can shine your light a killer mission statement, tools for
          unwavering self belief
        </div>
        <div>
          <b>Magnetize</b>: Manifest the life you desire, switch from scarcity to abundance, explore with energy tools,
          and declare what you want to attract and be open to receiving it.
        </div>
      </ColorContainer>
      <div>
        <CenteredText>
          <h2>Investment</h2>
          <h3>NOURISH </h3>
          <SpacedOutText>
            All trainings, retreats, curriculum, community, meditations, notebook, and support:
          </SpacedOutText>
          <SpacedOutText>$1300 or 3 monthly payments of $450</SpacedOutText>
          <h3>NOURISH+</h3>
          <SpacedOutText>
            <i>For the woman ready to be intimately supported and expedite her transformational growth.</i>
            <div>Everything included in NOURISH:</div>
            <SpacedOutText>+ One 1:1 call/ month with Sheila </SpacedOutText>
            <SpacedOutText>+ Private messaging with Sheila </SpacedOutText>
          </SpacedOutText>
          <SpacedOutText>$1700 or 3 monthly payments of $575</SpacedOutText>
          <SpacedOutText>
            <b>Exclusive pricing available for early enrollment applicants</b>
          </SpacedOutText>
          <NourishApplyButton />
          <SpacedOutText>
            Sheila is committed to program accessibility, so please contact her for more information on customized
            payment options.
          </SpacedOutText>
        </CenteredText>
      </div>
      <PreviewCompatibleImage imageInfo={frontmatter.coachingImage} title="Sheila coaching in person" />
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <h2>What people are saying about the NOURISH experience</h2>
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
          “This program was unlike anything I’ve ever done before. When I first started my stress and anxiety were at an
          all time high. Not only was the program mentally restorative for me it was incredibly transformative. I
          cultivated some long lasting friendships, dug deeper into myself than I ever have, and took chances I wouldn’t
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
      <PreviewCompatibleImage imageInfo={frontmatter.thirdImage} title="Nourish teaser photo" />
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
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        bannerImageMobile {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        montage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
        sideBySide {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coachingImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        welcomeToNourish {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;

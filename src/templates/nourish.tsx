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

const ColorContainer = styled.div.withConfig<{ backgroundColor?: string; marginBottom?: string }>({
  shouldForwardProp: prop => prop !== "backgroundColor" && prop !== "marginBottom",
})`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-top: 1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "1rem")};
  padding: 1rem 2rem;
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

const BlockImage = styled(PreviewCompatibleImage)`
  display: block;
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
      "There will be an opportunity for you to receive individual coaching during our bi-weekly group sessions. If you desire a more personalized experience, I encourage you to invest in Nourish VIP. Each month we will have one 60 minute session, and you will have unlimited access to Sheila via voice and text support.",
  },
  {
    question: "How do I know if I’m ready for Nourish?",
    answer:
      "If you read through and resonate with everything on this page - it’s likely that you are ready! Keep in mind that once you apply, we will hop on a call to confirm that it’s the right fit for you.Listen to your heart and see if this program is calling you.",
  },
  { question: "What isn’t Nourish?", answer: "Nourish is not a replacement for mental health counseling" },
  {
    question: "What is the timeline for Nourish?",
    answer: "The program kicks off in mid-September 2021 and will run until mid-December 2021 (14 weeks)",
  },
];

const NourishApplyButton = ({ margin = "2rem 0" }) => (
  <CenteredText margin={margin}>
    <LinkButton backgroundColor={Constants.Colors.redRocksRed} to="/nourish-form">
      Put me on the waitlist!
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
      <BlockImage imageInfo={frontmatter.montage.childImageSharp.gatsbyImageData} title="Nourish montage" />
      <h1 style={{ display: "none" }}>Nourish: A Whole-Person Coaching Program</h1>
      <CenteredText fontSize="2rem" fontWeight="800" margin="2rem 0">
        Doors opening soon for Nourish Fall 2023! Get on the waitlist now to receive exclusive pricing, an incredible
        bonus, and to make sure your spot is saved 🌼
      </CenteredText>
      <NourishApplyButton margin="0 0 2rem 0" />
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <StyledQuote>
          “I have tried out different therapists, read self-help books, signed up for online modules, in search of
          something healing that was really worth investing time, energy and money into. Up until Nourish, most of these
          endeavors fell somewhere between waste of time and pretty good. Nourish on the other hand surpassed all of my
          expectations and added so much value in the dedicated 4 month timeframe.”
        </StyledQuote>
      </ColorContainer>
      <CenteredText
        backgroundColor={Constants.Colors.nourishNeutral}
        color={Constants.Colors.nourishBrown}
        padding="1rem"
        margin="2rem 0"
      >
        <div>
          For the <b>ambitious woman</b>
        </div>
        <div>
          who is <b>ready</b> to <b>nourish</b>
        </div>
        <div>her body, mind, and soul</div>
        <div>
          and say <b>yes</b> to the wildly beautiful
        </div>
        <div>life, career, and relationships</div>
        <div>
          she knows she <b>deserves</b>
        </div>
      </CenteredText>
      <NourishApplyButton />

      <div>
        <h2>Are you ...</h2>
        <SpacedOutText>
          <b>So over</b> battling self doubt and your inner critic
        </SpacedOutText>
        <SpacedOutText>
          <b>Tired</b> of always hustling and never feeling like you’ll get to where you want to go
        </SpacedOutText>
        <SpacedOutText>
          <b>Craving</b> unwavering confidence and decisive action
        </SpacedOutText>
        <SpacedOutText>
          <b>Seeking</b> for the self connection and self love you know you're capable of
        </SpacedOutText>
        <SpacedOutText>
          <b>Excited</b> to find what's <i>next</i> in your relationships, lifestyle, and career path
        </SpacedOutText>
        <SpacedOutText>
          <b>Ready</b> to stop trying to do it all on your own, and find a supportive and inspiring community
        </SpacedOutText>
      </div>
      <div>
        <h2>What if ...</h2>
        <SpacedOutText>
          You were able to <b>change</b> the behaviors blocking you from playing bigger and bolder in your life
        </SpacedOutText>
        <SpacedOutText>
          There was a <b>community</b> waiting to support you, grow with you, and inspire you to be 100% yourself
        </SpacedOutText>
        <SpacedOutText>
          You could feel <b>present</b>, in <b>flow</b>, and an inner <b>glow</b> in your daily life
        </SpacedOutText>
        <SpacedOutText>
          You were <b>confident</b> in yourself, because you understood <b>exactly who you were</b> and how to nourish
          your <b>body, mind, and soul</b>.
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
            Nourish is a 12-week group coaching program for the <b>driven woman</b> who is <b>ready</b> for{" "}
            <i>something more</i> in her life. You can expect transformational coaching, immersive training, community
            connection, and get-out-of-your-comfort-zone experiences. This is unlike anything you’ve done before. This
            is what your next-level self has been waiting for.
          </div>
        </CenteredText>
      </ColorContainer>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown}>
          <div>
            The intentionally intimate community will foster your growth - be it personal or professional - and hold you
            accountable to playing big in your life. What do you want to achieve by the end of 2022? What would it be
            like to <i>finally</i> prioritize yourself and actually make it happen, and make lifelong friendships along
            the way?
          </div>
        </CenteredText>
      </ColorContainer>
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown}>
          <div>
            The tools and learnings you acquire within the program are lifelong, whether you are chasing a new career
            dream, craving self confidence, or looking for “what’s next” after burnout or grief or big life changes.
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
          our messaging platform. You’ll constantly be supported, held, and cheered on.
        </SpacedOutText>
        <SpacedOutText>
          If you are an ambitious, adventurous woman who wants to be her own unique powerhouse, this program is for you!
        </SpacedOutText>
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
              For intensive training and personalized support. We’ll take two consecutive weeks to cover each pillar,
              with an integration / “off” week before moving to the next. Expect a blend of learning, coaching, and
              community conversation. Each call will be recorded so you can revisit it whenever you choose.
            </SpacedOutText>
            <h3>Nourish Notebook</h3>
            <SpacedOutText>
              A digital journal chock-full of journaling prompts and exercises. Delivered in three parts along the
              Nourish journey.
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
              Like materials you can download, print, and replay? Me too! That’s why I will be giving you{" "}
              <b>lifetime</b> access to the trainings, notebook, and call recordings. No anxiety about disappearing
              resources here!
            </SpacedOutText>
            <h3>Surprises! 🎉</h3>
            <SpacedOutText>Obviously, ‘cause you deserve it!</SpacedOutText>
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
                imageAlt="Sheila smiling in a chair"
                imageInfo={frontmatter.sideBySide.childImageSharp.gatsbyImageData}
                title="Nourish details"
              />
            </FlexColSplitImage>
          </HalfColumn>
          <HalfColumn>
            <h3>Hi. I'm Sheila.</h3>
            <SpacedOutText>
              I know that you want to feel present, alive, and fulfilled each day, and that’s what I wanted too! I spent
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
        <h3>Body</h3>
        <div>
          <b>Pause</b>: Let’s talk about the power of mindfulness, somatic awareness, and slowing down so you can commit
          to greater well-being and a lifestyle that actually sticks. No more pendulum swings of burnout or not knowing
          how to break the cycle of stress.
        </div>
        <div>
          <b>Play</b>: Discover your wild woman self and explore how you interact with the world, your career, your
          pleasure, your relationships.
        </div>
        <h3>Mind</h3>
        <div>
          <b>Inner Critic</b>: We’ll tackle how to manage the thoughts that keep you up at night or fill you with dread
          when you wake up in the morning. It’s time to overcome the stories about yourself that are keeping you stuck!
          You will develop a clear sense of who the inner critic is, biggest triggers, and how to rewrite your stories
          so you can experience more joy and fulfillment every day.
        </div>
        <div>
          <b>Inner Mentor</b>: Get ready to leverage the power of a positive mindset and become the confident leader
          you’re meant to be! You will create a unique-to-you resource to use whenever you need extra boost - be it
          before leading an event, a tough decision in your life, effective communication with your partner, etc. We all
          have the ability to empower ourselves, I’ll show you exactly how to do it!
        </div>
        <h3>Soul</h3>
        <div>
          <b>Purpose</b>: Find your life, career, and love direction and strengthen what makes you, you. No more feeling
          like you don’t know “what’s next” or being unsure of your purpose. You’ll create a mission statement, so you
          can step into action and positively impact communities around you along the way.
        </div>
        <div>
          <b>Magnetize</b>: Let’s play with energy and neural manifestation, so you can create big results in your life,
          career, and relationships! You’ll learn about the science behind intention-setting and manifestation and
          integrate daily magnetic practices.
        </div>
      </ColorContainer>
      <div>
        <CenteredText>
          <h2>Program Options</h2>
          <h3>Nourish </h3>
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
          <SpacedOutText>
            Sheila is committed to program accessibility, so please contact her for more information on customized
            payment options.
          </SpacedOutText>
        </CenteredText>
      </div>
      <PreviewCompatibleImage
        imageInfo={frontmatter.coachingImage.childImageSharp.gatsbyImageData}
        title="Sheila coaching in person"
      />
      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
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

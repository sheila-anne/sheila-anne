import React, { FC } from "react";
import styled from "styled-components";

type TestimonialProps = {
  testimonials: Testimonial[];
};

type Testimonial = {
  author: string;
  quote: string;
};

const TestimonialText = styled.p`
  margin-bottom: 1rem;
`;

const Testimonials: FC<TestimonialProps> = ({ testimonials }) => (
  <>
    {testimonials.map((testimonial, index) => (
      <article key={index}>
        <TestimonialText>{testimonial.quote}</TestimonialText>
        <cite> – {testimonial.author}</cite>
      </article>
    ))}
  </>
);

export { Testimonials };

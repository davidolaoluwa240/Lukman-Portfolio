// Hooks
import { useState, useEffect } from "react";

// Components
import { Typewriter } from "react-simple-typewriter";
import { Oval } from "react-loader-spinner";

// Styles
import "./page-spinner.styles.css";

const QUOTES = [
  "“Our role is to imagine products that don’t exist and guide them to life.” – Apple designer Christopher Stringer",
  "“It’s all about one thing: creative problem-solving to get the story out.” – Bob Greenberg, founder, chairman and CEO of R/GA",
  "“The only important thing about design is how it relates to people.” – designer, educator and author Victor Papanek",
  "“Good design is good business.” – retired IBM CEO Thomas Watson, Junior",
  "“Only when the design fails does it draw attention to itself; when it succeeds, it’s invisible.” – typographer and book designer John D. Berry",
  "“Good design is obvious. Great design is transparent.” – designer Joe Sparano",
  "“Design is not just what it looks like and feels like. Design is how it works.” - Steve Jobs",
  "“While tackling a problem, I don't typically dwell on its aesthetic qualities. However, upon completion, if the solution lacks beauty, I instinctively recognize it as incorrect.” - designer Lukman Suleiman",
  "“Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.” - Paul Rand",
  "“The ability to simplify means to eliminate the unnecessary so that the necessary may speak.” - Hans Hofmann",
  "“Great design will not sell an inferior product, but it will enable a great product to achieve its maximum potential.” - Thomas Watson, Jr.",
  "“Form follows function - that has been misunderstood. Form and function should be one, joined in a spiritual union.” - Frank Lloyd Wright",
  "“You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.” - Steve Jobs",
];

export const PageSpinner = () => {
  return (
    <div className="spinner">
      <Typewriter words={QUOTES} typeSpeed={30} deleteSpeed={30} loop={false} />
      <Oval
        visible={true}
        height="30"
        width="30"
        strokeWidth={5}
        strokeWidthSecondary={5}
        secondaryColor="#9c9c9c"
        color="#9c9c9c"
        ariaLabel="Page spinner"
        wrapperStyle={{ marginTop: "1rem" }}
      />
    </div>
  );
};

// Components
import { BookshelfBooksList } from "./bookshelf-books-list/bookshelf-books-list.component";

// Styles
import { BookshelfBooksContainer } from "./bookshelf-books.styles";

// Images
import marcusAureliusBook from "../../assets/images/marcus-aurelius.png";
import navalAlmanackBook from "../../assets/images/naval-almanack.png";
import manSearchingForMeaningBook from "../../assets/images/mans-search-for-meaning.png";
import sapiensBook from "../../assets/images/sapiens.png";
import deepWorkBook from "../../assets/images/deep-work.png";
import stopWorringBook from "../../assets/images/stop-worrying.png";
import steveJobsBook from "../../assets/images/steve-jobs.png";
import egoIsMyEnemyBook from "../../assets/images/ego-is-the-enemy.png";
import atomicHabitBook from "../../assets/images/atomic-habits.png";
import thinkingFastSlowBook from "../../assets/images/thinking-fast-slow.png";
import powerBook from "../../assets/images/power.png";
import thinkAndGrowRichBook from "../../assets/images/think-and-grow-rich.png";
import reworkBook from "../../assets/images/rework.png";
import principlesBook from "../../assets/images/principles.png";
import theArtOfWarBook from "../../assets/images/the-art-of-war.png";
import finishWhatYouStartBook from "../../assets/images/finish-what-you-start.png";
import theObstacleIsTheWayBook from "../../assets/images/obstacle-is-the-way.png";
import buildBook from "../../assets/images/build.png";
import designOfEverydayThingsBook from "../../assets/images/the-design-of-everyday-thing.png";
import lawsOfUxBook from "../../assets/images/laws-of-ux.png";
import refactoringUIBook from "../../assets/images/refactoring-ui.png";
import articulatingDesignDecisionBook from "../../assets/images/articulating-design-decisions.png";
import atomicDesignBook from "../../assets/images/atomic-design.png";
import warOfArtBook from "../../assets/images/war-of-art.png";
import hookedBook from "../../assets/images/hooked.png";
import stealLikeAnArtistBook from "../../assets/images/steal-like-an-artist.png";
import showYourWorkBook from "../../assets/images/show-your-work.png";
import sprintBook from "../../assets/images/sprint.png";
import designForABetterWorldBook from "../../assets/images/design-for-a-better-world.png";
import designIsStoryTellingBook from "../../assets/images/design-is-storytelling.png";
import theUserExperienceTeamOfOneBook from "../../assets/images/the-user-experience-team-of-one.png";
import actionableGamificationBook from "../../assets/images/actionable-gamification.png";
import theEssentialsOfInteractionDesign from "../../assets/images/the-essentials-of-interaction-design.png";

// Static Data
export const BOOKSHELF_BOOKS_ITEMS = [
  {
    id: 1,
    img: marcusAureliusBook,
    name: "Marcus Aurelius",
  },
  {
    id: 2,
    img: navalAlmanackBook,
    name: "The Almanack Of Naval RaviKant",
  },
  {
    id: 3,
    img: manSearchingForMeaningBook,
    name: "Man Searching For Meaning",
  },
  {
    id: 4,
    img: sapiensBook,
    name: "A Brief History Of Human Kind",
  },
  {
    id: 5,
    img: deepWorkBook,
    name: "Deep Work",
  },
  {
    id: 6,
    img: stopWorringBook,
    name: "How Stop Worrying And Start Living",
  },
  {
    id: 7,
    img: steveJobsBook,
    name: "Make Something Wonderful",
  },
  {
    id: 8,
    img: egoIsMyEnemyBook,
    name: "Ego Is My Enemy",
  },
  {
    id: 9,
    img: atomicHabitBook,
    name: "Tiny Changes Remarkable Results, Atomic Habits",
  },
  {
    id: 10,
    img: thinkingFastSlowBook,
    name: "Thinking, Fast...Slow",
  },
  {
    id: 11,
    img: powerBook,
    name: "Power",
  },
  {
    id: 12,
    img: thinkAndGrowRichBook,
    name: "Think And Grow Rich",
  },
  {
    id: 13,
    img: reworkBook,
    name: "Rework",
  },
  {
    id: 14,
    img: principlesBook,
    name: "Priciples",
  },
  {
    id: 15,
    img: theArtOfWarBook,
    name: "The Art Of War Book",
  },
  {
    id: 16,
    img: finishWhatYouStartBook,
    name: "Finish What You Start",
  },
  {
    id: 17,
    img: theObstacleIsTheWayBook,
    name: "The Obstacle Is The Way",
  },
  {
    id: 18,
    img: buildBook,
    name: "Build",
  },
  {
    id: 19,
    img: designOfEverydayThingsBook,
    name: "The Design Of Everyday Things",
  },
  {
    id: 20,
    img: lawsOfUxBook,
    name: "Laws Of UX",
  },
  {
    id: 21,
    img: refactoringUIBook,
    name: "Refactoring UI",
  },
  {
    id: 22,
    img: articulatingDesignDecisionBook,
    name: "Articulating Design Decision",
  },
  {
    id: 23,
    img: atomicDesignBook,
    name: "Atomic Design",
  },
  {
    id: 24,
    img: warOfArtBook,
    name: "The War Of Art",
  },
  {
    id: 25,
    img: hookedBook,
    name: "Hooked",
  },
  {
    id: 26,
    img: stealLikeAnArtistBook,
    name: "Steal Like And Artist",
  },
  {
    id: 27,
    img: showYourWorkBook,
    name: "Show Your Work",
  },
  {
    id: 28,
    img: sprintBook,
    name: "Sprint",
  },
  {
    id: 29,
    img: designForABetterWorldBook,
    name: "Design For A Better World",
  },
  {
    id: 30,
    img: designIsStoryTellingBook,
    name: "Design Is Story Telling",
  },
  {
    id: 31,
    img: theUserExperienceTeamOfOneBook,
    name: "The User Experience Team Of One",
  },
  {
    id: 32,
    img: actionableGamificationBook,
    name: "Actionable Gamification",
  },
  {
    id: 33,
    img: theEssentialsOfInteractionDesign,
    name: "The Essentials Of Interaction Design",
  },
];

export const BookshelfBooks = () => {
  const bookshelfBooksItems = BOOKSHELF_BOOKS_ITEMS;

  return (
    <BookshelfBooksContainer>
      <BookshelfBooksList items={bookshelfBooksItems} />
    </BookshelfBooksContainer>
  );
};

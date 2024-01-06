// Components
import { BookshelfBooksList } from "./bookshelf-books-list/bookshelf-books-list.component";

// Styles
import { BookshelfBooksContainer } from "./bookshelf-books.styles";

// Images
import MarcusAureliusBook from "../../assets/images/marcus-aurelius.svg?react";
import NavalAlmanackBook from "../../assets/images/naval-almanack.svg?react";
import ManSearchingForMeaningBook from "../../assets/images/mans-search-for-meaning.svg?react";
import SapiensBook from "../../assets/images/sapiens.svg?react";
import DeepWorkBook from "../../assets/images/deep-work.svg?react";
import StopWorringBook from "../../assets/images/stop-worrying.svg?react";
import SteveJobsBook from "../../assets/images/steve-jobs.svg?react";
import EgoIsMyEnemyBook from "../../assets/images/ego-is-the-enemy.svg?react";
import AtomicHabitBook from "../../assets/images/atomic-habits.svg?react";
import ThinkingFastSlowBook from "../../assets/images/thinking-fast-slow.svg?react";
import PowerBook from "../../assets/images/power.svg?react";
import ThinkAndGrowRichBook from "../../assets/images/think-and-grow-rich.svg?react";
import ReworkBook from "../../assets/images/rework.svg?react";
import PrinciplesBook from "../../assets/images/principles.svg?react";
import TheArtOfWarBook from "../../assets/images/the-art-of-war.svg?react";
import FinishWhatYouStartBook from "../../assets/images/finish-what-you-start.svg?react";
import TheObstacleIsTheWayBook from "../../assets/images/obstacle-is-the-way.svg?react";
import BuildBook from "../../assets/images/build.svg?react";
import DesignOfEverydayThingsBook from "../../assets/images/the-design-of-everyday-thing.svg?react";
import LawsOfUxBook from "../../assets/images/laws-of-ux.svg?react";
import RefactoringUIBook from "../../assets/images/refactoring-ui.svg?react";
import ArticulatingDesignDecisionBook from "../../assets/images/articulating-design-decisions.svg?react";
import AtomicDesignBook from "../../assets/images/atomic-design.svg?react";
import WarOfArtBook from "../../assets/images/war-of-art.svg?react";
import HookedBook from "../../assets/images/hooked.svg?react";
import StealLikeAnArtistBook from "../../assets/images/steal-like-an-artist.svg?react";
import ShowYourWorkBook from "../../assets/images/show-your-work.svg?react";
import SprintBook from "../../assets/images/sprint.svg?react";
import DesignForABetterWorldBook from "../../assets/images/design-for-a-better-world.svg?react";
import DesignIsStoryTellingBook from "../../assets/images/design-is-storytelling.svg?react";
import TheUserExperienceTeamOfOneBook from "../../assets/images/the-user-experience-team-of-one.svg?react";
import ActionableGamificationBook from "../../assets/images/actionable-gamification.svg?react";
import TheEssentialsOfInteractionDesign from "../../assets/images/the-essentials-of-interaction-design.svg?react";

// Static Data
export const BOOKSHELF_BOOKS_ITEMS = [
  {
    id: 1,
    img: MarcusAureliusBook,
    name: "Marcus Aurelius",
  },
  {
    id: 2,
    img: NavalAlmanackBook,
    name: "The Almanack Of Naval RaviKant",
  },
  {
    id: 3,
    img: ManSearchingForMeaningBook,
    name: "Man Searching For Meaning",
  },
  {
    id: 4,
    img: SapiensBook,
    name: "A Brief History Of Human Kind",
  },
  {
    id: 5,
    img: DeepWorkBook,
    name: "Deep Work",
  },
  {
    id: 6,
    img: StopWorringBook,
    name: "How Stop Worrying And Start Living",
  },
  {
    id: 7,
    img: SteveJobsBook,
    name: "Make Something Wonderful",
  },
  {
    id: 8,
    img: EgoIsMyEnemyBook,
    name: "Ego Is My Enemy",
  },
  {
    id: 9,
    img: AtomicHabitBook,
    name: "Tiny Changes Remarkable Results, Atomic Habits",
  },
  {
    id: 10,
    img: ThinkingFastSlowBook,
    name: "Thinking, Fast...Slow",
  },
  {
    id: 11,
    img: PowerBook,
    name: "Power",
  },
  {
    id: 12,
    img: ThinkAndGrowRichBook,
    name: "Think And Grow Rich",
  },
  {
    id: 13,
    img: ReworkBook,
    name: "Rework",
  },
  {
    id: 14,
    img: PrinciplesBook,
    name: "Priciples",
  },
  {
    id: 15,
    img: TheArtOfWarBook,
    name: "The Art Of War Book",
  },
  {
    id: 16,
    img: FinishWhatYouStartBook,
    name: "Finish What You Start",
  },
  {
    id: 17,
    img: TheObstacleIsTheWayBook,
    name: "The Obstacle Is The Way",
  },
  {
    id: 18,
    img: BuildBook,
    name: "Build",
  },
  {
    id: 19,
    img: DesignOfEverydayThingsBook,
    name: "The Design Of Everyday Things",
  },
  {
    id: 20,
    img: LawsOfUxBook,
    name: "Laws Of UX",
  },
  {
    id: 21,
    img: RefactoringUIBook,
    name: "Refactoring UI",
  },
  {
    id: 22,
    img: ArticulatingDesignDecisionBook,
    name: "Articulating Design Decision",
  },
  {
    id: 23,
    img: AtomicDesignBook,
    name: "Atomic Design",
  },
  {
    id: 24,
    img: WarOfArtBook,
    name: "The War Of Art",
  },
  {
    id: 25,
    img: HookedBook,
    name: "Hooked",
  },
  {
    id: 26,
    img: StealLikeAnArtistBook,
    name: "Steal Like And Artist",
  },
  {
    id: 27,
    img: ShowYourWorkBook,
    name: "Show Your Work",
  },
  {
    id: 28,
    img: SprintBook,
    name: "Sprint",
  },
  {
    id: 29,
    img: DesignForABetterWorldBook,
    name: "Design For A Better World",
  },
  {
    id: 30,
    img: DesignIsStoryTellingBook,
    name: "Design Is Story Telling",
  },
  {
    id: 31,
    img: TheUserExperienceTeamOfOneBook,
    name: "The User Experience Team Of One",
  },
  {
    id: 32,
    img: ActionableGamificationBook,
    name: "Actionable Gamification",
  },
  {
    id: 33,
    img: TheEssentialsOfInteractionDesign,
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

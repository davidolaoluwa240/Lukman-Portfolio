// Modules
import { createGlobalStyle } from "styled-components";

// Fonts Edgy Trial
import studioFeixenEdgyTrialRegular from "../assets/fonts/StudioFeixenEdgyTRIAL-Regular.otf";
import studioFeixenEdgyTrialLight from "../assets/fonts/StudioFeixenEdgyTRIAL-Light.otf";
import studioFeixenEdgyTrialMedium from "../assets/fonts/StudioFeixenEdgyTRIAL-Medium.otf";

// Fonts Sans Trial
import studioFeixenSansTrialLight from "../assets/fonts/StudioFeixenSansTRIAL-Light.otf";
import studioFeixenSansTrialSemiBold from "../assets/fonts/StudioFeixenSansTRIAL-Semibold.otf";

// Fonts Cirka
import cirkaLight from "../assets/fonts/Cirka-Light.otf";
import cirkaBold from "../assets/fonts/Cirka-Bold.otf";

export const GlobalStyle = createGlobalStyle`
    /* Cirka Fonts */
    @font-face {
        font-family: Cirka;
        src: url(${cirkaLight});
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: Cirka;
        src: url(${cirkaBold});
        font-weight: 700;
        font-style: normal;
    }

    /* Sans Trial Fonts */
    @font-face {
        font-family: Studio Feixen Sans TRIAL;
        src: url(${studioFeixenSansTrialLight});
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: Studio Feixen Sans TRIAL;
        src: url(${studioFeixenSansTrialSemiBold});
        font-weight: 600;
        font-style: normal;
    }

    /* Edgy Trial Fonts */
    @font-face {
        font-family: Studio Feixen Edgy TRIAL;
        src: url(${studioFeixenEdgyTrialLight});
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: Studio Feixen Edgy TRIAL;
        src: url(${studioFeixenEdgyTrialRegular});
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: Studio Feixen Edgy TRIAL;
        src: url(${studioFeixenEdgyTrialMedium});
        font-style: normal;
        font-weight: 500;
    }


    *,
    *::after,
    &::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color:#212121;
        --body-color: #f9f9f9;
        --white-color: #ffffff;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100%;
        height: 100vh;
        font-size: 1.8rem;
        line-height: 24px;
        font-family: Studio Feixen Edgy TRIAL;
        color: var(--primary-color);
        background-color: var(--body-color);
    }

    a {
        text-decoration: none;
        font: inherit;
        color: inherit;
    }

    ul {
        padding: 0;
        list-style: none;
    }

    svg {
        vertical-align: middle;
    }

    p {
        font-size: 1.8rem;
        font-weight: 300;
        font-family: Studio Feixen Sans TRIAL;
        line-height: 27px;
        font-style: normal;
    }

    .is-lower {
        text-transform: lowercase;
    }
`;

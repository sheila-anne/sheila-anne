import React, { useReducer } from "react";
import styled from "styled-components";

import { Constants } from "../constants";

type ShareNavigator = typeof navigator & {
  share?: (shareProps: ShareProps) => Promise<any>;
};
type ShareProps = {
  title: string;
  url: string;
};

const initialState = { shareSuccess: false, shareError: false };
type ShareAction = { key: keyof typeof initialState; value: string | boolean };
type State = typeof initialState;

const ErrorMessage = styled.div`
  border: 1px solid red;
`;

const ShareButton = styled.button`
  background-color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  text-decoration: none;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem 0;
  }
`;

const SuccessMessage = styled.div`
  border: 1px solid ${Constants.Colors.theGroveLightGreen};
`;

const onClick = (
  event: React.MouseEvent<HTMLButtonElement>,
  dispatch: React.Dispatch<ShareAction>
) => {
  event.preventDefault();
  const shareNav = navigator as ShareNavigator;
  const title = document.title;
  const url =
    (document.querySelector("link[rel=canonical]") as HTMLAnchorElement)
      ?.href ?? document.location.href;

  if (typeof shareNav !== "undefined" && !!shareNav.share) {
    shareNav
      .share({
        title,
        url
      })
      .then(() => dispatch({ key: "shareSuccess", value: true }))
      .catch(() => dispatch({ key: "shareError", value: true }));
  }
};

const reducer: React.Reducer<State, ShareAction> = (
  state: State,
  action: ShareAction
): State => {
  return { ...state, [action.key]: [action.value] };
};

export const Share = () => {
  const [state, dispatch] = useReducer(reducer, {
    shareSuccess: false,
    shareError: false
  });
  const shareNav = navigator as ShareNavigator;
  if (typeof shareNav !== "undefined" && !shareNav.share) {
    return null;
  }

  return (
    <>
      <ShareButton onClick={e => onClick(e, dispatch)}>
        <span role="img" aria-label="share">
          📤
        </span>{" "}
        Share!
      </ShareButton>
      {state.shareError && (
        <ErrorMessage>
          There was an error sharing this article. Please try again!
        </ErrorMessage>
      )}
      {state.shareSuccess && (
        <SuccessMessage>Article successfully shared!</SuccessMessage>
      )}
    </>
  );
};

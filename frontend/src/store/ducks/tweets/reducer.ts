import { TweetsActions, TweetsActionsType } from "./actionCreators";
import { LoadingState, TweetsState } from "./contracts/state";
import produce, { Draft } from "immer";

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    const { payload, type } = action;
    if (type === TweetsActionsType.SET_TWEETS) {
      draft.items = payload;
    }
  },
  initialTweetsState
);

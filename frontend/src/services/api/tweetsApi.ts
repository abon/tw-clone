import { TweetsState } from "./../../store/ducks/tweets/contracts/state";
import axios from "axios";

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState["items"]> {
    return axios
      .get("https://trycode.pw/c/2T2EY.json")
      .then(({ data }) => data);
  },
};

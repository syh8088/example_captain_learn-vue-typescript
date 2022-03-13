/**
 * Vuex 향후 로드맵에 맵 헬퍼 함수가 제거될 거라고 공지가 되어 있습니다.
 * 타입스크립트 추론 관점에서도 맵 헬퍼 함수는 더이상 사용하는 것은 권장하지 않습니다. Vuex 라이브러리의 추가 업데이트 방향에 따라서 관련 내용은 보충할 예정이니 참고해 주세요 :)
 */
import { NewsItem } from "@/api";
import { RootState } from "./state";

const getters = {
  fetchedNews(state: RootState): NewsItem[] {
    return state.news;
  },
};

export type Getters = typeof getters;

// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };

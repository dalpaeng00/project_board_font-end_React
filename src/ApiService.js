import axios from "axios";
const BOARD_API_BASE_URL = "http://localhost:8080/rest/board";

class ApiService {
  fetchBoardLists() {
    return axios.get(BOARD_API_BASE_URL);
  }

  fetchBoard(boardIdx) {
    return axios.get(BOARD_API_BASE_URL + "/" + boardIdx);
  }

  insetBoard(board) {
    return axios.post(BOARD_API_BASE_URL + "/write", board);
  }

  updateBoard(board) {
    return axios.put(BOARD_API_BASE_URL + "/" + board.boardIdx, board);
  }

  deleteBoard(boardIdx) {
    return axios.delete(BOARD_API_BASE_URL + "/" + boardIdx);
  }
}

export default new ApiService();

import React, { Component } from "react";
import "../../App.css";
import ApiService from "../../ApiService";

class BoardListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board_list: [],
      message: null,
    };
  }

  componentDidMount() {
    this.reloadBoardList();
  }

  reloadBoardList = () => {
    ApiService.fetchBoardLists()
      .then((res) => {
        this.setState({
          board_list: res.data,
        });
      })
      .catch((err) => {
        console.log("reloadBoardList() Error", err);
      });
  };

  addBoard = () => {
    this.props.history.push("board/write");
  };

  render() {
    return (
      <div>
        <div>
          <h2>게시글 목록</h2>
          <table>
            <colgroup>
              <col width="15%" />
              <col width="*" />
              <col width="15%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">글번호</th>
                <th scope="col">제목</th>
                <th scope="col">조회수</th>
                <th scope="col">작성일</th>
              </tr>
            </thead>
            <tbody>
              {this.state.board_list.map((board) => (
                <tr key={board.boardIdx}>
                  <td>{board.boardIdx}</td>
                  <td class="title">
                    <a href={`/board/${board.boardIdx}`}>{board.title}</a>
                  </td>
                  <td>{board.hitCnt}</td>
                  <td>{board.createdDatetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="javascript:void(0);" class="btn" onClick={this.addBoard}>
            글 쓰기
          </a>
        </div>
      </div>
    );
  }
}

export default BoardListComponent;

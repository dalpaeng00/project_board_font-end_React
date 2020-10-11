import React, { Component } from "react";
import "../../App.css";
import ApiService from "../../ApiService";

class BoardDetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardIdx: "",
      title: "",
      contents: "",
      hitCnt: "",
      creatorId: "",
      createdDatetime: "",
    };
  }

  componentDidMount() {
    this.fetchBoard();
  }

  goChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fetchBoard = () => {
    let paraBoardIdx = this.props.match.params.boardIdx;

    ApiService.fetchBoard(paraBoardIdx)
      .then((res) => {
        this.setState({
          boardIdx: res.data.boardIdx,
          title: res.data.title,
          contents: res.data.contents,
          hitCnt: res.data.hitCnt,
          creatorId: res.data.creatorId,
          createdDatetime: res.data.createdDatetime,
        });
      })
      .catch((err) => {
        console.log("fetchBoard() Error!!!", err);
      });
  };

  updateBoard = (e) => {
    e.preventDefault();

    ApiService.updateBoard(this.state)
      .then((res) => {
        console.log("insertBoard() successfully!!");
        this.props.history.push("/board");
      })
      .catch((err) => {
        console.log("insertBoard() error!!", err);
      });
  };

  deleteBoard = (e) => {
    e.preventDefault();
    let paraBoardIdx = this.props.match.params.boardIdx;

    ApiService.deleteBoard(paraBoardIdx)
      .then((res) => {
        console.log("deleteBoard() sucessfully!!");
        this.props.history.push("/board");
      })
      .catch((err) => {
        console.log("deleteBoard() Error!!");
      });
  };

  fetchBoardList = () => {
    this.props.history.push("/board");
  };

  render() {
    let { ...board } = this.state;
    return (
      <div>
        <form id="frm">
          <table class="board_detail">
            <colgroup>
              <col width="15%" />
              <col width="35%" />
              <col width="15%" />
              <col width="35%" />
            </colgroup>
            <caption>게시글 상세내용</caption>
            <tbody>
              <tr>
                <th scope="row">글 번호</th>
                <td>{board.boardIdx}</td>
                <th scope="row">조회수</th>
                <td>{board.hitCnt}</td>
              </tr>
              <tr>
                <th scope="row">작성자</th>
                <td>{board.creatorId}</td>
                <th scope="row">작성일</th>
                <td>{board.createdDatetime}</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colspan="3">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.goChange}
                  />
                </td>
              </tr>
              <tr>
                <td colspan="4" class="view_text">
                  <textarea
                    id="contents"
                    name="contents"
                    value={this.state.contents}
                    onChange={this.goChange}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.fetchBoardList}>목록가기</button>
          <button onClick={this.updateBoard}>저장</button>
          <button onClick={this.deleteBoard}>삭제</button>
        </form>
      </div>
    );
  }
}

export default BoardDetailComponent;

import React, { Component } from "react";
import "../../App.css";
import ApiService from "../../ApiService";

class BoardWriteComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      contents: "",
    };
  }

  goChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();

    let { ...board } = this.state;

    ApiService.insetBoard(board)
      .then((res) => {
        console.log(`[${this.state.title}]가 성공적으로 등록되었습니다.!`);
        this.props.history.push("/board");
      })
      .catch((err) => {
        console.log("saveUser() Error!!!", err);
      });
  };

  fetchBoardList = () => {
    this.props.history.push("/board");
  };
  render() {
    return (
      <div>
        <div class="container">
          <h2>게시글 등록</h2>
          <form id="frm" name="frm">
            <table class="board_detail">
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.goChange}
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea
                    id="contents"
                    name="contents"
                    onChange={this.goChange}
                  ></textarea>
                </td>
              </tr>
            </table>
            <button onClick={this.saveUser}>저장</button>
            <button onClick={this.fetchBoardList}>목록가기</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BoardWriteComponent;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardListItem(props) {
    let history = useNavigate();

    const onDeleteItem = () => {
        if (window.confirm("선택한 게시글을 삭제하시겠습니까?")) {
            axios.get('http://localhost:8080/boardDelete/' + props.board.bNo)
                .then(
                    () => {
                        history('/boardList');
                        window.location.reload();
                        // reload 하지 않으면
                        // DB에서는 삭제되지만 현재 화면은 안 바뀜
                        // 삭제한 내용을 화면에 바로 반영하기 위해서 reload 추가
                    }
                ).catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Link to={"/boardDetail/" + props.board.bNo}>{props.board.bNo}</Link>
            {props.board.memEmail}
            {props.board.bTitle}
            {props.board.bContent}
            {props.board.bWriteDate}
            {props.board.feelNo}
            <Link to={"/boardUpdate/" + props.board.bNo}>수정</Link>
            <button onClick={onDeleteItem}>삭제</button>
        </div>
    );
};

export default BoardListItem;
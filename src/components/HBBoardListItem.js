import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HBBoardListItem = (props) => {
    let history = useNavigate();

    return (
        <div>
            <Link to={"/hbBoardDetail/" + props.hb_board.hb_bNo}>{props.hb_board.hb_bNo}</Link>
            {props.hb_board.memEmail}
            {props.hb_board.hb_bTitle}
            {props.hb_board.hb_bContent}
            {props.hb_board.hb_bWriteDate}
            {props.hb_board.feelNo}
            {props.hb_board.hbNo}
        </div>
    );
};

export default HBBoardListItem;
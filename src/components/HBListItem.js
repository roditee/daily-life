import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from "../../node_modules/moment/moment";
import './HBList.css';
import './HBListItem.css';

// 한 행
function HBListItem(props) {
    let history = useNavigate();

    // const onDeleteItem = () => {
    //     if (window.confirm("삭제하시겠습니까?")) {
    //         axios.get('http://localhost:8080/HBDelete'+props.HB.hbNo)
    //             .then(
    //                 () => {
    //                     history('/HBList');
    //                     window.location.reload(); // 현재 화면은 안바뀜
    //                 }
    //             ).catch(err => console.log(err));
    //     }
    // }
    
    // const today = moment.format('YYYY-MM-DD')
    const today = new moment().format('YYYY-MM-DD')

    console.log(today)
    const endDate = [props.HB.hbEndDate]
    console.log(endDate)


    function dateCheck(e) {
        if (today < endDate) {
        console.log("아직 남았다")
            alert("아직 기간이 남았습니다.")
            //history('/')
            return false;
        } else {
        console.log("지났다")
    }
    }


    return (
        <div className="hbBListItem">
            <Link to={"/HBBoardList/"+ props.HB.hbNo} onClick={dateCheck}>
                <div className="hb">
                <h5>Daily-Life</h5>
                {/* <tr>{props.HB.hbNo}</tr> */}
                <h4>{props.HB.hbName}</h4>
                {/* <tr>{props.HB.hbStartDate}</tr> */}
                <p>{props.HB.hbEndDate}</p>
                {/* <tr>{props.HB.memEmail}</tr> */}
                </div>
            </Link>
            <div className="btnDiv">
                <Link to={"/HBBoardInsert/" + props.HB.hbNo}><input type="submit" className='btn1' value="행복담기" /></Link>
                <Link to={"/HBUpdate/" + props.HB.hbNo}><input type="submit" className='btn2' value="수정" /></Link>
            </div>
        </div>
    );
}

export default HBListItem;
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"이미선",
        comment:"추석 연휴 잘 보내세요.",
    },
    {
        name:"김유나",
        comment:"송편 많이 먹어야지.",
    },
    {
        name:"박지예",
        comment:"귀경길은 항상 조심.",
    },
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return(<Comment name={comment.name} comment={comment.comment} />);
                })
            }
        </div>
    );
}

export default CommentList;
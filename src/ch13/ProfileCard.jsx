import React from "react";
import Card from "./Card";

function profileCard() {
    return(
        <div>
            <Card title="Elphie Lee" backgroundColor="#3cb371">
                <p>안녕하세요. 이미선입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="Lola" backgroundColor="#f0fff0">
                <p>안녕하세요. 롤라입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="Charlie" backgroundColor="#8fbc8f">
                <p>안녕하세요. 찰리입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>
    );
}

export default profileCard;
import React from "react";
import "./AttendanceCard.css"
import jpg1 from "./imgs/jpg1.jpg"

const students = [
    {id:1, name:"이승주", grade:4, major:"인공지능소프트웨어", avatar: jpg1},
    {id:2, name:"한지상", grade:3, major:"전기", avatar: "https://randomuser.me/api/portraits/men/2.jpg"},
    {id:3, name:"박은태", grade:3, major:"그린에너지", avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"홍광호", grade:4, major:"시각디자인", avatar: "https://randomuser.me/api/portraits/men/4.jpg"},
    {id:5, name:"박강현", grade:2, major:"인공지능소프트웨어", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"이충주", grade:2, major:"시각디자인", avatar: "https://randomuser.me/api/portraits/men/6.jpg"},
    {id:7, name:"양희준", grade:1, major:"메타버스", avatar: "https://randomuser.me/api/portraits/men/7.jpg"},
    {id:8, name:"강홍석", grade:3, major:"최강", avatar: "https://randomuser.me/api/portraits/men/8.jpg"},
    {id:9, name:"전동석", grade:2, major:"인공지능소프트웨어", avatar: "https://randomuser.me/api/portraits/men/9.jpg"}
];

function attendanceCard() {
    return (
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student) => (
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar"/>
                            <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default attendanceCard;
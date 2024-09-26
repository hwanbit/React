import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message : "안녕하세요~ 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message : "현재 수업중인 웹프로그래밍활용 수업을 열심히 들으세요!!!",
    },
    {
        id : 3,
        message : "열심히 듣고 Git에 Commit한 후에 하교하시면 됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => { //괄호 안의 내용 실행
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer); //interval 중지
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((notification) => { //첫번째 것을 덮어 두번째 것이 나타남
                        return <Notification
                            key = {notification.id}
                            id = {notification.id}
                            message={notification.message} />;
                    })
                }
            </div>
        );
    }
}

export default NotificationList;
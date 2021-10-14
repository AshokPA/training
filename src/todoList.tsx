import React from 'react';
import moment from "moment";

const ToDoList = (props: any) => {

    const {todoApp} = props;
    console.log('props', );
    return (
        <li key={todoApp.id}>{todoApp.name} {moment(todoApp.time * 1000).format('LLL')}</li>
    );
};
export default ToDoList

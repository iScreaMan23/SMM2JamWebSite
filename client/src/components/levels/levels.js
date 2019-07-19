import React, { useState  } from 'react';
import './levels.css';
import { useFetch } from './../hooks.js';



function Levels ()  {
    const [levels, loading] = useFetch(
        "/api/KaizoLevels"
    );

    const levelStyle = {
        listStyle: "none",
    };

    const listElement = {
        cssFloat: "right"
    };

    return (
        <>
            <h1>Kaizo Levels</h1>
            {loading ? (
                "Loading..."
            ) : (
                <ul>
                    {levels.map(({ title, course_id, userName }) => (
                        <ul >
                            <li key={`localLevelID${course_id}`} style={ levelStyle } >
                                <li style={listElement}>Author: {userName}</li>
                                <li style={listElement}>Title: {title}</li>
                                <li style={listElement}>levelID: {course_id}</li>
                            </li>
                        </ul>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Levels;
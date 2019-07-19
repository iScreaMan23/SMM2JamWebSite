import React, { useState  } from 'react';
import './levels.css';
import { useFetch } from './../hooks.js';

function Levels ()  {
    const [levels, loading] = useFetch(
        "/api/KaizoLevels"
    );
    return (
        <>
            <h1>Levels</h1>
            {loading ? (
                "Loading..."
            ) : (
                <ul>
                    {levels.map(({ title, course_id, userName }) => (
                        <ul>
                            <li key={`localLevelID${course_id}`}>
                                <li>{userName}</li>
                                <li>{title}</li>
                                <li>{course_id}</li>
                                <li>   </li>
                            </li>
                        </ul>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Levels;
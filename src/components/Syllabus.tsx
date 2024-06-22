import React from "react";

const Syllabus = () => {
    return (
        <div className="section">
            <h2>Syllabus</h2>
            <div className="syllabus-section">
                <h3>Maths Syllabus</h3>
                <ul>
                    <li>Class 1: Shapes and Sizes, Number System, Addition, Subtraction, Time, Money, Measurement, Patterns.</li>
                    <li>Class 2: Lines and Shapes, Number system, Addition, Subtraction, Time, Money, Measurement, Patterns.</li>
                    <li>Class 3: Basic Geometric Shapes, Number System, Addition & Subtraction, Multiplication & Division, Fractions, Measurement, Time & Calendar, Data Handling.</li>
                    {/* <!-- Add more classes as needed --> */}
                </ul>
            </div>
            <div className="syllabus-section">
                <h3>Science Syllabus</h3>
                <ul>
                    <li>Class 1: Me and My Body, Plants around Us, Animals around Us, Living and Non-Living, Our Needs, Good Habits, Earth and Sky, Transport.</li>
                    <li>Class 2: Festival and Celebration, The Night Sky, Food, Clothing and Shelter, Transport and Communication, Know Your Body, Occupation, Good Habits and Safety Rule, Plants around Us, Animals around Us, Air, Water and Weather.</li>
                    {/* <!-- Add more classes as needed --> */}
                </ul>
            </div>
            {/* <!-- Add syllabus for other subjects --> */}
        </div>
    );
};

export default Syllabus;

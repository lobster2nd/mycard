import classNames from "classnames";
import "./MyCard.css"
import { useState } from "react";

export const MyCard = () => {
    const [active, setActive] = useState(false)

    return (
        <>
            <div className={classNames("card", active ? "active" : '')}>
                <div className={classNames("header")}>
                    <div className={classNames("title")}>Dog</div>
                    <div className={classNames("subtitle")}>it's a dog</div>
                </div>
                <div className={classNames("body")}>
                    <img src="./img/img1.jpg" alt="dog" />
                    <div className={classNames("text")}>A dog is a domesticated carnivorous mammal that belongs to the Canidae family. It is known for its loyalty, companionship, and has been a popular pet for centuries. Dogs come in various breeds, each with its own unique characteristics, sizes, shapes, and temperaments. They have a highly developed sense of smell and hearing, making them excellent at detection, hunting, and working roles. Dogs are social animals and form strong bonds with humans, often becoming part of families. They possess a wide range of skills and are used for various tasks, including guarding, herding, and assisting people with disabilities. Additionally, dogs are known for their playful nature and provide joy and emotional support to their owners.</div>

                </div>
                <button
                    onClick={() => setActive(!active)}
                >Click me!</button>
            </div>
        </>
    )
}
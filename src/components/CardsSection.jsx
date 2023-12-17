import { image1, image2, image3 } from "../assets";
import Card from "./Card";
import { useGlobalContext } from "./InputContext";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const CardsSection = () => {
    const cards = [];
    const images = [image1, image2, image3];

    const { numberOfCards } = useGlobalContext();


    [...Array(numberOfCards)].forEach(() => {
        let data = {
            image: images[getRandomInt(3)],
            title: "This is a one line title",
            description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
            price: (getRandomInt(300) + 300) * getRandomInt(3),
            discount: getRandomInt(300) * getRandomInt(2),
            time: getRandomInt(30) + 10,
            people: getRandomInt(1000),
            saves: getRandomInt(1000)
        }
        cards.push(data);
    })

    return (
        <>
            {cards.map((card, i) => (
                <Card key={i} data={card} />
            ))}
        </>
    )
}

export default CardsSection;
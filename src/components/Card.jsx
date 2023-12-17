import { clock, people, save } from '../assets';
import CardFooterInfo from './CardFooterInfo';
import './card.css';

const Card = ({data}) => {
    return (
        <div className='flex flex-col w-72 card'>
            <img
                src={data.image}
                alt="Card"
            />

            <div className='mx-4 mt-2'>
                <h2 className='font-medium text-xl text-gray-900'>
                    {data.title}
                </h2>
                <p className='text-base text-gray-700'>
                    {data.description}
                </p>
            </div>

            <div className='flex justify-between mx-4 my-2'>
                <span>
                    {data.price > 0 ? 
                        <span 
                            className={
                                (data.discount > 0 && data.price > 0) 
                                ? "line-through" : 
                                'color_text'
                            }> 

                            ${data.price} 
                        </span>
                    : 
                        <span className='color_text'>
                            FREE
                        </span>
                    }
                </span>

                {(data.discount > 0 && data.price > 0) &&
                    <>
                        <span className='color_text'>
                            { `$${data.price - data.discount  }`}
                        </span>
                        <span className='styles.discount'>
                            You Save ${data.discount}
                        </span>
                    </>
                }
            </div>

            <hr/>

            <div className='flex mx-4 my-3'>
                <CardFooterInfo count={data.time} image={clock} hrs/>
                <CardFooterInfo count={data.people} image={people}/>
                <CardFooterInfo count={data.saves} image={save}/>
            </div>
        </div>
    )
}

export default Card
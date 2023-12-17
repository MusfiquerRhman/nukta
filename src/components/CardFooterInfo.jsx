const CardFooterInfo = ({count, image, hrs}) => {
    return (
        <span className='flex mr-4 gap-1 text-sm text-gray-500'>
            <img className="w-4" src={image} alt='clock icon'/>
            {count} {hrs && 'hrs'}
        </span>
    )
}

export default CardFooterInfo
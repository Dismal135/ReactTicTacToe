const Square = ({value, onSquareClick, classname}) => {
    return <button className={classname} onClick={onSquareClick}>{value}</button>;
}

export default Square;
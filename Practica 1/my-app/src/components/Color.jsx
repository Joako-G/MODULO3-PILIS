const Color = ( {name, hex, id}) => {
    return (
        <div className="color-square" style={{ backgroundColor: hex}}>
            <h2> ID: {id} {name} </h2>
        </div>
    );
}

export default Color;
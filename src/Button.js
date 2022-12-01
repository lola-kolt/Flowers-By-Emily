import './App.css';

function Button({myBtnProps}) {
    return(
        <div className="heading">
            <button onClick={() => myBtnProps('Flowers')} className="btn">Flowers</button>
            <button onClick={() => myBtnProps('Plants')} className="btn">Plants</button>
            <button onClick={() => myBtnProps('Letterbox')} className="btn">Letterbox flowers</button>
            <button onClick={() => myBtnProps('Luxury')} className="btn">Luxury flowers</button>
            <button onClick={() => myBtnProps('Gifts')} className="btn">Gifts</button>
        </div>
    );
}

export default Button;
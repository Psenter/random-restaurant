export default function Header() {
    return (
        <div className="bg-lightblue">
            <div className="container justify-content-center text-center pb-3 bg-lightblue">
                <img src={'img/icon.PNG'} className="small-icon" />
                <div className='row'>
                    <div className='col'>Hours open:<br></br>Mon: 11am - 9pm  Tues: 11am - 9pm<br></br>Wed: 11am - 9pm  Thur: 11am - 9pm<br></br>Fri: 12am - 12pm Sat: 12am - 12pm<br></br>Sun: 10am - 7pm</div>
                    <div className='col'>Location:<br></br>348 E Main St, Lexington, KY</div>
                </div>
            </div>
        </div>
    );
}
import './App.css';
import mapIcon from './map.png';
import phone from './phone.png';

function Contact() {
    return(
        <div className="container contact-page">
            <div className='heading'>
                <h1>Contact Us</h1>
            </div>
            <div className='hours-wrap'>
                <h3 className='heading'>Our Hours</h3>
                
                <div className="hours">

                    <div className="working-hours">
                        <p>Mon: 10:00 am  to  6:00 pm</p>
                        <p>Wed: 10:00 am  to  6:00 pm</p>
                        <p>Fri: 10:00 am  to  6:00 pm</p>
                    </div>

                    <div className="working-hours">
                        <p>Tues: 10:00 am  to  6:00 pm</p>
                        <p>Thurs: 10:00 am  to  6:00 pm</p>
                        <p>Sat: 10:00 am  to  6:00 pm</p>
                    </div>
                </div>

                <div className="address">
                    <div className='flex'>
                        <img src={mapIcon} alt="mapIcon" />
                        <p className='address-text'>4927 W. 112th Place Leawood KS 56789</p>
                    </div>
                    <div className='flex'>
                        <img src={phone} alt="phoneIcon" />
                        <p className='address-text'>910-367-1234</p>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <form>
                    <div className='inputField'>
                        <div className='address'>
                            <label>Name:</label>
                            <input type="text" placeholder="Name..." />
                        </div>

                        <div className='address'>
                            <label>Email:</label>
                            <input type="email" placeholder="Email..." />
                        </div>

                        <div className='address'>
                        <label>Telephone:</label>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Phone...'/>
                        </div>
                        
                    </div>

                    <div className='address inputField message'>
                        <label>Message:</label>
                        <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
                    </div>

                    <div className='address'>
                        <button className='btn-submit'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Contact;
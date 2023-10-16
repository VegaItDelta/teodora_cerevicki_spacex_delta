import rocket from './images/rocket_launch.svg';

export default function Post(props) {
    return (
        <section className="card">
            <header>
                <img className='image' alt='rocket' src={rocket} />
                <h1 className="title">id {props.mission_name}</h1>
            </header>

            <div className='content'>
                <p className="">{props.launch_date_utc}</p>
                <p>{props.details}</p>
            </div>
        </section>
    )   
}
import './Filter.css'
export function Filter (){
    return(
        <section className="ContainerFilter">
            <div>
                <input className="Input" type="radio" id="All"></input>
                <label htmlFor="id">All</label>
            </div>

            <div>
                <input className="Input" type="radio" id="Completed"></input>
                <label htmlFor="completed">Completed</label>
            </div>

            <div>
                <input className="Input" type="radio" id="Pending"></input>
                <label htmlFor="pending">Pending</label>
            </div>
        </section>
    )
}
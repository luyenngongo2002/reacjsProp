import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
const Controller = () => {

    return (
        <div className="container">
            <Header />
            <br />
            <section>
                <div className="row">
                    <Left />
                    <Right />
                </div>
            </section>
        </div>
    )
}
export default Controller;
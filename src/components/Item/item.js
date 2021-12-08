import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css"

function Item() {
    return <>
        <div className="card" style="width: 18rem;">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="btn btn-primary" href="#">Go somewhere</a>
            </div>
        </div>
    </>;
}

export default Item;
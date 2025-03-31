import './Tree.css';

function Tree(tree) {
    return (
        <section className="tree">
            <h3>{tree.name}</h3>
            <p>{tree.description}</p>
            <img src={tree.image} alt={tree.name}></img>
        </section>
    );
}

export default Tree;

export default function Die(props) {
    let color;
    const styles = {
        backgroundColor: props.isHeld === true ? "#59E391" : "white"
    }
    return (
        // <div onClick={() => props.onClick(props.id)} style={styles} className="dieEach">{props.value}</div >
        <div onClick={props.onClick} style={styles} className="dieEach">{props.value}</div >
    )
}
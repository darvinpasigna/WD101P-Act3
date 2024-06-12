import Shoes from "./Shoes";
import Gadget from "./Gadget";


function Two() {
    let selectedchoice = sessionStorage.getItem('choice');

    let shoeFunc = () => {
        let choice = document.getElementById('shoes').innerText;
        sessionStorage.setItem('choice',choice);
        window.location.reload();
    }

    let gadFunc = () => {
        let choice = document.getElementById('gadget').innerText;
        sessionStorage.setItem('choice',choice);
        window.location.reload();
    }

    let condition = selectedchoice == "Shoes";
    return(
        <>
        <div style={{display: "flex", justifyContent: "center", padding: "10px", backgroundColor: "antiquewhite", marginBottom: "30PX"}}>
        <button style={{background: "skyblue", margin: "10px", borderRadius: "5px"}} id='shoes' onClick={shoeFunc}>Shoes</button>
        <button style={{background: "lightgray",  margin: "10px", borderRadius: "5px"}} id='gadget' onClick={gadFunc}> Gadget</button>
        </div>

        {condition ? <Shoes/> : <Gadget/> }
        </>
    )
}

export default Two;
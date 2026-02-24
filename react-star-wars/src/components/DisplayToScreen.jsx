function DisplayToScreen(props){
    function test(){
        console.log("TESTING")
    }
    return(
        <div>
            <li>{props.name}</li>
            <h1>TEST</h1>
            {test()}
        </div>
    )
}

export default DisplayToScreen
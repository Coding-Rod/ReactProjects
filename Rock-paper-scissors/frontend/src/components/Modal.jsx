const POST_API_URL = 'http://localhost:8000/classify-image'

function Modal({ show, setShow }){

    if (!show){
        return (<></>)
    }

    const handleClick = () => {
        setShow(false)
    }

    return (<div className="modal">
        <h1>Modal Title</h1>
        <button onClick={handleClick}
        >x</button>
        <div className="modal__content">
            <form action={POST_API_URL} method="post">
                <div>
                    <label>Upload an image</label>
                    <input type="file" name="file" id="file" />
                </div>
                <button type="submit"></button>
            </form>
        </div>
    </div>)
}

export { Modal }
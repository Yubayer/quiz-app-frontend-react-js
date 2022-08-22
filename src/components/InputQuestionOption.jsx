

function InputQuestionOption({ handleOptionCheck, option, ...rest }) {

    return (
        <>
            <div className="card mb-2">
                <div className="card-body input-group">
                    <div className="col-md-8">
                        <label className="form-label">{option.name}</label>
                        <input
                            name={option.name}
                            value={option.option}
                            {...rest} />
                    </div>
                    <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                        <label className="form-label">Set Answer</label>
                        <select onChange={handleOptionCheck} name={option.name} id="inputState" className="form-select">
                            <option selected={option.check ? true : false} value='true'>True</option>
                            <option selected={!option.check ? true : false} value='false'>False</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputQuestionOption
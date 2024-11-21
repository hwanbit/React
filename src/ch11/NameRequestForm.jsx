import React, {useState} from "react";

function NameRequestForm(props) {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [fruits, setFruits] = useState('수박');
    const [file, setFile] = useState('');

    const handleSubmit = (event) => {
        alert(`입력한 이름 : ${name}\n상세 입력사항 : ${details}\n선택한 과일 : ${fruits}\n선택한 파일 : ${file}`);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name" :
                setName(target.value.toUpperCase());
                break;
            case "details" :
                setDetails(target.value);
                break;
            case "fruits" :
                setFruits(target.value);
                break;
            case "file" :
                setFile(target.value);
                break;
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <label>
                성명 :
                <input id="name" type="text" value={name} onChange={handleChange}/>
            </label>
            <br/><br/>
            <label>
                요청사항 :
                <textarea id="details" value={details} onChange={handleChange}/>
            </label>
            <br/><br/>
            <label>
                좋아하는 과일 선택 :
                <select id="fruits" value={fruits} onChange={handleChange}>
                    <option>사과</option>
                    <option>바나나</option>
                    <option>포도</option>
                    <option>수박</option>
                </select>
                <br/><br/>
            </label>
            <br/><br/>
            <label>
                파일 선택 :
                <input id="file" type="file" value={file} onChange={handleChange}/>
            </label>
            <br/><br/>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameRequestForm;
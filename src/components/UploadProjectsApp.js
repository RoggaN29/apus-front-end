import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

export const UploadProjectsApp = () => {

    const [value, setValue] = useState(RichTextEditor.createEmptyValue());
    const [valueTest, setValueTest] = useState(RichTextEditor.createEmptyValue());
    
    const onChange = (value) => {
        setValue(value);
    };

    return (
        <div className="animate__animated animate__fadeIn">

            <div className="input-wrapper">
                <label>Project name:</label>
                <input placeholder="Enter project name"/>
            </div>

            <div className="input-wrapper">
                <label>Project description:</label>
                <RichTextEditor
                    value={value}
                    onChange={onChange}
                />
            </div>

            <div className="input-wrapper">
                <label>Project scope:</label>
                <RichTextEditor
                    value={valueTest}
                />
            </div>

            <div className="input-wrapper">
                <label>Support model:</label>
                <RichTextEditor
                    value={valueTest}
                />
            </div>

            <div className="input-wrapper">
                <label>Special Instructions:</label>
                <RichTextEditor
                    value={valueTest}
                />
            </div>

            <div className="input-wrapper">
                <label>Complexity:</label>
                <select>
                    <option>Simple</option>
                    <option>Custom</option>
                    <option>Custom2</option>
                </select>
            </div>

            <button>Siguiente</button>
        </div>
    )
}
import { marked } from 'marked';
import { useEffect, useRef } from 'react';
export const DisplayArea = ({ currentCode }) => {
    const markedText = useRef(null);
    useEffect(()=>{
        let html = marked.parse(currentCode);
        markedText.current.innerHTML = html;
    },[currentCode])
    return (
        <section id="preview">
            <pre>
            <code ref={markedText}>
               {currentCode}
            </code>
            </pre>
        </section>
    );
}

export default DisplayArea;
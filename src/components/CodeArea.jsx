export const CodeArea = ({currentCode, changeCode}) => {
    return (
        <form>
            <label htmlFor="editor"><p id="title">MarkdownReviewer2000.exe</p></label>
            <textarea id="editor" value={currentCode} onChange={(e) => changeCode(e.target.value)} name="editor" rows='4' cols='50'>
                Hello there!
            </textarea>
        </form>
    );
}

export default CodeArea;
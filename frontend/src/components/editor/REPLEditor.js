import React from 'react';
import './REPLEditor.css';
import Editor from "@monaco-editor/react";

const REPLEditor = ({
    language,
    setLanguage,
    code,
    handleEditorChange,
    handleEditorDidMount,
    handleEditorValidation,
    isDarkMode,
    isRunning,
    handleExecute,
    handleSaveAndShare,
    shareLink}) => {
    return(
        <>
            <div className="repl-editor">
                <div className="editor-controls">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="repl-select"
                    >
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="python3">Python</option>
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value="bash">Bash</option>
                    </select>

                    <button
                        onClick={handleExecute}
                        disabled={isRunning}
                        className="repl-button"
                    >
                        {isRunning ? 'Running...' : 'Run'}
                    </button>
                </div>
                <div className="monaco-editor-container">
                    <Editor
                        height="100%"
                        language={language}
                        defaultValue="//write code here ..."
                        value={code}
                        theme={isDarkMode ? "vs-dark" : "light"}
                        onChange={handleEditorChange}
                        onMount={handleEditorDidMount}
                        onValidate={handleEditorValidation}
                        options={{
                            minimap: { enabled: false }
                        }}
                        loading={<div>Loading editor...</div>}
                    />

                    {/* <textarea
                        className="repl-editor-textarea"
                        value={code}
                        onChange={(e) => handleEditorChange(e.target.value)}
                        spellCheck="false"
                        style={{
                            height: "100%",
                            width: "100%",
                            resize: "none",
                            padding: "1rem",
                            fontFamily: "monospace",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                            color: isDarkMode ? "#d4d4d4" : "#000000",
                            border: "1px solid",
                            borderColor: isDarkMode ? "#404040" : "#dee2e6",
                            borderRadius: "4px",
                            outline: "none"
                        }}
                    /> */}
                </div>

                <div className="bottom-controls">
                    
                    <button
                        onClick={handleSaveAndShare}
                        className="repl-button"
                    >
                        Save & Share
                    </button>
                </div>
            </div>

            {shareLink && (
                <div className="share-link-container">
                    <p>Share your code with this link:</p>
                    <input
                        type="text"
                        value={shareLink}
                        readOnly
                        className="share-link-input"
                    />
                </div>
            )}
        </>
    ); 
};

export default REPLEditor;
import React from 'react';
import styles from './editor.module.css'

const Editor = (props) => {
    
    return(
        <section className={styles.editor}>
            <h1 className={styles.editorTitle}>
                Card Editor
            </h1>
        </section>
    );
};

export default Editor;
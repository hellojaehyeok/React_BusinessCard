import React, { memo } from 'react';
import styles from './editorForm.module.css';

const EditorForm = memo(
    ({FileInput, card, updateCard, deleteCard}) => {

        const {name, company, job, email, introduce, fileName} = card;
    
        const onChange = (e) => {
            if(e.currentTarget == null){
                return;
            }
            e.preventDefault();
            updateCard({
                ...card,
                [e.currentTarget.name]: e.currentTarget.value,
            })
        }
    
        const onSubmit = () => {
            deleteCard(card);
        }
    
        const onFileChange = (data) => {
            updateCard({
                ...card,
                fileName: data.name,
                fileURL: data.url
            })
        }
    
        return(
            <form className={styles.editorForm}>
                <div>
                    <input
                        type="text"
                        onChange={onChange}
                        name="name"
                        value={name}
                        placeholder="이름을 입력하세요"
                        className={styles.name}
                    />
                    <input
                        type="text"
                        onChange={onChange}
                        name="company"
                        value={company}
                        placeholder="회사를 입력하세요"
                        className={styles.company}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={onChange}
                        name="job"
                        value={job}
                        placeholder="직업을 입력하세요"
                        className={styles.job}
                    />
                    <input
                        type="email"
                        onChange={onChange}
                        name="email"
                        value={email}
                        placeholder="이메일을 입력하세요"
                        className={styles.email}
                    />
                </div>
                <div>
                    <textarea
                        onChange={onChange}
                        name="introduce"
                        placeholder="정보를 입력해주세요"
                        value={introduce}
                    ></textarea>
                </div>
                <div>
                    <FileInput name={fileName} onFileChange={onFileChange}/>
                    <button onClick={onSubmit}>삭제</button>
                </div>
            </form>
        );
    }
);

export default EditorForm;
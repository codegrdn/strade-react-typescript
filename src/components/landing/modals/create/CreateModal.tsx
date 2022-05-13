import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FC, SyntheticEvent, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { validateEmail } from '../../../../helpers/validation';
import { AuthContext } from '../../../global/auth/context/AuthContext';
import { LandingContext } from '../../context/LandingContext';

interface CreateModalProps {

}

const CreateModal: FC<CreateModalProps> = () => {
    const { auth: authContext } = useContext(AuthContext);
    const {createModal} = useContext(LandingContext);
    const { t } = useTranslation();
    const [typePasswordIntput, setTypePasswordIntput] = useState('password');
    const [classesEye, setClassesEye] = useState('show-icon show-icon--line');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    function handleChangeTypePasswordInput (e: any) {
        setClassesEye(typePasswordIntput === 'password' ? "show-icon show-icon--line visually-hidden" : "show-icon show-icon--line");
        setTypePasswordIntput(typePasswordIntput === 'password' ? "text" : "password");
    }

    function handleToggleModal(e: any) {
        setIsError(false);
        setErrorMessage('');
        setPassword('');
        setEmail('');
        createModal.toggleModal();
    }

    function handleCreateUser (e: SyntheticEvent) {
        e.preventDefault();
        
        setIsError(false);
        setErrorMessage('');

        if (!validateEmail(email)) {
            setIsError(true);
            setErrorMessage(t('error.global.not-valid-email'));
            return;
        }

        if (!password) {
            setIsError(true);
            setErrorMessage(t('error.global.empty-password'));
            return;
        }

        if (email && password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    authContext.login(user);
                    setPassword('');
                    setEmail('');
                    createModal.toggleModal();
                })
                .catch((error) => {
                    setIsError(true);
                    setErrorMessage(t('error.firebase.' + error.code.replaceAll('/', '-')))
                })
        }
    }

    return (
        <div className={"modal" + (createModal.show ? " modal--active" : " ")}>
            <div className="modal__inner modal--exit" onClick={handleToggleModal}></div>
            <div className="modal__content">
                <div className="modal__close-btn modal--exit" onClick={handleToggleModal}></div>
                <div className="modal__title">{ t('landing.modals.create.title').toUpperCase() }</div>
                <div className="modal__form">
                    <form className="form" method="post" onSubmit={handleCreateUser}>
                        <div className="form__group modal__form-group">
                            <label className="form__label modal__form-label" htmlFor="email">{ t('landing.modals.create.form.email') }</label>
                            <input
                                className={"form__input modal__form-input " + (isError ? 'error__input' : '')}
                                value={email}
                                onChange={(e: any) => { setEmail(e.target.value) }}
                                type="email"
                                id="email"
                                placeholder={ t('landing.modals.create.form.email') }
                                autoComplete="username"
                            />
                        </div>
                        <div className="form__group modal__form-group">
                            <label className="form__label modal__form-label" htmlFor="password">{ t('landing.modals.create.form.password') }</label>
                            <div className="form__input-wrap modal__form-input-wrap">
                                <input
                                    className={"form__input modal__form-input " + (isError ? 'error__input' : '')}
                                    value={password}
                                    onChange={(e: any) => { setPassword(e.target.value) }}
                                    type={typePasswordIntput}
                                    id="password"
                                    placeholder={ t('landing.modals.create.form.password') }
                                    autoComplete="current-password"
                                />
                                    <div className="show-icon-wrap js-show-icon" onClick={handleChangeTypePasswordInput}>
                                        <svg className="show-icon" width="20" height="20">
                                            <use xlinkHref="#eye-icon"></use>
                                        </svg>
                                        <svg className={classesEye} width="20" height="20">
                                            <use xlinkHref="#line-icon"></use>
                                        </svg>
                                    </div>
                            </div>
                        </div>

                        {
                            isError
                            && <div className="modal__text-wrap error__wrap">
                                <div className="modal__text error__modal__text">{ errorMessage }</div>
                            </div>
                        }

                        <div className="modal__text-wrap">
                            <div className="modal__text">
                                <p>{ t('landing.modals.create.description') }</p>
                                <p>
                                    <a className="modal__link" href="/#">{ t('landing.modals.create.terms-of-service') }</a> &amp; <a className="modal__link" href="/#">{ t('landing.modals.create.privacy-policy') }</a>
                                </p>
                            </div>
                        </div>

                        <button className="form__submit modal__form-submit btn btn--blue" type="submit">{ t('landing.modals.create.sign-up') }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;
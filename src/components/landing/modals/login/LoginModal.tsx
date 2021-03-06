import { FC, SyntheticEvent, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LandingContext } from '../../context/LandingContext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { AuthContext } from '../../../global/auth/context/AuthContext';
import { validateEmail } from '../../../../helpers/validation';

interface LoginModalProps {

}

const LoginModal: FC<LoginModalProps> = () => {
    const { auth: authContext } = useContext(AuthContext);
    const {loginModal, createModal} = useContext(LandingContext);
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

    function handleCreateModal (e: any) {
        e.preventDefault();
        
        setIsError(false);
        setErrorMessage('');
        loginModal.toggleModal();
        createModal.toggleModal();
    }

    function handleToggleModal(e: any) {
        setIsError(false);
        setErrorMessage('');
        setPassword('');
        setEmail('');
        loginModal.toggleModal();
    }

    function handleUserLogin (e: SyntheticEvent) {
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
            signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    authContext.login(user);
                    setPassword('');
                    setEmail('');
                    loginModal.toggleModal();
                })
                .catch((error) => {
                    setIsError(true);
                    setErrorMessage(t('error.firebase.' + error.code.replaceAll('/', '-')))
                })
        }
    }

    return (
        <div className={"modal" + (loginModal.show ? " modal--active" : " ")}>
            <div className="modal__inner modal--exit" onClick={handleToggleModal}></div>
            <div className="modal__content">
                <div className="modal__close-btn modal--exit" onClick={handleToggleModal}></div>
                <div className="modal__title">{ t('landing.modals.login.title') }</div>
                <div className="modal__form">
                <form className="form" method="post" onSubmit={handleUserLogin}>
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="email-1">{ t('landing.modals.login.form.email') }</label>
                        <input
                            className={"form__input modal__form-input " + (isError ? 'error__input' : '')}
                            value={email}
                            onChange={(e: any) => { setEmail(e.target.value) }}
                            type="email"
                            id="email-1"
                            placeholder={ t('landing.modals.login.form.email') }
                            autoComplete="username" />
                    </div>
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="password-1">{ t('landing.modals.login.form.password') }</label>
                        <div className="form__input-wrap modal__form-input-wrap">
                            <input 
                                className={"form__input modal__form-input " + (isError ? 'error__input' : '')}
                                value={password}
                                onChange={(e: any) => { setPassword(e.target.value) }}
                                type={typePasswordIntput}
                                id="password-1" 
                                placeholder={ t('landing.modals.login.form.password') } 
                                autoComplete="current-password" />
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

                    <div className='error__wrap'>
                        { isError && <div className="modal__text error__modal__text">{ errorMessage }</div> }
                    </div>

                    <button className="form__submit modal__form-submit btn btn--blue" type="submit">{ t('landing.modals.login.log-in') }</button>

                    <div className="modal__text-wrap text-center">
                        <div className="modal__text">{ t('landing.modals.login.have-account') } <a className="modal__link modal--exit" href="#!" data-modal="modal-2" onClick={handleCreateModal}> { t('landing.modals.login.sign-up') }</a></div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;
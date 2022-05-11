import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LandingContext } from '../../context/LandingContext';

interface LoginModalProps {

}

const LoginModal: FC<LoginModalProps> = () => {
    const {loginModal, createModal} = useContext(LandingContext);
    const { t } = useTranslation();
    const [typePasswordIntput, setTypePasswordIntput] = useState('password');
    const [classesEye, setClassesEye] = useState('show-icon show-icon--line');

    function hadlerChangeTypePasswordInput (e: any) {
        setClassesEye(typePasswordIntput === 'password' ? "show-icon show-icon--line visually-hidden" : "show-icon show-icon--line");
        setTypePasswordIntput(typePasswordIntput === 'password' ? "text" : "password");
    }

    function hadlerCreateModal (e: any) {
        e.preventDefault();
        
        loginModal.toggleModal();
        createModal.toggleModal();
    }

    return (
        <div className={"modal" + (loginModal.show ? " modal--active" : " ")}>
            <div className="modal__inner modal--exit" onClick={loginModal.toggleModal}></div>
            <div className="modal__content">
                <div className="modal__close-btn modal--exit" onClick={loginModal.toggleModal}></div>
                <div className="modal__title">{ t('landing.modals.login.title') }</div>
                <div className="modal__form">
                <form className="form" method="post" onSubmit={(e) => { e.preventDefault() }}>
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="email-1">{ t('landing.modals.login.form.email') }</label>
                        <input
                            className="form__input modal__form-input"
                            type="email" id="email-1"
                            placeholder={ t('landing.modals.login.form.email') }
                            autoComplete="username" />
                    </div>
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="password-1">{ t('landing.modals.login.form.password') }</label>
                        <div className="form__input-wrap modal__form-input-wrap">
                            <input 
                                className="form__input modal__form-input" 
                                type={typePasswordIntput}
                                id="password-1" 
                                placeholder={ t('landing.modals.login.form.password') } 
                                autoComplete="current-password" />
                            <div className="show-icon-wrap js-show-icon" onClick={hadlerChangeTypePasswordInput}>
                                <svg className="show-icon" width="20" height="20">
                                    <use xlinkHref="#eye-icon"></use>
                                </svg>
                                <svg className={classesEye} width="20" height="20">
                                    <use xlinkHref="#line-icon"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="modal__text-wrap">
                        <div className="modal__text">{ t('landing.modals.login.have-account') } <a className="modal__link modal--exit" href="#!" data-modal="modal-2" onClick={hadlerCreateModal}> { t('landing.modals.login.sign-up') }</a></div>
                    </div>
                    <button className="form__submit modal__form-submit btn btn--blue" type="submit">{ t('landing.modals.login.log-in') }</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;
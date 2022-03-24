import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LandingContext } from '../../context/LandingContext';

interface CreateModalProps {

}

const CreateModal: FC<CreateModalProps> = () => {
    const {createModal} = useContext(LandingContext);
    const { t } = useTranslation();
    const [typePasswordIntput, setTypePasswordIntput] = useState('password');
    const [classesEye, setClassesEye] = useState('show-icon show-icon--line')

    function hadlerChangeTypePasswordInput (e: any) {
        setClassesEye(typePasswordIntput === 'password' ? "show-icon show-icon--line visually-hidden" : "show-icon show-icon--line");
        setTypePasswordIntput(typePasswordIntput === 'password' ? "text" : "password");
    }

    return (
        <div className={"modal" + (createModal.show ? " modal--active" : " ")}>
            <div className="modal__inner modal--exit" onClick={createModal.toggleModal}></div>
            <div className="modal__content">
                <div className="modal__close-btn modal--exit" onClick={createModal.toggleModal}></div>
                <div className="modal__title">{ t('landing.modals.create.title').toUpperCase() }</div>
                <div className="modal__form">
                    <form className="form" method="post" onSubmit={(e) => { e.preventDefault(); }}>
                        <div className="form__group modal__form-group">
                            <label className="form__label modal__form-label" htmlFor="email">{ t('landing.modals.create.form.email') }</label>
                            <input
                                className="form__input modal__form-input"
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
                                    className="form__input modal__form-input"
                                    type={typePasswordIntput}
                                    id="password"
                                    placeholder={ t('landing.modals.create.form.password') }
                                    autoComplete="current-password"
                                />
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
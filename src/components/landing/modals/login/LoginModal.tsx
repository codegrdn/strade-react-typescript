import { FC } from 'react'

interface LoginModalProps {

}

const LoginModal: FC<LoginModalProps> = () => {
    

    return (
        <div className="modal modal--active" id="modal-1">
            <div className="modal__inner modal--exit"></div>
            <div className="modal__content">
                <div className="modal__close-btn modal--exit"></div>
                <div className="modal__title">log in</div>
                <div className="modal__form">
                <form className="form" method="post">
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="email-1">Email address</label>
                        <input 
                            className="form__input modal__form-input" 
                            type="email" id="email-1" 
                            placeholder="Enter your email address" 
                            autoComplete="username" />
                    </div>
                    <div className="form__group modal__form-group">
                        <label className="form__label modal__form-label" htmlFor="password-1">Password</label>
                        <div className="form__input-wrap modal__form-input-wrap">
                            <input 
                                className="form__input modal__form-input" 
                                type="password"
                                id="password-1" 
                                placeholder="Enter your password" 
                                autoComplete="current-password" />
                            <div className="show-icon-wrap js-show-icon">
                            <svg className="show-icon" width="20" height="20">
                                <use xlinkHref="#eye-icon"></use>
                            </svg>
                            <svg className="show-icon show-icon--line" width="20" height="20">
                                <use xlinkHref="#line-icon"></use>
                            </svg>
                            </div>
                        </div>
                        <a className="modal__link modal--exit" href="#!" data-modal="modal-3">Forgot Password?</a>
                    </div>
                    <div className="modal__text-wrap">
                        <div className="modal__text"> Don't have an account? <a className="modal__link modal--exit" href="#!" data-modal="modal-2">Sign Up</a></div>
                    </div>
                    <button className="form__submit modal__form-submit btn btn--blue" type="submit">log in</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;
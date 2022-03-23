import moment from 'moment';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoFooter from '../../shared/logo/footer/LogoFooter';
import { menu } from './data/menu';
import parse from 'html-react-parser';

interface FooterLandingProps {

}

const FooterLanding: FC<FooterLandingProps> = () => {
    const { t } = useTranslation();

    return (
        <footer className="page-footer footer">
            <div className="box">
                <div className="footer__row">
                    <div className="footer__head">
                        <div className="footer__head-wrap">
                            <LogoFooter />

                            <div className="footer__text">
                                <p>
                                    { parse(t('landing.footer.footer-text-atfter-logo')) }
                                </p>
                            </div>
                        </div>
                        <div className="footer__social">
                            <div className="social">
                                
                            </div>
                        </div>
                    </div>
                    <div className="footer__content">
                        {
                            menu.map((item) => (
                                <ul className="footer__list" key={item.id}>
                                    <li className="footer__list-item">
                                        <p className="footer__list-title">{t(item.title)}</p>
                                    </li>
                                    {
                                        item.links.map((link) => (
                                            <li className="footer__list-item" key={link.id}>
                                                <Link className="footer__list-link" to="/">{t(link.title)}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-wrap">
                        <div className="footer__date">{ moment().format("YYYY-MM-DD HH:mm") }</div>
                        <div className="footer__volume">
                        </div>
                    </div>
                    <div className="footer__copy">
                        { t('landing.footer.copyright', { year: moment().format("YYYY") }) }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterLanding;
import { FC } from 'react'
import { useTranslation } from 'react-i18next';

interface TopbarProps {

}

const Topbar: FC<TopbarProps> = () => {
    const { t } = useTranslation();

    return (
        <div className="swap__topbar">
            <h1 className="swap__topbar-title">{ t('swap.title') }</h1>
        </div>
    )
}

export default Topbar;
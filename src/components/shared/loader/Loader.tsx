import { FC } from 'react';
import './assets/css/loader.css';

interface LoaderProps {
    isRevert?: boolean,
    style?: any
}

const Loader: FC<LoaderProps> = ({ isRevert = false, style= {} }) => {
    const classes = !isRevert ? "loader" : "loader loader-revert";

    return (
        <div className="wrap-loader">
            <span className={classes} style={style}></span>
        </div>
    )
}

export default Loader;
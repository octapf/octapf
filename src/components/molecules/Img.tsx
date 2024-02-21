import { newId } from '../../utils';

export type TImg = {
    imgData: {
        type: string;
        assetURL: string;
        assetALT: string;
        label?: string;
    };
};

export const Img = ({ imgData: { type, assetURL, assetALT, label } }: TImg) => {
    const id = newId();
    return (
        <div className={type}>
            <img id={id} src={assetURL} alt={assetALT} />
            {label && (
                <label htmlFor={id} className="img-label">
                    {label}
                </label>
            )}
        </div>
    );
};
